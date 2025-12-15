# Todo's:

- Storybook: show composites of Molecules with Atoms in code-view.
- Example to use responsive values for e.g. `padding: { mq640px: 'md' }` etc
- Atoms: layout (shelf), checkbox, text label, etc
- Molecules: checkboxField
- Organism: checkboxFormField with validation?
- Template: form with checkboxFormField with multiple?
- Research: textInline / textBlock / textStyle needed? just one? Inheritance of styles (inc. Underline for links)
- polyfill `text-box` in css for cap-baseline sizes
  - Link Atom, LinkText Atom (for text-box?)
- docs
  - Atoms, Molecules, Organisms, Templates
  - When to use margin, padding, gaps
  - Responsive scales
  - `as` prop
  - `@layer` in css voor betere specificity
  - Type safety in props

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
  - Sometimes a `component` prop is available, sometimes not. Sometimes component has white-space around it, sometimes not

## Solution

- One space-system to rule them all: typography, paddings, gaps, etc all use the same clamped space-values (`3xl`, `md`, etc). `md` is the base-size, used for a regular capital letter.
- Start with CSS:
  - React, Vue, etc components can be build on the shared css-classes
- Decrease the token-list:
  - `tokens` will only be used for Atoms (see below), only for lower levels as exception
- Atomic design system

### Atomic building blocks

#### Level 0: Base - `CSS only`

- Some basic styling, like reset-styles, calculated vars, shared styling across **Atoms**, etc.
- Globally adjustable by `tokens` from Figma Tokens Studio

#### Level 1: Atoms - `React & CSS`

- Globally adjustable by `tokens` from Figma Tokens Studio
- Locally adjustable by consistent React API:
  - Always `ref`, `classNames`, `as` prop (to change `tag`/`component` to render as), additional props, like `styles` (`{...props}`)
  - Same way of adding styling-props accross all components (e.g. `<Box inlineSize="xl">`) with option to allow for responsive styles
- Almost never changes in API
  - if it does, API usually gets more options, not less (e.g. `inlineSize` prop has [`3xs`, `2xs`, ... , ]. It gets updated to also allow `4xs`)
- CSS: Always styled in a @layer `atoms`, to allow for easy specificity overrides
- Tiny components, usually single `tag` (e.g. `<div>`)
- Examples: `box`, `text`, `link`, `shelf` / `stack` (horizontal / vertical flexbox), `checkbox` (just the `<input>`). The checkbox would be build like this:

```tsx
<input
  type="checkbox"
  classNames={`mox-checkbox ${className}`}
  ref={ref}
  as={as}
  {...props}
/>
```

#### Level 2: Molecules - `React only`

- Consists of single/more **Atoms**
- Globally adjustable to build your own variation based on **Atoms**
- Locally adjustable by component API:
  - Usually `ref` for any focusable Atoms inside the Molecule, like a `link`
  - Always `classNames`, additional props (like `styles`) for top component
  - Usually `as` prop for any interactive component
- Could change in API: not as robust as Atoms
- CSS: Always styled in a @layer `molecules`, to allow for easy specificity overrides
- Examples: `checkboxField` which is built with atoms:

```tsx
  <Shelf gap="sm">
    <Input {...props}>
    <Text as="label">{children}</Text>
  </Shelf>
```

#### Level 3: Organisms - `React only`

- Consists of single/more **Atoms** and/or **Molecules**
- Globally adjustable to build your own variation on **Atoms** and/or **Molecules**
- Locally adjustable by component API:
  - Always `classNames`, additional props (like `styles`) for top component
  - Sometimes `as` prop for any interactive component
  - Sometimes `asFactory` prop for multiple interactive components (e.g. breadcrumb, navList)
- Could change in API: less robust than Molecules & Atoms
- CSS: Always styled in a @layer `organisms`, to allow for easy specificity overrides
- Examples: `checkboxFieldBlock` which is built with atoms / molecules:

```tsx
<Stack gap="xs">
  <CheckboxField>Some label</CheckboxField>
  <ErrorText>some error</ErrorText>
</Stack>
```

## Relevant links

### NLDS

- [NLDS homepage](https://www.nldesignsystem.nl/)

### Atomic design systems

...

### Design

- [Utopia fluid responsive design](https://utopia.fyi/)

## Ideas for components

- Nice horizontal scroll
- Tooltip (a11y!)
- Toast (a11y!)
- Dialog
- Aside dialog
