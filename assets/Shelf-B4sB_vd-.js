import{j as p}from"./iframe-DlIsFcSq.js";import{c as m}from"./clsx-B-dksMZM.js";import{p as c}from"./propsToClassNames-idq_0HoY.js";const f={gap:"gap",alignItems:"alignItems",justifyContent:"justifyContent"},n=({children:t,as:s,className:i,ref:o,...e})=>{const l=s||"div",a=c(f,e),{gap:d,alignItems:h,...r}=e;return p.jsx(l,{ref:o,className:m("mox-atom-shelf",...a,i),...r,children:t})},u=n;n.__docgenInfo={description:`Shelf component that displays its children in a shelf (horizontal) layout.
Functionally a flex-box with direction \`row\`.

Responsibilities:
1. Arrange child elements in a horizontal row.
2. Apply consistent spacing (gap) between child elements.
3. Support wrapping of child elements to the next line if necessary (\`wrap\` prop).
4. Defining inline-size of all child elements.
  - allChildrenFlex: \`1\`, etc.
5. Defining inline-size of first & last child elements.
  - firstChildFlex: \`auto\`, etc.
  - lastChildFlex: \`auto\`, etc.

Not responsible for:
...`,methods:[],displayName:"MoxAtomShelf",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{u as M};
