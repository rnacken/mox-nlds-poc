import{j as t}from"./iframe-CtQZUnqU.js";import{M as s}from"./Link-gG3BDl0O.js";import{M as a}from"./TextBlock-CtAimBWh.js";import{M as i}from"./Box-rGHLiqoN.js";import"./preload-helper-DivXI2Cm.js";import"./propsToClassNames-uZUlCvuI.js";import"./mox.config-DXfmhFYv.js";import"./clsx-B-dksMZM.js";const b={title:"React/Atoms/Interactive/Link",component:s,tags:["autodocs"],parameters:{},args:{children:t.jsx(a,{children:"Click me!"})},argTypes:{children:{table:{disable:!0}}}},e={args:{underline:"none",underlineHover:"underline"}},r={args:{underline:"underline",underlineHover:"none"}},n={args:{underline:"underline",underlineHover:"none",children:t.jsx(i,{padding:"xl",borderColor:"zwart",borderStyle:"dashed",borderWidth:"2px",children:t.jsx(a,{children:"I am a link box"})})}},o={args:{as:"button",type:"button",onClick:()=>alert("Link as button clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    children: <MoxBox padding="xl" borderColor="zwart" borderStyle={"dashed"} borderWidth={"2px"}>
        <MoxTextBlock>I am a link box</MoxTextBlock>
      </MoxBox>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    as: "button",
    type: "button",
    onClick: () => alert("Link as button clicked!")
  }
}`,...o.parameters?.docs?.source}}};const k=["Default","InlineText","LinkBox","AsButton"];export{o as AsButton,e as Default,r as InlineText,n as LinkBox,k as __namedExportsOrder,b as default};
