import{j as n}from"./iframe-Dy3yv9X5.js";import{a as c,M as l,t as u}from"./TextBlock-CunicX3k.js";import{g as d}from"./getStylePropArgTypes-NCDlwZZ_.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-WTUPRG8B.js";import"./mox.config-CZM7FRF_.js";const T={title:"React/Atoms/Typography/TextBlock",component:c,tags:["autodocs"],parameters:{},args:{children:"Sample text content"},argTypes:{children:{table:{disable:!0}},...d(u)}},e={args:{style:{borderBlock:"2px dashed orange"}}},t={args:{fontSize:"sm"}},o={args:{fontWeight:"bold"}},i={args:{lineHeight:"tight",children:"This is some text with line height tight (1.3). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},r={args:{lineHeight:"normal",children:"This is some text with line height normal (1.5). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},a={args:{as:"label"}},s={parameters:{docs:{description:{story:"This example shows how multiple TextBlock components can be nested, each with their own border for visual debugging. Do note that the text-trimming only happens once on the dotted lines. The line-height should not be messed up. The proper way to use text-blocks is *not* to nest them, but it works."}}},args:{fontSize:"3xl",style:{borderBlock:"2px dashed orange"},children:n.jsxs(l,{fontSize:"3xl",children:["Some earlier text",n.jsx(l,{fontSize:"3xl",children:n.jsx(l,{as:"span",fontSize:"3xl",style:{borderBlock:"2px solid blue"},children:"Nested text content"})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      borderBlock: "2px dashed orange"
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fontSize: "sm"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fontWeight: "bold"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: "tight",
    children: "This is some text with line height tight (1.3). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: "normal",
    children: "This is some text with line height normal (1.5). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    as: "label"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This example shows how multiple TextBlock components can be nested, each with their own border for visual debugging. Do note that the text-trimming only happens once on the dotted lines. The line-height should not be messed up. The proper way to use text-blocks is *not* to nest them, but it works."
      }
    }
  },
  args: {
    fontSize: "3xl",
    style: {
      borderBlock: "2px dashed orange"
    },
    children: <MoxTextBlock fontSize="3xl">
        {"Some earlier text"}
        <MoxTextBlock fontSize="3xl">
          <MoxTextBlock as="span" fontSize="3xl" style={{
          borderBlock: "2px solid blue"
        }}>{\`Nested text content\`}</MoxTextBlock>
        </MoxTextBlock>
      </MoxTextBlock>
  }
}`,...s.parameters?.docs?.source}}};const S=["Default","FontSizeSmall","FontWeightBold","LineHeightTight","LineHeightNormal","AsLabel","NestedTextBlocks"];export{a as AsLabel,e as Default,t as FontSizeSmall,o as FontWeightBold,r as LineHeightNormal,i as LineHeightTight,s as NestedTextBlocks,S as __namedExportsOrder,T as default};
