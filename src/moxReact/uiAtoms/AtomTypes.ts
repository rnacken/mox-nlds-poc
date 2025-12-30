import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import type { moxConfig } from "../../moxCss/mox.config";

// T = 'a' => HTMLAnchorElement, T = 'div' => HTMLDivElement, T = <SomeReactComponent> => any, etc.
type ElementFromElementType<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : any;

// e.g. ['inlineSize', 'backgroundColor']
export type StyleProps = ReadonlyArray<keyof typeof moxConfig.props>;

type Breakpoint =
  | `${keyof typeof moxConfig.viewportBreakpoints}Min`
  | `${keyof typeof moxConfig.viewportBreakpoints}Max`
  | `${keyof typeof moxConfig.containerBreakpoints}Min`
  | `${keyof typeof moxConfig.containerBreakpoints}Max`;

type PropKey = keyof typeof moxConfig.props;

type PropOptions<K extends PropKey> =
  keyof (typeof moxConfig.props)[K]["options"];

type PossibleResponsivePropValue<K extends PropKey> =
  | PropOptions<K>
  | Partial<Record<Breakpoint, PropOptions<K>>>;

export type StylePropTypes<M extends StyleProps> = Partial<{
  [K in M[number]]: PossibleResponsivePropValue<K>;
}>;

// todo: nog extra generic om styling props toe te voegen later
export type AtomProps<
  T extends ElementType = "div",
  S extends StyleProps = []
> = {
  children?: ReactNode;
  className?: string;
  as?: T;
  ref?: React.Ref<ElementFromElementType<T>>;
} & Partial<StylePropTypes<S>> &
  ComponentPropsWithoutRef<T>;
