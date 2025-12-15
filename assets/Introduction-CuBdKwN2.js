import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CQunjmUa.js";import{M as t}from"./blocks-BEWD2YhV.js";import{C as r}from"./card-DnQmqGY6.js";import"./iframe-NQVydbms.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CxsDjbCp.js";function s(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Intro"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"introductie",children:"Introductie"}),e.jsx(n.p,{children:`Het Mox design system is een implementatie van het NL DesignSystem (NLDS), met een eigen draai.
We onderscheiden ons van de huidige implementaties (zoals Rijkshuisstijl Community) door:`}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Een ",e.jsx(n.a,{href:"/docs/atomic-system--docs",children:e.jsx(n.strong,{children:"atomic system"})})," (",e.jsx(n.strong,{children:"Atoms < Molecules < Organisms"}),") voor hierarchie tussen de componenten"]}),`
`,e.jsxs(n.li,{children:["Een kleine set ",e.jsx(n.code,{children:"tokens"}),", enkel voor de ",e.jsx(n.strong,{children:"Atoms"})]}),`
`,e.jsxs(n.li,{children:["Een ",e.jsx(n.a,{href:"/docs/scaling-system--docs",children:e.jsx(n.strong,{children:"scaling system"})})," voor zowel typografie als spacing (",e.jsx(n.code,{children:"gap"}),", ",e.jsx(n.code,{children:"padding"}),", ",e.jsx(n.code,{children:"block-size"}),", etc)"]}),`
`]}),e.jsx(n.p,{children:"Uit het NLDS volgen we de belangrijkste aanbevelingen en regels op, maar we stappen ook bewust af van een aantal ideeen: we zien wat problemen zien bij de huidige aanpak van andere NLDS-gebaseerde systemen (bv Rijkshuisstijl Community - RHC):"}),e.jsx(n.h2,{id:"1-inconsistentie-in-kwaliteit--naamgeving--apis--aanwezigheid--etc",children:"1. Inconsistentie in kwaliteit / naamgeving / APIs / aanwezigheid / etc"}),e.jsx(n.p,{children:"De huidige lijst met componenten van NLDS mist een hierarchie (complex en eenvoudig staan door elkaar) en consistentie, want een componenten komen uit Utrecht, RHC, Amsterdam, etc."}),e.jsxs(n.p,{children:["Vaak zijn de componenten complex door veel mogelijke ",e.jsx(n.code,{children:"props"}),", maar tegelijkertijd mis je ook vaak essentiele dingen, zoals een ",e.jsx(n.code,{children:"as"})," prop om het ",e.jsx(n.code,{children:"ElementType"}),` van een component aan te passen.
Een `,e.jsx(n.code,{children:"NavLink"})," is bv een hardcoded ",e.jsx(n.code,{children:"<a href>"}),", wat niet gaat werken als je een routing systeem gebruikt zoals ",e.jsx(n.code,{children:"NextJS"}),`.
Verder zijn er complexe componenten waarbij CSS via `,e.jsx(n.code,{children:"tokens"}),` aangepast kan worden, maar lang niet alle styling is zo aanpasbaar.
Componenten zijn niet te goed terug te brengen tot de basis bouwblokken, om een eigen implementatie te bouwen.`]}),e.jsx(n.h3,{id:"mox-aanpak",children:"Mox aanpak:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We zullen voor Mox ",e.jsx(n.em,{children:"geen"})," componenten van andere implementaties gebruiken."]}),`
`,e.jsxs(n.li,{children:["We hebben een atomische structuur van ",e.jsx(n.strong,{children:"Atoms, Molecules en Organisms"})," (van eenvoudig naar complex). De ",e.jsx(n.strong,{children:"Atoms"})," zijn de kleinste bouwblokken, waar alle ",e.jsx(n.strong,{children:"Molecules"})," uit opgebouwd zijn (en ",e.jsx(n.strong,{children:"Organisms"})," bestaan weer uit ",e.jsx(n.strong,{children:"Atoms"})," en ",e.jsx(n.strong,{children:"Molecules"}),")."]}),`
`]}),e.jsx(n.h3,{id:"gevolgen",children:"Gevolgen:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Consistente ",e.jsx(n.strong,{children:"Atoms"}),", die je altijd zelf kunt gebruiken om een eigen ",e.jsx(n.strong,{children:"Molecule/Organism"})," component te maken."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"})," doen een 'belofte': ze hebben altijd dezelfde API (altijd ",e.jsx(n.code,{children:"as"}),", ",e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"className"})," en ",e.jsx(n.code,{children:"styling"})," props, nooit omringende spacing zoals ",e.jsx(n.code,{children:"padding"})," of ",e.jsx(n.code,{children:"margin"}),", altijd slechts 1 tag, zoals ",e.jsx(n.code,{children:"div"}),")."]}),`
`,e.jsxs(n.li,{children:["Voor styling kunnen we gebruik maken van stabiele ",e.jsx(n.code,{children:"@layer"})," opzet, zodat gebruikers makkelijk styling kunnen overriden."]}),`
`]}),e.jsx(n.h2,{id:"2-geen-universeel-scaling-systeem-voor-spaces--layouts",children:"2. Geen universeel scaling systeem voor spaces / layouts"}),e.jsxs(n.p,{children:["Er is ",e.jsx(n.code,{children:"by design"})," voor gekozen om geen spacing-componenten te maken (bv een flex-box element). Dit is een probleem want daardoor zijn er nu componenten die:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Spacing properties (",e.jsx(n.code,{children:"gap"}),", ",e.jsx(n.code,{children:"padding"}),", ",e.jsx(n.code,{children:"width"}),", etc) hardcoded hebben (e.g. ",e.jsx(n.code,{children:"2rem"}),"), wat niet responsive meeschaalt met onze scaling."]}),`
`,e.jsxs(n.li,{children:["Properties definieren die niet door een ",e.jsx(n.code,{children:"token"})," aan te passen zijn. Zeker met complexe componenten zijn daardoor niet flexibel genoeg in gebruik."]}),`
`,e.jsx(n.li,{children:"Er zijn componenten die zelfs white-space rondom hebben, waardoor je deze niet goed kan gebruiken in layouts."}),`
`]}),e.jsx(n.h3,{id:"mox-aanpak-1",children:"Mox aanpak:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We definieren 1 scaling systeem, voor zowel typografie als spacing."}),`
`,e.jsxs(n.li,{children:["We zorgen voor een text-box trimming om ongewilde text-leading te voorkomen (zie ",e.jsx(n.a,{href:"/docs/css-text-box--docs",children:"CSS: text-box"}),")."]}),`
`]}),e.jsx(n.h2,{id:"3-wildgroei-aan-tokens",children:"3. Wildgroei aan tokens"}),e.jsxs(n.p,{children:["Momenteel heeft het Rijkshuisstijl Community theme bijna 1400 ",e.jsx(n.code,{children:"tokens"}),`, die allemaal aangepast kunnen worden in Figma (en de Tokens Studio plugin).
Voor designers is dit niet goed meer bij te houden, en zodra er een update komt van de token-lijst is het lastig om te controleren wat de impact is op een design.`]}),e.jsx(n.h3,{id:"mox-aanpak-2",children:"Mox aanpak:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We houden enkel een lijst van ",e.jsx(n.code,{children:"tokens"})," bij voor de Atoms in ons systeem: de kleinste bouwblokken. Wensen voor een globale aanpassing van complexere componenten (",e.jsx(n.strong,{children:"Molecules"})," en ",e.jsx(n.strong,{children:"Organisms"}),")"]}),`
`,e.jsxs(n.li,{children:["Voor ",e.jsx(n.strong,{children:"Molecules & Organisms"})," bestaan er geen ",e.jsx(n.code,{children:"tokens"})," (mogelijk een enkele uitzondering)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"})," doen een 'belofte': ",e.jsx(n.strong,{children:"Atoms"})," veranderen (bijna) nooit qua"]}),`
`]}),e.jsx(n.h3,{id:"gevolgen-1",children:"Gevolgen:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Drastische vermindering van tokens, waardoor je als designer weer overzicht hebt in Figma."}),`
`,e.jsxs(n.li,{children:["Als je een ",e.jsx(n.strong,{children:"Molecule of Organism"})," component wilt aanpassen:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["doe je dat via de ",e.jsx(n.code,{children:"tokens"})," voor de ",e.jsx(n.strong,{children:"Atoms"}),","]}),`
`,e.jsxs(n.li,{children:["of: bouw je je eigen component gebaseerd op de ",e.jsx(n.strong,{children:"Atoms"})]}),`
`]}),`
`]}),`
`]})]}),e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:r,alt:"A wall of logos representing different styling technologies"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),e.jsx("a",{href:"https://storybook.js.org/docs/configure/styling-and-css/?renderer=react&ref=configure",target:"_blank",children:"Learn more"})]})})]}),`
`,e.jsx("style",{children:`
.sb-container {
  margin-bottom: 48px;
}

.sb-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

img {
  object-fit: cover;
}

.sb-section-title {
  margin-bottom: 32px;
}

.sb-section a:not(h1 a, h2 a, h3 a) {
  font-size: 14px;
}

.sb-section-item, .sb-grid-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sb-section-item-heading {
  padding-top: 20px !important;
  padding-bottom: 5px !important;
  margin: 0 !important;
}
.sb-section-item-paragraph {
  margin: 0;
  padding-bottom: 10px;
}

.sb-chevron {
  margin-left: 5px;
}

.sb-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px 20px;
}

