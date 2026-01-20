import{j as s}from"./iframe-BVcjev8I.js";import{p as k}from"./propsToClassNames-WTUPRG8B.js";import{c as g}from"./clsx-B-dksMZM.js";import{M as t}from"./TextBlock-CqLI8YW2.js";import{a as b}from"./Box-D00OoNMC.js";import"./preload-helper-DivXI2Cm.js";import"./mox.config-CZM7FRF_.js";const h=["underline","underlineHover"],a=({className:i,children:l,ref:d,as:c,...m})=>{const p=c||"a",{stylePropClassNames:u,restProps:x}=k(h,m);return s.jsx(p,{ref:d,className:g("mox-atom-link",u,i),...x,children:l})};a.__docgenInfo={description:"Link component that renders a link element, which can wrap other elements, like Cards, text.",methods:[],displayName:"MoxAtomLink",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const L={title:"React/Atoms/Interactive/Link",component:a,tags:["autodocs"],parameters:{},args:{children:s.jsx(t,{children:"Click me!"})},argTypes:{children:{table:{disable:!0}}}},e={args:{underline:"none",underlineHover:"underline"}},r={args:{underline:"underline",underlineHover:"none"}},n={args:{underline:"underline",underlineHover:"none",children:s.jsx(b,{padding:"xl",borderColor:"black",borderStyle:"dashed",borderWidth:"2px",children:s.jsx(t,{children:"I am a link box"})})}},o={args:{as:"button",type:"button",onClick:()=>alert("Link as button clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["Default","InlineText","LinkBox","AsButton"];export{o as AsButton,e as Default,r as InlineText,n as LinkBox,H as __namedExportsOrder,L as default};
