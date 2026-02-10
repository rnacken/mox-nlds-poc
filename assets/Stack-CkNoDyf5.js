import{j as c}from"./iframe-C4GhToTD.js";import{p}from"./propsToClassNames-ByK-AKZy.js";import{c as m}from"./clsx-B-dksMZM.js";const d=["direction","gap","columnGap","rowGap","alignItems","justifyContent","wrap"],e=({children:n,as:t,className:s,ref:i,...a})=>{const o=t||"div",{stylePropClassNames:l,restProps:r}=p(d,a);return c.jsx(o,{ref:i,className:m("mox-stack",l,s),...r,children:n})},y=e;e.__docgenInfo={description:`Stack component that displays its children in a stack (vertical) layout.
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
1. Complex grid/flex layouts`,methods:[],displayName:"MoxAtomStack",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{y as M,e as a,d as s};
