import{j as l}from"./iframe-C4GhToTD.js";import{c as p}from"./clsx-B-dksMZM.js";import{p as c}from"./propsToClassNames-ByK-AKZy.js";const m=["size","inlineSize","blockSize","padding","paddingBlock","paddingInline","paddingBlockStart","paddingBlockEnd","paddingInlineStart","paddingInlineEnd","borderRadius","borderStartStartRadius","borderStartEndRadius","borderEndStartRadius","borderEndEndRadius","borderWidth","borderColor","borderStyle","backgroundColor","gridColumn","gridColumnStart","gridColumnEnd"],e=({children:o,as:n,className:r,ref:s,...a})=>{const t=n||"div",{stylePropClassNames:i,restProps:d}=c(m,a);return l.jsx(t,{ref:s,className:p("mox-box",...i,r),...d,children:o})},f=e;e.__docgenInfo={description:`Box component;

Responsibilities
1. Serve as a container for layout purposes.
2. Provide padding, border and background-color options.
  - The background-color will also set a contrast color for text inside the box, via CSS variables.
3. align-self, justify-self, place-self support via className prop.
4. Can be placed inside a page-grid by using the grid-columns.

Not responsible for:
1. Any alignment or distribution of child elements (use \`Shelf\`, \`Stack\`, or any other layout component for that).
2. Managing state or behavior beyond layout concerns (Atoms never do).`,methods:[],displayName:"MoxAtomBox",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{f as M,e as a,m as b};
