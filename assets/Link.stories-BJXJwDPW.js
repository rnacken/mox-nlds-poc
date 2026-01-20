import{j as a}from"./iframe-C3RczD5j.js";import{M as s}from"./Link-C-BHbJLX.js";import{M as t}from"./TextBlock-BFaVROqX.js";import{M as i}from"./Box-pecxzf7c.js";import"./preload-helper-DivXI2Cm.js";import"./propsToClassNames-WTUPRG8B.js";import"./mox.config-CZM7FRF_.js";import"./clsx-B-dksMZM.js";const k={title:"React/Atoms/Interactive/Link",component:s,tags:["autodocs"],parameters:{},args:{children:a.jsx(t,{children:"Click me!"})},argTypes:{children:{table:{disable:!0}}}},e={args:{underline:"none",underlineHover:"underline"}},r={args:{underline:"underline",underlineHover:"none"}},n={args:{underline:"underline",underlineHover:"none",children:a.jsx(i,{padding:"xl",borderColor:"black",borderStyle:"dashed",borderWidth:"2px",children:a.jsx(t,{children:"I am a link box"})})}},o={args:{as:"button",type:"button",onClick:()=>alert("Link as button clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    underline: "none",
    underlineHover: "underline"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    underline: "underline",
    underlineHover: "none"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    underline: "underline",
    underlineHover: "none",
    children: <MoxBox padding="xl" borderColor="black" borderStyle={"dashed"} borderWidth={"2px"}>
        <MoxTextBlock>I am a link box</MoxTextBlock>
      </MoxBox>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    as: "button",
    type: "button",
    onClick: () => alert("Link as button clicked!")
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","InlineText","LinkBox","AsButton"];export{o as AsButton,e as Default,r as InlineText,n as LinkBox,g as __namedExportsOrder,k as default};
