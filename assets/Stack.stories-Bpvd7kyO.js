import{j as s}from"./iframe-C3RczD5j.js";import"./Box-pecxzf7c.js";import"./Shelf-BTL0hEZJ.js";import{s as t}from"./Stack-B5Ift6-G.js";import"./PageGrid-BHK9u-n_.js";import"./Heading-BJKsgGK2.js";import"./TextBlock-BFaVROqX.js";import"./Paragraph-D1MYvOJk.js";import"./PageLead-D_AqeQjl.js";import"./Link-C-BHbJLX.js";import"./Checkbox-9eibhNtr.js";import"./RadioButton--zsQUBGA.js";import{g as a}from"./getStylePropArgTypes-aGthtbFn.js";import{p as i}from"./propsToClassNames-WTUPRG8B.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./mox.config-CZM7FRF_.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
          section { 
            border: 2px solid orange;
          }
           section > div {
            background-color: lightblue;
        }
        `}),s.jsx(r,{})]})]},o={render:r=>{const{stylePropClassNames:e}=i(t,r);return s.jsxs("section",{className:`mox-atom-stack ${e.join(" ")}`,children:[s.jsx("div",{children:"box 1"}),s.jsx("div",{children:"box 2"}),s.jsx("div",{children:"box 3"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      stylePropClassNames
    } = propsToClassNames(stackStyleProps, props);
    return <section className={\`mox-atom-stack \${stylePropClassNames.join(" ")}\`}>
        <div>{"box 1"}</div>
        <div>{"box 2"}</div>
        <div>{"box 3"}</div>
      </section>;
  }
}`,...o.parameters?.docs?.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,k as default};
