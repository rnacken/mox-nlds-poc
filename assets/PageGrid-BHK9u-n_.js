import{j as p}from"./iframe-C3RczD5j.js";import{c as m}from"./clsx-B-dksMZM.js";import{p as c}from"./propsToClassNames-WTUPRG8B.js";const l=[],e=({children:n,as:o,className:s,ref:a,...t})=>{const i=o||"div",{stylePropClassNames:r,restProps:d}=c(l,t);return p.jsx(i,{ref:a,className:m("mox-atom-page-grid",...r,s),...d,children:n})},h=e;e.__docgenInfo={description:`Page grid component.
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
1. Padding, background-colors, borders, etc (use a \`MoxBox\` inside if you need them).`,methods:[],displayName:"MoxAtomPageGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{h as M,l as p};
