import{j as e}from"./iframe-BVcjev8I.js";import{useMDXComponents as r}from"./index-nfwV2T16.js";import{M as i}from"./blocks-gcO4NbrZ.js";import"./preload-helper-DivXI2Cm.js";import"./index-_-K-Lcdd.js";const t="/mox-nlds-poc/assets/ts-props-BLYLC7Vc.png",a="/mox-nlds-poc/assets/ts-props-responsive-CDBvlmvk.png";function s(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"React/Gebruik"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"gebruik",children:"Gebruik"}),e.jsx(n.p,{children:"Afhankelijk van je technologie gebruik je het design systeem op andere manieren:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"React? Dan gebruik je de React-componenten"}),`
`,e.jsx(n.li,{children:"Iets anders? Dan val je terug op de CSS classes"}),`
`]}),e.jsx(n.p,{children:"React componenten (en later componenten voor Vue/Angular/etc) gebruiken zelf onder de motorkap altijd de classes die je zelf ook direct kan gebruiken als je geen React gebruikt."}),e.jsx(n.p,{children:"Via props kan je de styling aanpassen. Een voorbeeld in React:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MoxBox backgroundColor="primary"></MoxBox>
`})}),e.jsx(n.p,{children:"Onder de motorkap zit echter een functie die deze property omzet in een className:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`<div className="mox-backgroundColor-primary"></div>
`})}),e.jsx(n.p,{children:"Op deze manier zijn alle React Atoms opgebouwd en hebben ze een set van dit soort mogelijke props:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Voorbeeld MoxBox:

export const boxStyleProps = [
  "size",
  "inlineSize",
  "blockSize",
  "padding",
  "paddingBlock",
  "paddingInline",
  "paddingBlockStart",
  "paddingBlockEnd",
  "paddingInlineStart",
  "paddingInlineEnd",
  "borderRadius",
  "borderStartStartRadius",
  "borderStartEndRadius",
  "borderEndStartRadius",
  "borderEndEndRadius",
  "borderWidth",
  "borderColor",
  "borderStyle",
  "backgroundColor",
  "gridColumn",
  "gridColumnStart",
  "gridColumnEnd",
] as const satisfies StyleProps;
`})}),e.jsxs(n.p,{children:["Dit betekent dat een ",e.jsx(n.code,{children:"<MoxBox>"})," dus deze properties heeft. Via het centrale config-bestand (",e.jsx(n.code,{children:"mox.config.ts"}),`) is bepaald wat de mogelijke waardes zijn.
Dit is allemaal in typescript opgezet, waardoor je ook type-safety/intellisense hebt op de mogelijke waardes:`]}),e.jsx("img",{src:t,alt:"Autocomplete door TS",style:{maxInlineSize:"600px"}}),e.jsxs(n.p,{children:["Sommige properties kunnen voor 1 formaat gekozen worden (zoals hierboven ",e.jsx(n.code,{children:"backgroundColor"}),"). Anderen kunnen daarnaast ook ",e.jsx(n.em,{children:"responsive"})," gebruikt worden:"]}),e.jsx("img",{src:a,alt:"Autocomplete door TS, responsive",style:{maxInlineSize:"700px"}}),e.jsx(n.p,{children:"Typescript geeft een error als je een waarde gebruikt die niet mogelijk is."}),e.jsx(n.h2,{id:"componenten-gebruiken",children:"Componenten gebruiken"}),e.jsxs(n.p,{children:["Een component kan een ",e.jsx(n.strong,{children:"Atom"})," zijn, of opgebouwd zijn uit meerdere ",e.jsx(n.strong,{children:"Atoms"})," als ",e.jsx(n.strong,{children:"Molecule"})," of (nog complexer) een ",e.jsx(n.strong,{children:"Organism"}),"."]}),e.jsx(n.p,{children:"Als je componenten uitkiest, is het het handigst om eerst te kijken wat er beschikbaar is in de complexe vorm."}),e.jsxs(n.p,{children:["Er is bijvoorbeeld een ",e.jsx(n.strong,{children:"organism"})," voor een ",e.jsx(n.code,{children:"checkbox input"})," organisme-component dat een checkbox-vakje heeft, een label, een ruimte voor foutmelding, etc."]}),e.jsxs(n.p,{children:["Als dit te strict is qua opbouw kan je naar een lager level kijken of dit beter past, zoals de ",e.jsx(n.strong,{children:"molecule"})," ",e.jsx(n.code,{children:"checkbox-field"}),", die enkel het vakje met een label heeft."]}),e.jsxs(n.p,{children:["Nog meer controle nodig? Kijk dan naar de onafhankelijke ",e.jsx(n.strong,{children:"atom"})," onderdelen, waar je volledige controle hebt over het vakje, het label en de shelf die de ",e.jsx(n.code,{children:"gap"})," ertussen."]}),e.jsx(n.h2,{id:"componenten-aanpassen",children:"Componenten aanpassen"}),e.jsx(n.p,{children:"De React componenten zoals molecules of organisms zijn opgebouwd uit kleinere blokjes, tot atoms."}),e.jsx(n.p,{children:"Als een molecule of organism niet helemaal naar je wens is, zijn er grofweg 2 opties:"}),e.jsx(n.h3,{id:"tokens",children:"Tokens"}),e.jsx(n.p,{children:"De aanpak voor als je wijziging voldoet aan:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Je wilt dit ",e.jsx(n.em,{children:"site-wide"})]}),`
`,e.jsx(n.li,{children:"Het zijn puur visuele aanpassingen"}),`
`,e.jsx(n.li,{children:"Je vindt het prima om je tokens-set aan te passen"}),`
`]}),e.jsxs(n.p,{children:["Pas de tokens aan, zodat deze als ",e.jsx(n.code,{children:"css-variables"})," door de hele site toegepast worden."]}),e.jsxs(n.h3,{id:"bouw-je-eigen-moleculeorganism-component",children:["Bouw je eigen ",e.jsx(n.strong,{children:"molecule/organism"})," component"]}),e.jsx(n.p,{children:"Dit is ook de aanpak voor als je gewoon een nieuw component wilt opbouwen."}),e.jsxs(n.p,{children:["Bouw het met bestaande ",e.jsx(n.strong,{children:"atoms"})," (of ",e.jsx(n.strong,{children:"molecules"}),"). Op deze manier kan je de hele structuur van een component anders opzetten."]})]})})]})}function m(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{m as default};
