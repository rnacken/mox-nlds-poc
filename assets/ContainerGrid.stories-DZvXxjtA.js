import{j as e}from"./iframe-BfIpySjW.js";import{g as b}from"./getStylePropArgTypes-Bvecibwu.js";import{c as h}from"./clsx-B-dksMZM.js";import{p as k}from"./propsToClassNames-BAqCd76W.js";import{M as r}from"./Box-CoV0B7-u.js";import{M as y}from"./GridItem-Q9d7se-F.js";import"./preload-helper-DivXI2Cm.js";import"./mox.config-DLA_t6mp.js";const i=["itemSize"],t=({children:s,as:c,className:l,ref:m,...p})=>{const u=c||"div",{stylePropClassNames:g,restProps:x}=k(i,p);return e.jsx(u,{ref:m,className:h("mox-container-grid",...g,l),...x,children:s})};t.__docgenInfo={description:`Container grid component.
Werkt zoals de page-grid, maar dit wordt gebruikt om een pagina handig in responsive \`columns\` te splitsen.
Wezenlijk verschil met de page-grid is dat dit niet de zijruimte van de pagina corrigeert; deze grid vult altijd de complete ruimte op.
Verder baseert de container-grid zijn breakpoints op @container-queries. Een page-grid gebruikt @media queries.
Ook is dit een grid wat beter geschikt is voor herhalende content, zoals Cards, die mogelijk moeten 'wrappen' op een nieuwe regel.

Een page-grid zet een container-type, dus als je dit grid gebruikt binnen een page-grid gebruikt hij dat als referentie voor de container-grootte.

Gebruikt de property \`itemSize\` om te bepalen welke verdeling van de beschikbare kolommen (12 bij een desktop scherm) je wilt.

Verantwoordelijkheden:
1. Verdeel de beschikbare ruimte in kolommen, afhankelijk van de container-grootte.`,methods:[],displayName:"MoxAtomContainerGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const T={title:"React/Atoms/Layout/ContainerGrid",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{},argTypes:{children:{table:{disable:!0}},...b(i)},decorators:[s=>e.jsx("div",{style:{containerType:"inline-size"},children:e.jsx(s,{})})]},n={args:{itemSize:"half",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{backgroundColor:"secondary-subtle",padding:"md",children:"half"}),e.jsx(r,{backgroundColor:"secondary-subtle",padding:"md",children:"half"})]})}},o={args:{itemSize:"third",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{backgroundColor:"success-subtle",padding:"md",children:"third"}),e.jsx(r,{backgroundColor:"success-subtle",padding:"md",children:"third"}),e.jsx(r,{backgroundColor:"success-subtle",padding:"md",children:"third"})]})}},d={args:{itemSize:"quarter",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),e.jsx(r,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),e.jsx(r,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),e.jsx(r,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),e.jsx(r,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"})]})}},a={parameters:{docs:{description:{story:"Je kan een `gridItem` gebruiken om meerdere kolommen te beslaan."}}},args:{itemSize:"sixth",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),e.jsx(r,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),e.jsx(r,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),e.jsx(r,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),e.jsx(y,{gridColumn:"span2",children:e.jsx(r,{backgroundColor:"secondary-subtle-2",padding:"md",children:"sixth (with span 2)"})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "half",
    children: <>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"half"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"half"}
        </MoxBox>
      </>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "third",
    children: <>
        <MoxBox backgroundColor="success-subtle" padding="md">
          {"third"}
        </MoxBox>
        <MoxBox backgroundColor="success-subtle" padding="md">
          {"third"}
        </MoxBox>
        <MoxBox backgroundColor="success-subtle" padding="md">
          {"third"}
        </MoxBox>
      </>
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "quarter",
    children: <>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
      </>
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Je kan een \`gridItem\` gebruiken om meerdere kolommen te beslaan."
      }
    }
  },
  args: {
    itemSize: "sixth",
    children: <>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxGridItem gridColumn={"span2"}>
          <MoxBox backgroundColor="secondary-subtle-2" padding="md">
            {"sixth (with span 2)"}
          </MoxBox>
        </MoxGridItem>
      </>
  }
}`,...a.parameters?.docs?.source}}};const v=["Half","Third","Quarter","Sixth"];export{n as Half,d as Quarter,a as Sixth,o as Third,v as __namedExportsOrder,T as default};
