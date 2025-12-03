# Todo's:

- Setup Storybook, stories, docs
- Box with padding/sizes with `src/moxReact/helpers/propsToClassNames.tsx`
  - https://chatgpt.com/s/t_692f99b17e148191a0814326cd8bf588
- Example to use responsive values for e.g. `padding: { mq640px: 'md' }` etc
- Atoms: layout (shelf), checkbox, text label
- Molecules: checkboxField
- Organism: checkboxFormField with validation?
- Template: form with checkboxFormField with multiple?
- Reserch: textInline / textBlock / textStyle needed? just one?
- polyfill `text-edge` in css for cap-baseline sizes
- docs
  - Atoms, Molecules, Organisms, Templates
  - When to use margin, padding, gaps
  - Responsive scales
  - `as` prop
  - `@layer` in css voor betere specificity
  - Type safety props

---

# POC for MOX (MijnOverheid X) NLDS implementation

> In Latin, 'mox' means 'soon', 'early'
> "Vive! Mox senex eris" ("Live! Soon you will be old")

## Goals

- Show simpler way of setting up components with atomic structure
- Drastically lower amount of (needed) figma-tokens/CSS-vars
- Show better, more consistent spacing system
- Show (almost) typesafe way of using React-components with CSS-classnames
- Setup **Definition of Done** type set of rules for creating any components for consistency, and (re)usability with predictable rules for `ref`s, `className`, `props`. Also for `as` prop to render component in different tag to allow for easier usage in Next / use links as a button / etc.
- Setup `use client` to allow for usage of components in react-server-components in NextJS.

## Current issues

- Inconsistent APIs with components from different sources
  - Sometimes a `component` prop is available, sometimes not.

## Relevant links

### NLDS

- [NLDS homepage](https://www.nldesignsystem.nl/)

### Atomic design systems

...

### Design

- [Utopia fluid responsive design](https://utopia.fyi/)