.sb-socials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.sb-socials p {
  margin-bottom: 10px;
}

.sb-explore-image {
  max-height: 32px;
  align-self: flex-start;
}

.sb-addon {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #EEF3F8;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #EEF3F8;
  height: 180px;
  margin-bottom: 48px;
  overflow: hidden;
}

.sb-addon-text {
  padding-left: 48px;
  max-width: 240px;
}

.sb-addon-text h4 {
  padding-top: 0px;
}

.sb-addon-img {
  position: absolute;
  left: 345px;
  top: 0;
  height: 100%;
  width: 200%;
  overflow: hidden;
}

.sb-addon-img img {
  width: 650px;
  transform: rotate(-15deg);
  margin-left: 40px;
  margin-top: -72px;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0);
  backface-visibility: hidden;
}

@media screen and (max-width: 800px) {
  .sb-addon-img {
    left: 300px;
  }
}

@media screen and (max-width: 600px) {
  .sb-section {
    flex-direction: column;
  }

  .sb-features-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .sb-socials {
    grid-template-columns: repeat(2, 1fr);
  }

  .sb-addon {
    height: 280px;
    align-items: flex-start;
    padding-top: 32px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 24px;
  }

  .sb-addon-img {
    right: 0;
    left: 0;
    top: 130px;
    bottom: 0;
    overflow: hidden;
    height: auto;
    width: 124%;
  }

  .sb-addon-img img {
    width: 1200px;
    transform: rotate(-12deg);
    margin-left: 0;
    margin-top: 48px;
    margin-bottom: -40px;
    margin-left: -24px;
  }
}
`})]})}function x(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
