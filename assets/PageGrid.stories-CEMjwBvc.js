import{j as r}from"./iframe-Dy3yv9X5.js";import{c as u}from"./clsx-B-dksMZM.js";import{p as x}from"./propsToClassNames-WTUPRG8B.js";import{a as n}from"./Box-B7k2HJth.js";import{g as f}from"./getStylePropArgTypes-NCDlwZZ_.js";import{M as h}from"./GridItem-Ctltu9j3.js";import"./preload-helper-DivXI2Cm.js";import"./mox.config-CZM7FRF_.js";const t=[],a=({children:s,as:i,className:d,ref:p,...m})=>{const c=i||"div",{stylePropClassNames:l,restProps:g}=x(t,m);return r.jsx(c,{ref:p,className:u("mox-atom-page-grid",...l,d),...g,children:s})},b=a;a.__docgenInfo={description:`Page grid component.
The layout of a page is not defined with a <Container> and <Row> / <Column> components, since that is too rigid
(often, a design needs to 'break out' of a container, or have elements that span multiple columns, etc).

A Box can be placed inside a PageGrid, using the grid-column props to position it.
The page-grid is divided into 12 equal columns with a gap between each column, and space on the sides so the 'page' is limited to a max inline-size.
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|----|----|----|----|
| [window-start] | [page-start] | 2 | 3 | 4  | 5 | 6 | 7 | 8 | 9 | 10 | 11 | [page-end] | [window-end] |

Responsibilities
1. Create a block that can be used as a page grid container, by using grid-lines.

Not responsible for:
1. Padding, background-colors, borders, etc (use a \`MoxBox\` inside if you need them).`,methods:[],displayName:"MoxAtomPageGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const S={title:"React/Atoms/Layout/PageGrid",component:b,tags:["autodocs"],parameters:{layout:"fullscreen",viewport:{defaultViewport:"tablet"},docs:{description:{story:"Bekijk deze pagina full-screen voor een beter beeld hoe het grid werkt en de zijkanten op laat schalen."}}},args:{},argTypes:{children:{table:{disable:!0}},...f(t)}},e={args:{children:r.jsx(n,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})}},o={args:{children:r.jsx(h,{gridColumnStart:"windowStart",children:r.jsx(n,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MoxBox backgroundColor={"primary-subtle"} padding="md">
        {"Page Grid Content"}
      </MoxBox>
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MoxGridItem gridColumnStart={"windowStart"}>
        <MoxBox backgroundColor={"primary-subtle"} padding="md">
          {"Page Grid Content"}
        </MoxBox>
      </MoxGridItem>
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","FromWindowStart"];export{e as Default,o as FromWindowStart,R as __namedExportsOrder,S as default};
