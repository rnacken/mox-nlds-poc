import{j as o}from"./iframe-BKLOKDG6.js";import{c as m}from"./clsx-B-dksMZM.js";import{p as l}from"./propsToClassNames-CSAvo6AX.js";import{a as g}from"./Box-BkFDLCHd.js";import"./preload-helper-DivXI2Cm.js";import"./mox.config-BgRidV_e.js";const u=[],s=({children:n,as:a,className:t,ref:r,...i})=>{const d=a||"div",{stylePropClassNames:c,restProps:p}=l(u,i);return o.jsx(d,{ref:r,className:m("mox-atom-page-grid",...c,t),...p,children:n})},f=s;s.__docgenInfo={description:`Page grid component.
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
1. Padding, background-colors, borders, etc (use a \`MoxBox\` inside if you need them).`,methods:[],displayName:"MoxAtomPageGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const T={title:"React/Atoms/Layout/PageGrid",component:f,tags:["autodocs"],parameters:{},args:{children:o.jsx(g,{style:{gridColumn:"page"},borderColor:"black",borderWidth:"1px",borderStyle:"dashed",paddingBlock:"lg",children:"📦"}),style:{}}},e={args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    // as: "section",
  }
}`,...e.parameters?.docs?.source}}};const R=["AsSection"];export{e as AsSection,R as __namedExportsOrder,T as default};
