import{j as s}from"./iframe-B7NEBPQ1.js";import"./Box-B-_d8CU3.js";import"./Shelf-FboCSvIr.js";import{s as t}from"./Stack-BlamP-RF.js";import"./PageGrid-CD-hNHmP.js";import"./Heading-DDIka8ZG.js";import"./TextBlock-DmR4kUO6.js";import"./Paragraph-BUK6mMnK.js";import"./PageLead-BYlhvXwK.js";import"./Link-BtpD38Xu.js";import"./Checkbox-CFmmWv9Y.js";import"./RadioButton-B1BZVAoL.js";import{g as a}from"./getStylePropArgTypes-B_nPhcRt.js";import{p as i}from"./propsToClassNames-WTUPRG8B.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./mox.config-CZM7FRF_.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
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
