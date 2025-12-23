import{j as e}from"./iframe-Bn3uxU6K.js";import{useMDXComponents as o}from"./index-CRYAwJ8O.js";import{M as l}from"./blocks-Cz5ayvTD.js";import"./preload-helper-DivXI2Cm.js";import"./index-DUa1-kT3.js";const d="/mox-nlds-poc/assets/atomic-design-system-moZ-3hAD.png";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Atomic system"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"atomic-system",children:"Atomic system"}),e.jsx(n.p,{children:"Dit design system is opgebouwd in meerdere lagen in toenemende complexiteit:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Atoms"}),`
`,e.jsx(n.li,{children:"Molecules"}),`
`,e.jsx(n.li,{children:"Organisms"}),`
`,e.jsx(n.li,{children:"Templates"}),`
`,e.jsx(n.li,{children:"Pages"}),`
`]}),e.jsx("img",{src:d,alt:"Opbouw van een atomic design system"}),e.jsx(n.p,{children:"De reden hiervoor is dat dit de beste aanpak is om een design systeem op te zetten voor een brede doelgroep:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sommige mensen willen snel pagina's kunnen opzetten en leunen op bestaande Templates"}),`
`,e.jsx(n.li,{children:"Anderen willen juist controle hebben en componenten kunnen aanpassen op detail-niveau"}),`
`,e.jsx(n.li,{children:"... en iedereen die daar tussen valt"}),`
`]}),e.jsxs(n.p,{children:["Met een atomic design system kan je de uitgebreide ",e.jsx(n.code,{children:"organisms"})," of zelfs ",e.jsx(n.code,{children:"templates"}),` gebruiken om snel een pagina op te zetten.
Maar je kan ook `,e.jsx(n.code,{children:"organisms"})," of ",e.jsx(n.code,{children:"molecules"})," afpellen tot de ",e.jsx(n.code,{children:"atoms"}),` voor volledige aanpasbaarheid.
Iedereen kan via `,e.jsx(n.code,{children:"design tokens"}),` een eigen huisstijl toepassen, binnen de grenzen van de Rijkshuisstijl.
Het Mox Design system is een poging om aan de wensen van een brede gebruikersgroep te voldoen.`]}),e.jsx(n.h2,{id:"bouwblokken-van-het-atomic-system",children:"Bouwblokken van het atomic system"}),e.jsx(n.h3,{id:"lv-0---base",children:"lv. 0 - Base"}),e.jsx(n.p,{children:"Hier heb je als gebruiker geen invloed op, maar is belangrijk voor een consistente stijl. Denk bijvoorbeeld aan CSS reset styles."}),e.jsx(n.h3,{id:"lv-1---atoms",children:"lv. 1 - Atoms"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Atoms"})," zijn de kleinste bouwblokjes van het design-systeem."]}),e.jsx(n.h4,{id:"beloftes",children:"Beloftes"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Er zullen altijd uitzonderingen zijn, maar in principe kan je met ",e.jsx(n.strong,{children:"atoms"})," bijna alle grotere componenten opbouwen"]}),`
`,e.jsxs(n.li,{children:["De styling wordt altijd gedaan via CSS (zie de ",e.jsx(n.code,{children:"Mox-css atoms"}),")"]}),`
`,e.jsxs(n.li,{children:["Uitgebreide aanpasbaarheid qua styling via ",e.jsx(n.code,{children:"design tokens"})]}),`
`,e.jsxs(n.li,{children:["Consistente API tussen alle ",e.jsx(n.code,{children:"atom"})," componenten:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"as"}),", ",e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"className"})," en ",e.jsx(n.code,{children:"styling"})," props"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Nooit omringende spacing zoals ",e.jsx(n.code,{children:"padding"})," of ",e.jsx(n.code,{children:"margin"})," (gebruik altijd layout-componenten zoals ",e.jsx(n.code,{children:"stack"})," of ",e.jsx(n.code,{children:"box"})," om de spaces tussen elementen te bepalen)"]}),`
`,e.jsx(n.li,{children:"Atoms zullen bijna nooit breaking changes hebben bij updates"}),`
`]}),e.jsx(n.h3,{id:"lv-2---molecules",children:"lv. 2 - Molecules"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Molecules"})," zijn opgebouwd uit ",e.jsx(n.strong,{children:"atoms"})," en zijn daardoor complexer"]}),e.jsx(n.h4,{id:"beloftes-1",children:"Beloftes"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In principe geen ",e.jsx(n.code,{children:"design tokens"})]}),`
`,e.jsx(n.li,{children:"Aanpasbaarheid door de API van het component"}),`
`,e.jsxs(n.li,{children:["Docs over hoe het opgebouwd is, zodat je zelf makkelijk het kan nabouwen met ",e.jsx(n.strong,{children:"atoms"})," voor volledige aanpasbaarheid"]}),`
`,e.jsxs(n.li,{children:["Anders dan ",e.jsx(n.strong,{children:"atoms"})," kunnen hier sneller breaking changes in voorkomen"]}),`
`,e.jsxs(n.li,{children:["Nooit omringende spacing zoals ",e.jsx(n.code,{children:"padding"})," of ",e.jsx(n.code,{children:"margin"})]}),`
`]}),e.jsx(n.h3,{id:"lv-3---organisms",children:"lv. 3 - Organisms"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Organisms"})," zijn weer opgebouwd uit ",e.jsx(n.strong,{children:"molecules"})," en/of ",e.jsx(n.strong,{children:"atoms"}),". Deze componenten zijn complexer dan ",e.jsx(n.strong,{children:"molecules"})," en kunnen custom interactiviteit hebben."]}),e.jsx(n.h4,{id:"beloftes-2",children:"Beloftes"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Net als ",e.jsx(n.strong,{children:"molecules"}),": geen ",e.jsx(n.code,{children:"design tokens"}),", minder sterke belofte omtrent breaking changes"]}),`
`,e.jsxs(n.li,{children:["Nooit omringende spacing zoals ",e.jsx(n.code,{children:"padding"})," of ",e.jsx(n.code,{children:"margin"})]}),`
`]}),e.jsx(n.h3,{id:"lv-4---templates",children:"lv. 4 - Templates"}),e.jsx(n.p,{children:"Sommige pagina's zullen een gebruikelijke opbouw hebben. Denk bijvoorbeeld aan een basis-homepage of een contact-formulier."}),e.jsx(n.h3,{id:"lv-5---pages",children:"lv. 5 - Pages"}),e.jsxs(n.p,{children:["Pages zijn de meest complexe bouwwerken. Ze kunnen gebaseerd zijn op ",e.jsx(n.strong,{children:"templates"}),", of helemaal opgebouwd zijn uit alle lagere levels van bouwblokken."]})]})})]})}function j(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
