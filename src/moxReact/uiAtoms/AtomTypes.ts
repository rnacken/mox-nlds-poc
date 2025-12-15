import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import type { moxConfig } from "../../moxCss/mox.config";

// T = 'a' => HTMLAnchorElement, T = 'div' => HTMLDivElement, T = <SomeReactComponent> => any, etc.
type ElementFromElementType<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : any;

// e.g. { inlineSize: 'inlineSpace', backgroundColor: 'backgroundColor' }
export type StylePropMap = Record<string, keyof typeof moxConfig.properties>;

type Breakpoint =
  | `${keyof typeof moxConfig.viewportBreakpoints}Min`
  | `${keyof typeof moxConfig.viewportBreakpoints}Max`
  | `${keyof typeof moxConfig.containerBreakpoints}Min`
  | `${keyof typeof moxConfig.containerBreakpoints}Max`;

type PropKey = keyof typeof moxConfig.properties;

type PropOptions<K extends PropKey> =
  (typeof moxConfig.properties)[K]["options"][number];

type PossibleResponsivePropValue<K extends PropKey> =
  | PropOptions<K>
  | Partial<Record<Breakpoint, PropOptions<K>>>;

export type StylePropTypes<M extends StylePropMap> = {
  [K in keyof M]: PossibleResponsivePropValue<M[K]>;
};

// todo: nog extra generic om styling props toe te voegen later
export type AtomProps<
  T extends ElementType = "div",
  S extends StylePropMap = {}
> = {
  children?: ReactNode;
  className?: string;
  as?: T;
  ref?: React.Ref<ElementFromElementType<T>>;
} & Partial<StylePropTypes<S>> &
  ComponentPropsWithoutRef<T>;

// Whenever you create a styling-prop map for an Atom component, use this type to satisfy agains (`{...} as const satisfies StylingPropMap`)
export type StylingPropMap = Record<string, PropKey>;
