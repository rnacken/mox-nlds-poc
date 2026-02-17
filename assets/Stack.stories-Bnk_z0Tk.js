import{j as s}from"./iframe-BfIpySjW.js";import"./Box-CoV0B7-u.js";import"./Shelf-BxzZrRds.js";import{s as t}from"./Stack-Bdjh3WSn.js";import"./PageGrid-DgeectCT.js";import"./Heading-BJjf1_Cc.js";import"./TextBlock-D4bk8mmL.js";import"./Paragraph-2Y7krO4V.js";import"./PageLead-BnwdOOa3.js";import"./Link-BDKeEW_g.js";import"./Checkbox-ClyOzwQE.js";import"./RadioButton-Bm4cX8lO.js";import{g as a}from"./getStylePropArgTypes-Bvecibwu.js";import{p as i}from"./propsToClassNames-BAqCd76W.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./mox.config-DLA_t6mp.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
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
