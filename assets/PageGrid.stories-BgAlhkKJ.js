import{j as o}from"./iframe-CtQZUnqU.js";import{M as a,p as n}from"./PageGrid-fhweB-4V.js";import{M as t}from"./Box-rGHLiqoN.js";import{g as d}from"./getStylePropArgTypes-DLLgGULA.js";import{M as s}from"./GridItem-8HYHJoOy.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-uZUlCvuI.js";import"./mox.config-DXfmhFYv.js";const M={title:"React/Atoms/Layout/PageGrid",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",viewport:{defaultViewport:"tablet"},docs:{description:{story:"Bekijk deze pagina full-screen voor een beter beeld hoe het grid werkt en de zijkanten op laat schalen."}}},args:{},argTypes:{children:{table:{disable:!0}},...d(n)}},r={args:{children:o.jsx(t,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})}},e={args:{children:o.jsx(s,{gridColumnStart:"windowStart",children:o.jsx(t,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MoxBox backgroundColor={"primary-subtle"} padding="md">
        {"Page Grid Content"}
      </MoxBox>
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MoxGridItem gridColumnStart={"windowStart"}>
        <MoxBox backgroundColor={"primary-subtle"} padding="md">
          {"Page Grid Content"}
        </MoxBox>
      </MoxGridItem>
  }
}`,...e.parameters?.docs?.source}}};const f=["Default","FromWindowStart"];export{r as Default,e as FromWindowStart,f as __namedExportsOrder,M as default};
