import{j as e}from"./iframe-BfIpySjW.js";import{useMDXComponents as t}from"./index-C1RvgEk-.js";import{M as l}from"./blocks-LCwHqY5W.js";import"./preload-helper-DivXI2Cm.js";import"./index-Co1eMvlB.js";function o(s){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"MoxCSS/Hugo gebruik"}),`
`,e.jsx("style",{children:`
details, summary, ol, ul, li, strong, em {
  all: revert;
}
`}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"hugo-gebruik",children:"Hugo gebruik"}),e.jsxs(n.p,{children:["Hugo is een ",e.jsx(n.em,{children:"static site generation"})," tool, die een website kan bouwen door middel van ",e.jsx(n.code,{children:".md"})," (markdown) bestanden. Hiervan worden ",e.jsx(n.code,{children:"HTML"})," bestanden gemaakt die leunen op css-classes voor styling."]}),e.jsx(n.p,{children:"Met MOX-nlds hoeven we deze styling (deels) niet langer in een Hugo-project te definieren, maar kunnen we leunen op de MOX classnames."}),e.jsxs(n.p,{children:["Om hieraan te werken is er een speciale branch gemaakt (",e.jsx(n.code,{children:"https://github.com/MinBZK/moza-site/tree/ms-15-mox-hugo"}),")."]}),e.jsx(n.p,{children:"Voor het gebruiken van MOX-nlds is er momenteel nog geen gepubliceerde package (dat zou snel onhandig worden met zoveel changes). Het eenvoudigst is:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["De MOX-nlds repo clonen (",e.jsx(n.code,{children:"https://github.com/rnacken/mox-nlds-poc"}),")"]}),`
`,e.jsxs(n.li,{children:["Een symlink maken van de ",e.jsx(n.code,{children:"moxCss"})," folder in MOX-nlds naar de ",e.jsx(n.code,{children:"static"})," folder in de ",e.jsx(n.code,{children:"moza-site"})," repo:",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"ln -s /mijn/dev/path/mox-nlds-poc/src/moxCss /mijn/dev/path/moza-site/static/moxCss"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["In de ",e.jsx(n.code,{children:"head"})," van de Hugo-site wordt al verwezen naar de styling & tokens die je nodig hebt (zie: ",e.jsx(n.code,{children:"layouts/_partials/head.html"}),"):"]}),`
`]}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`// Speciale Hugo-syntax:
<link rel="stylesheet" href="{{ "moxCss/tokens.css" | relURL }}" />
<link rel="stylesheet" href="{{ "moxCss/index.css" | relURL }}" />
`})}),e.jsxs(n.p,{children:["Zoals bij elk project dat je migreert naar MOX-nlds is het aan te raden de bestaande styles te ",e.jsx(n.em,{children:"wrappen"})," in een ",e.jsx(n.code,{children:"@layer legacy"})," class, zodat het eenvoudig is om de nieuwe styling te laten overwriten."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* bv: \`/assets/css/components/blockquote.css\` */

@layer legacy {
  blockquote {
    /* ... oude styling */
  }
}
`})}),e.jsxs(n.p,{children:["Ik heb een mini-start gemaakt voor het ",e.jsx(n.code,{children:"blockquote"})," element. Zie ",e.jsx(n.code,{children:"assets/css/components/blockquote.css"})," en ",e.jsx(n.code,{children:"layouts/_markup/render-blockquote.html"})," (resp de styling en het hugo-template)"]})]})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{h as default};
