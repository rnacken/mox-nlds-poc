import{j as e}from"./iframe-Bn3uxU6K.js";import{p as d}from"./propsToClassNames-BS7oPWl9.js";import{c as f}from"./clsx-B-dksMZM.js";import"./preload-helper-DivXI2Cm.js";const u={gap:"gap",alignItems:"alignItems",justifyContent:"justifyContent"},a=({children:o,as:i,className:r,ref:c,...s})=>{const l=i||"div",p=d(u,s),{gap:g,alignItems:x,...m}=s;return e.jsx(l,{ref:c,className:f("mox-atom-stack",p,r),...m,children:o})},n=a;a.__docgenInfo={description:`Stack component that displays its children in a stack (vertical) layout.
Functionally a flex-box with direction \`column\`.

Responsibilities:
1. Arrange child elements in a vertical column.
2. Apply consistent spacing (gap) between child elements.
3. Support wrapping of child elements to the next line if necessary (\`wrap\` prop).
4. Defining inline-size of all child elements.
  - allChildrenFlex: \`1\`, etc.
5. Defining inline-size of first & last child elements.
  - firstChildFlex: \`auto\`, etc.
  - lastChildFlex: \`auto\`, etc.

Not responsible for:
...`,methods:[],displayName:"MoxAtomStack",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const k={title:"React/Atoms/Layout/Stack",component:n,tags:["autodocs"],parameters:{},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"📦"}),e.jsx(n,{children:"📦"})]})}},t={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // as: "section",
  }
}`,...t.parameters?.docs?.source}}};const C=["AsSection"];export{t as AsSection,C as __namedExportsOrder,k as default};
