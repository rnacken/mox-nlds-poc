import{j as o}from"./iframe-B7NEBPQ1.js";import{M as a,p as n}from"./PageGrid-CD-hNHmP.js";import{M as t}from"./Box-B-_d8CU3.js";import{g as d}from"./getStylePropArgTypes-B_nPhcRt.js";import{M as s}from"./GridItem-D7oJ26O6.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-WTUPRG8B.js";import"./mox.config-CZM7FRF_.js";const M={title:"React/Atoms/Layout/PageGrid",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",viewport:{defaultViewport:"tablet"},docs:{description:{story:"Bekijk deze pagina full-screen voor een beter beeld hoe het grid werkt en de zijkanten op laat schalen."}}},args:{},argTypes:{children:{table:{disable:!0}},...d(n)}},r={args:{children:o.jsx(t,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})}},e={args:{children:o.jsx(s,{gridColumnStart:"windowStart",children:o.jsx(t,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
