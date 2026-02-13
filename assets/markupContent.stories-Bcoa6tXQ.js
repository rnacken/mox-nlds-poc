import{j as e}from"./iframe-CtQZUnqU.js";import{a as i}from"./mox.config-DXfmhFYv.js";import"./preload-helper-DivXI2Cm.js";const p={title:"MoxCSS/Atoms/Markup Content"},s={a:'<a href="#">This is a link</a>',p:"<p>This is a paragraph of text that provides information.</p>",blockquote:"<blockquote>This is a blockquote, used to indicate a section that is quoted from another source.<br /><br />Some more text here.</blockquote>"},t=()=>e.jsxs("div",{children:[e.jsx("style",{children:`
      @layer base {
:is(h1, p, code, hr, a) {
    all: revert;    
}
.markup-content :is(h1, p, code) {
  all: unset; 
}
code {
  background-color: #f0f0f0;
}
.prop {
  font-weight: bold;
}

.generated-css-table {
  border-collapse: collapse;
  width: 100%;
}
.generated-css-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}
.generated-css-table th,
.generated-css-table td {
  border: 1px solid #ccc;
  padding: 8px;
      }
    `}),e.jsx("h1",{children:"Markup Content"}),e.jsxs("p",{children:["Voor content die bijvoorbeeld uit een CMS komt, of gegenereerd is vanuit",e.jsx("strong",{children:" Markdown"})," is het lastig om de juiste styling classes toe te passen. Daarom is er ook een optie om een blok ",e.jsx("code",{children:"HTML"})," ","te wrappen in de class ",e.jsx("code",{children:"markup-content"}),"."]}),e.jsx("p",{children:"Op bepaalde elementen binnen die container wordt dan een standaard styling toegepast. De styling is opgesteld in de mox-config via een lijst van properties en automatisch gegenereerd (zie de tweede column voor welke properties dit zijn)."}),e.jsxs("p",{children:["Alle mogelijke properties zijn"," ",e.jsx("a",{href:"/?path=/story/moxcss-atoms-properties--all-generated-css",children:"hier te zien"}),"."]}),e.jsx("p",{children:"Eventuele aanpassingen kan je doen via de design-tokens, of door CSS te schrijven die de standaard styling overschrijft (makkelijk is om deze styling te wrappen in een `@layer overrides`)."}),e.jsxs("table",{className:"generated-css-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"CSS Selector"}),e.jsx("th",{children:"Properties"}),e.jsx("th",{children:"Voorbeeld"})]})}),e.jsx("tbody",{children:Object.entries(i).sort(([n],[r])=>n.localeCompare(r)).map(([n,r])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:Object.entries(r).map(([o,a])=>e.jsxs("div",{children:[e.jsx("span",{className:"prop",children:o}),":"," ",e.jsx("code",{children:JSON.stringify(a)})]},o))}),e.jsx("td",{children:s[n]?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"markup-content",dangerouslySetInnerHTML:{__html:s[n]}}),e.jsx("hr",{style:{marginBlock:"1rem"}}),e.jsxs("details",{children:[e.jsx("summary",{children:"html"}),e.jsx("code",{children:s[n]?s[n]:"N/A"})]})]}):"N/A"})]},n))})]})]});t.__docgenInfo={description:"",methods:[],displayName:"MarkupContentStory"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div>
      <style>{\`
      @layer base {
:is(h1, p, code, hr, a) {
    all: revert;    
}
.markup-content :is(h1, p, code) {
  all: unset; 
}
code {
  background-color: #f0f0f0;
}
.prop {
  font-weight: bold;
}

.generated-css-table {
  border-collapse: collapse;
  width: 100%;
}
.generated-css-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}
.generated-css-table th,
.generated-css-table td {
  border: 1px solid #ccc;
  padding: 8px;
      }
    \`}</style>
      <h1>Markup Content</h1>
      <p>
        Voor content die bijvoorbeeld uit een CMS komt, of gegenereerd is vanuit
        <strong> Markdown</strong> is het lastig om de juiste styling classes
        toe te passen. Daarom is er ook een optie om een blok <code>HTML</code>{" "}
        te wrappen in de class <code>markup-content</code>.
      </p>
      <p>
        Op bepaalde elementen binnen die container wordt dan een standaard
        styling toegepast. De styling is opgesteld in de mox-config via een
        lijst van properties en automatisch gegenereerd (zie de tweede column
        voor welke properties dit zijn).
      </p>
      <p>
        Alle mogelijke properties zijn{" "}
        <a href="/?path=/story/moxcss-atoms-properties--all-generated-css">
          hier te zien
        </a>
        .
      </p>
      <p>
        Eventuele aanpassingen kan je doen via de design-tokens, of door CSS te
        schrijven die de standaard styling overschrijft (makkelijk is om deze
        styling te wrappen in een \`@layer overrides\`).
      </p>

      <table className="generated-css-table">
        <thead>
          <tr>
            <th>CSS Selector</th>
            <th>Properties</th>
            <th>Voorbeeld</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(markupContent).sort(([a], [b]) => a.localeCompare(b)).map(([el, props]) => <tr key={el}>
                <td>{el}</td>
                <td>
                  {Object.entries(props).map(([key, value]) => <div key={key}>
                      <span className="prop">{key}</span>:{" "}
                      <code>{JSON.stringify(value)}</code>
                    </div>)}
                </td>
                <td>
                  {examples[el as keyof typeof examples] ? <>
                      <div className="markup-content" dangerouslySetInnerHTML={{
                __html: examples[el as keyof typeof examples]
              }} />
                      <hr style={{
                marginBlock: "1rem"
              }} />
                      <details>
                        <summary>html</summary>
                        <code>
                          {examples[el as keyof typeof examples] ? examples[el as keyof typeof examples] : "N/A"}
                        </code>
                      </details>
                    </> : "N/A"}
                </td>
              </tr>)}
        </tbody>
      </table>
    </div>;
}`,...t.parameters?.docs?.source}}};const h=["MarkupContentStory"];export{t as MarkupContentStory,h as __namedExportsOrder,p as default};
