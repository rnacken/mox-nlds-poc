import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { propsToClassNames } from "./propsToClassNames";
import type { StyleProps } from "../uiAtoms/AtomTypes";

describe("propsToClassNames helper", () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Spy on console.warn to verify validation warnings
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Test Case 4: Single style props conversion", () => {
    it("should correctly convert single style prop to CSS class name", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const props = {
        inlineSize: "xl",
        otherProp: "value",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toEqual(["mox-inlineSize-xl"]);
      expect(restProps).toEqual({ otherProp: "value" });
    });

    it("should handle multiple single style props", () => {
      const styleProps: StyleProps = ["inlineSize", "padding", "gap"];
      const props = {
        inlineSize: "xl",
        padding: "md",
        gap: "sm",
        className: "custom-class",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-inlineSize-xl");
      expect(stylePropClassNames).toContain("mox-padding-md");
      expect(stylePropClassNames).toContain("mox-gap-sm");
      expect(stylePropClassNames).toHaveLength(3);
      expect(restProps).toEqual({ className: "custom-class" });
    });

    it("should handle special characters in option values", () => {
      const styleProps: StyleProps = ["borderRadius"];
      const props = {
        borderRadius: "1px",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      // Special characters should be replaced with dashes
      expect(stylePropClassNames).toEqual(["mox-borderRadius-1px"]);
      expect(restProps).toEqual({});
    });

    it("should handle properties with state modifiers", () => {
      const styleProps: StyleProps = ["underlineHover"];
      const props = {
        underlineHover: "underline",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toEqual(["mox-underlineHover-underline-hover"]);
      expect(restProps).toEqual({});
    });

    it("should warn and skip invalid prop values", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const props = {
        inlineSize: "invalid-value",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toEqual([]);
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("is not a valid value")
      );
    });

    it("should skip undefined props in moxConfig and add to restProps", () => {
      const styleProps: StyleProps = ["nonExistentProp" as any];
      const props = {
        nonExistentProp: "value",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      // Props not in moxConfig are added to restProps, not warned about
      expect(stylePropClassNames).toEqual([]);
      expect(restProps).toEqual({ nonExistentProp: "value" });
    });
  });

  describe("Test Case 5: Responsive style props conversion", () => {
    it("should correctly convert responsive style props to CSS class names", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const props = {
        inlineSize: { mobileMin: "xl", tabletMin: "lg" },
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-inlineSize-xl@mobileMin");
      expect(stylePropClassNames).toContain("mox-inlineSize-lg@tabletMin");
      expect(stylePropClassNames).toHaveLength(2);
      expect(restProps).toEqual({});
    });

    it("should handle multiple responsive breakpoints for a single property", () => {
      const styleProps: StyleProps = ["padding"];
      const props = {
        padding: {
          mobileMin: "sm",
          mobileMax: "md",
          tabletMin: "lg",
          desktopMin: "xl",
        },
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-padding-sm@mobileMin");
      expect(stylePropClassNames).toContain("mox-padding-md@mobileMax");
      expect(stylePropClassNames).toContain("mox-padding-lg@tabletMin");
      expect(stylePropClassNames).toContain("mox-padding-xl@desktopMin");
      expect(stylePropClassNames).toHaveLength(4);
      expect(restProps).toEqual({});
    });

    it("should handle container query breakpoints", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const props = {
        inlineSize: { cq200Min: "xs", cq400Min: "md", cq600Max: "lg" },
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-inlineSize-xs@cq200Min");
      expect(stylePropClassNames).toContain("mox-inlineSize-md@cq400Min");
      expect(stylePropClassNames).toContain("mox-inlineSize-lg@cq600Max");
      expect(stylePropClassNames).toHaveLength(3);
    });

    it("should correctly separate non-style props from responsive style props", () => {
      const styleProps: StyleProps = ["inlineSize", "padding"];
      const props = {
        inlineSize: { mobileMin: "xl" },
        padding: { tabletMin: "md" },
        onClick: () => {},
        className: "custom",
        "data-testid": "test",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-inlineSize-xl@mobileMin");
      expect(stylePropClassNames).toContain("mox-padding-md@tabletMin");
      expect(stylePropClassNames).toHaveLength(2);
      expect(restProps).toEqual({
        onClick: expect.any(Function),
        className: "custom",
        "data-testid": "test",
      });
    });

    it("should handle mix of single and responsive props", () => {
      const styleProps: StyleProps = ["inlineSize", "padding", "gap"];
      const props = {
        inlineSize: "xl", // single value
        padding: { mobileMin: "md", tabletMin: "lg" }, // responsive
        gap: "sm", // single value
        id: "test-id",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-inlineSize-xl");
      expect(stylePropClassNames).toContain("mox-padding-md@mobileMin");
      expect(stylePropClassNames).toContain("mox-padding-lg@tabletMin");
      expect(stylePropClassNames).toContain("mox-gap-sm");
      expect(stylePropClassNames).toHaveLength(4);
      expect(restProps).toEqual({ id: "test-id" });
    });

    it("should handle responsive props with state modifiers", () => {
      const styleProps: StyleProps = ["underlineHover"];
      const props = {
        underlineHover: { mobileMin: "underline", tabletMin: "none" },
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain(
        "mox-underlineHover-underline@mobileMin-hover"
      );
      expect(stylePropClassNames).toContain(
        "mox-underlineHover-none@tabletMin-hover"
      );
      expect(stylePropClassNames).toHaveLength(2);
    });

    it("should warn and skip invalid responsive prop values", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const props = {
        inlineSize: { mobileMin: "invalid-value", tabletMin: "xl" },
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      // Only the valid value should be included
      expect(stylePropClassNames).toContain("mox-inlineSize-xl@tabletMin");
      expect(stylePropClassNames).toHaveLength(1);
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("is not a valid value")
      );
    });

    it("should handle special characters in responsive option values", () => {
      const styleProps: StyleProps = ["borderRadius"];
      const props = {
        borderRadius: { mobileMin: "1px", tabletMin: "2px" },
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toContain("mox-borderRadius-1px@mobileMin");
      expect(stylePropClassNames).toContain("mox-borderRadius-2px@tabletMin");
      expect(stylePropClassNames).toHaveLength(2);
    });
  });

  describe("Edge cases", () => {
    it("should handle empty style props", () => {
      const styleProps: StyleProps = [];
      const props = {
        inlineSize: "xl",
        className: "custom",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toEqual([]);
      expect(restProps).toEqual({
        inlineSize: "xl",
        className: "custom",
      });
    });

    it("should handle empty props object", () => {
      const styleProps: StyleProps = ["inlineSize", "padding"];
      const props = {};

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toEqual([]);
      expect(restProps).toEqual({});
    });

    it("should handle null and undefined prop values gracefully", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const props = {
        inlineSize: null,
        padding: undefined,
        gap: "sm",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      // inlineSize is null (not a string), so it's skipped and not converted
      // padding and gap are not in styleProps, so they go to restProps
      expect(stylePropClassNames).toEqual([]);
      expect(restProps).toEqual({
        padding: undefined,
        gap: "sm",
      });
    });

    it("should preserve all non-style props including complex types", () => {
      const styleProps: StyleProps = ["inlineSize"];
      const onClick = () => console.log("clicked");
      const children = ["child1", "child2"];

      const props = {
        inlineSize: "xl",
        onClick,
        children,
        disabled: true,
        "aria-label": "test",
      };

      const { stylePropClassNames, restProps } = propsToClassNames(
        styleProps,
        props
      );

      expect(stylePropClassNames).toEqual(["mox-inlineSize-xl"]);
      expect(restProps).toEqual({
        onClick,
        children,
        disabled: true,
        "aria-label": "test",
      });
    });
  });
});
