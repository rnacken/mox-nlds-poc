import{j as s}from"./iframe-CtQZUnqU.js";import"./Box-rGHLiqoN.js";import"./Shelf-C-joVK_e.js";import{s as t}from"./Stack-koQDK7dc.js";import"./PageGrid-fhweB-4V.js";import"./Heading-DpqxNVt1.js";import"./TextBlock-CtAimBWh.js";import"./Paragraph-BNorWjja.js";import"./PageLead-COsg2Uir.js";import"./Link-gG3BDl0O.js";import"./Checkbox-X4P59jcF.js";import"./RadioButton-BDXOHZIG.js";import{g as a}from"./getStylePropArgTypes-DLLgGULA.js";import{p as i}from"./propsToClassNames-uZUlCvuI.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./mox.config-DXfmhFYv.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
          section { 
            border: 2px solid orange;
          }
           section > div {
            background-color: lightblue;
        }
        `}),s.jsx(r,{})]})]},o={render:r=>{const{stylePropClassNames:e}=i(t,r);return s.jsxs("section",{className:`mox-stack ${e.join(" ")}`,children:[s.jsx("div",{children:"box 1"}),s.jsx("div",{children:"box 2"}),s.jsx("div",{children:"box 3"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      stylePropClassNames
    } = propsToClassNames(stackStyleProps, props);
    return <section className={\`mox-stack \${stylePropClassNames.join(" ")}\`}>
        <div>{"box 1"}</div>
        <div>{"box 2"}</div>
        <div>{"box 3"}</div>
      </section>;
  }
}`,...o.parameters?.docs?.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,k as default};
