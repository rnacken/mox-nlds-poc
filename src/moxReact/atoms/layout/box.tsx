/**
 * Box component;
 *
 * Responsibilities
 * 1. Serve as a container for layout purposes.
 * 2. Provide padding, border and background options.
 * 3. ? Support flexbox properties for alignment and distribution of child elements.
 */

import clsx from "clsx";
import React, {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
} from "react";

type BoxProps<T extends ElementType = "div"> = {
  children?: ReactNode;
  className?: string;
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Box = <T extends ElementType = "div">(
  props: BoxProps<T> & { ref?: React.Ref<unknown> }
) => {
  const { children, as, className, ref, ...restProps } = props;
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const propClassNames: Array<string> = [];

  return (
    <Component
      ref={ref}
      className={clsx(
        "some-class",
        "another-one",
        ...propClassNames,
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const Test = () => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    linkRef.current?.focus();
  }, []);

  return (
    <>
      <Box as="section" href="#">
        Section
      </Box>
      <Box as="a" href="#" ref={linkRef}>
        Link
      </Box>
    </>
  );
};
