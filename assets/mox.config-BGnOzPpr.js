const t=["4xs","3xs","2xs","xs","sm","md","lg","xl","2xl","3xl","4xl"],x=["0","auto","inherit","fit-content","max-content","min-content"],a=["0","auto","inherit"],v=["primary","primary-hover","primary-subtle","primary-subtle-hover","primary-subtle-2","primary-subtle-2-hover","secondary","secondary-hover","secondary-subtle","secondary-subtle-hover","secondary-subtle-2","secondary-subtle-2-hover","neutral","neutral-hover","neutral-subtle","neutral-subtle-hover","neutral-subtle-2","neutral-subtle-2-hover","accent","accent-hover","accent-subtle","accent-subtle-hover","accent-subtle-2","accent-subtle-2-hover","info","info-hover","info-subtle","info-subtle-hover","info-subtle-2","info-subtle-2-hover","success","success-hover","success-subtle","success-subtle-hover","success-subtle-2","success-subtle-2-hover","warning","warning-hover","warning-subtle","warning-subtle-hover","warning-subtle-2","warning-subtle-2-hover","error","error-hover","error-subtle","error-subtle-hover","error-subtle-2","error-subtle-2-hover","zwart","wit","transparant"],n=(s,c,d)=>{const p={};for(const u of s){const m=c.map(h=>`${h}: var(--mox-${d}-${u});`);p[u]=m.join(`
`)}return p},i=(s,c)=>{const d={};for(const p of s){const u=c.map(m=>`${m}: ${p};`);d[p]=u.join(`
`)}return d},r=String.raw,b={0:r`
    border-radius: 0;
  `,"1px":r`
    border-radius: 1px;
  `,"2px":r`
    border-radius: 2px;
  `,"4px":r`
    border-radius: 4px;
  `,"8px":r`
    border-radius: 8px;
  `,circle:r`
    border-radius: 50%;
  `},g=s=>({...b,"lint-0.25":r`border-${s}-radius: calc(0.25 * var(--mox-lint-inline-size));`,"lint-0.5":r`border-${s}-radius: calc(0.5 * var(--mox-lint-inline-size));`,"lint-1":r`border-${s}-radius: calc(1 * var(--mox-lint-inline-size));`,"lint-2":r`border-${s}-radius: calc(2 * var(--mox-lint-inline-size));`,"lint-4":r`border-${s}-radius: calc(4 * var(--mox-lint-inline-size));`,"lint-8":r`border-${s}-radius: calc(8 * var(--mox-lint-inline-size));`}),w={borderRadius:{options:b,responsive:!0},borderStartStartRadius:{options:g("start-start"),responsive:!0},borderStartEndRadius:{options:g("start-end"),responsive:!0},borderEndStartRadius:{options:g("end-start"),responsive:!0},borderEndEndRadius:{options:g("end-end"),responsive:!0},borderWidth:{options:{0:r`
        border-width: 0;
      `,"1px":r`
        border-width: 1px;
      `,"2px":r`
        border-width: 2px;
      `,"4px":r`
        border-width: 4px;
      `,"8px":r`
        border-width: 8px;
      `}},borderColor:{options:n(v,["border-color"],"color")},borderStyle:{options:{solid:r`
        border-style: solid;
      `,dashed:r`
        border-style: dashed;
      `,dotted:r`
        border-style: dotted;
      `,none:r`
        border-style: none;
      `}},backgroundColor:{options:v.reduce((s,c)=>({...s,[c]:r`
          background-color: var(--mox-color-${c});
          --mox-text-color: var(--mox-color-${c}-contrast);
        `}),{})},size:{options:{...n(t,["inline-size","block-size"],"space"),...i(x,["inline-size","block-size"])},responsive:!0},inlineSize:{options:{...n(t,["inline-size"],"space"),...i(x,["inline-size"])},responsive:!0},blockSize:{options:{...n(t,["block-size"],"space"),...i(x,["block-size"])},responsive:!0},padding:{options:{...n(t,["padding"],"space"),...i(a,["padding"])},responsive:!0},paddingBlock:{options:{...n(t,["padding-block"],"space"),...i(a,["padding-block"])},responsive:!0},paddingInline:{options:{...n(t,["padding-inline"],"space"),...i(a,["padding-inline"])},responsive:!0},paddingBlockStart:{options:{...n(t,["padding-block-start"],"space"),...i(a,["padding-block-start"])},responsive:!0},paddingBlockEnd:{options:{...n(t,["padding-block-end"],"space"),...i(a,["padding-block-end"])},responsive:!0},paddingInlineStart:{options:{...n(t,["padding-inline-start"],"space"),...i(a,["padding-inline-start"])},responsive:!0},paddingInlineEnd:{options:{...n(t,["padding-inline-end"],"space"),...i(a,["padding-inline-end"])},responsive:!0}},e=String.raw,f={direction:{options:{row:e`
        flex-direction: row;
      `,column:e`
        flex-direction: column;
      `,rowReverse:e`
        flex-direction: row-reverse;
      `,columnReverse:e`
        flex-direction: column-reverse;
      `},responsive:!0},wrap:{options:{nowrap:e`
        flex-wrap: nowrap;
      `,wrap:e`
        flex-wrap: wrap;
      `,wrapReverse:e`
        flex-wrap: wrap-reverse;
      `},responsive:!0},alignItems:{options:{stretch:e`
        align-items: stretch;
      `,center:e`
        align-items: center;
      `,start:e`
        align-items: flex-start;
      `,end:e`
        align-items: flex-end;
      `,baseline:e`
        align-items: baseline;
      `,initial:e`
        align-items: initial;
      `,inherit:e`
        align-items: inherit;
      `},responsive:!0},justifyContent:{options:{flexStart:e`
        justify-content: flex-start;
      `,flexEnd:e`
        justify-content: flex-end;
      `,center:e`
        justify-content: center;
      `,spaceBetween:e`
        justify-content: space-between;
      `,spaceAround:e`
        justify-content: space-around;
      `,spaceEvenly:e`
        justify-content: space-evenly;
      `},responsive:!0},itemSize:{options:{half:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-half)
          ),
          minmax(0, 1fr)
        );
      `,third:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-third)
          ),
          minmax(0, 1fr)
        );
      `,quarter:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-quarter)
          ),
          minmax(0, 1fr)
        );
      `,sixth:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-sixth)
          ),
          minmax(0, 1fr)
        );
      `},responsive:!0},gridColumn:{options:{window:e`
        --mox-page-grid-column: window;
      `,page:e`
        --mox-page-grid-column: page;
      `,span1:e`
        --mox-page-grid-column: span 1;
      `,span2:e`
        --mox-page-grid-column: span 2;
      `,span3:e`
        --mox-page-grid-column: span 3;
      `,span4:e`
        --mox-page-grid-column: span 4;
      `,span5:e`
        --mox-page-grid-column: span 5;
      `,span6:e`
        --mox-page-grid-column: span 6;
      `,span7:e`
        --mox-page-grid-column: span 7;
      `,span8:e`
        --mox-page-grid-column: span 8;
      `,span9:e`
        --mox-page-grid-column: span 9;
      `,span10:e`
        --mox-page-grid-column: span 10;
      `,span11:e`
        --mox-page-grid-column: span 11;
      `,span12:e`
        --mox-page-grid-column: span 12;
      `},responsive:!0},gridColumnStart:{options:{windowStart:e`
        --mox-page-grid-column-start: window-start;
      `,pageStart:e`
        --mox-page-grid-column-start: page-start;
      `,pageEnd:e`
        --mox-page-grid-column-start: page-end;
      `,windowEnd:e`
        --mox-page-grid-column-start: window-end;
      `,0:e`
        --mox-page-grid-column-start: 0;
      `,1:e`
        --mox-page-grid-column-start: 1;
      `,2:e`
        --mox-page-grid-column-start: 2;
      `,3:e`
        --mox-page-grid-column-start: 3;
      `,4:e`
        --mox-page-grid-column-start: 4;
      `,5:e`
        --mox-page-grid-column-start: 5;
      `,6:e`
        --mox-page-grid-column-start: 6;
      `,7:e`
        --mox-page-grid-column-start: 7;
      `,8:e`
        --mox-page-grid-column-start: 8;
      `,9:e`
        --mox-page-grid-column-start: 9;
      `,10:e`
        --mox-page-grid-column-start: 10;
      `,11:e`
        --mox-page-grid-column-start: 11;
      `,12:e`
        --mox-page-grid-column-start: 12;
      `,13:e`
        --mox-page-grid-column-start: 13;
      `},responsive:!0},gridColumnEnd:{options:{windowStart:e`
        --mox-page-grid-column-end: window-start;
      `,pageStart:e`
        --mox-page-grid-column-end: page-start;
      `,windowEnd:e`
        --mox-page-grid-column-end: window-end;
      `,pageEnd:e`
        --mox-page-grid-column-end: page-end;
      `,0:e`
        --mox-page-grid-column-end: 0;
      `,1:e`
        --mox-page-grid-column-end: 1;
      `,2:e`
        --mox-page-grid-column-end: 2;
      `,3:e`
        --mox-page-grid-column-end: 3;
      `,4:e`
        --mox-page-grid-column-end: 4;
      `,5:e`
        --mox-page-grid-column-end: 5;
      `,6:e`
        --mox-page-grid-column-end: 6;
      `,7:e`
        --mox-page-grid-column-end: 7;
      `,8:e`
        --mox-page-grid-column-end: 8;
      `,9:e`
        --mox-page-grid-column-end: 9;
      `,10:e`
        --mox-page-grid-column-end: 10;
      `,11:e`
        --mox-page-grid-column-end: 11;
      `,12:e`
        --mox-page-grid-column-end: 12;
      `,13:e`
        --mox-page-grid-column-end: 13;
      `},responsive:!0},gap:{options:{...n(t,["gap"],"space"),...i(a,["gap"])},responsive:!0},rowGap:{options:{...n(t,["row-gap"],"space"),...i(a,["row-gap"])},responsive:!0},columnGap:{options:{...n(t,["column-gap"],"space"),...i(a,["column-gap"])},responsive:!0}},l=String.raw,y={underline:{options:{underline:l`
        text-decoration: underline;
      `,strikethrough:l`
        text-decoration: line-through;
      `,none:l`
        text-decoration: none;
      `}},underlineHover:{options:{underline:l`
        text-decoration: underline;
      `,strikethrough:l`
        text-decoration: line-through;
      `,none:l`
        text-decoration: none;
      `},state:"hover"}},S=String.raw,k={markup:{options:{p:S`
        text-decoration: none;
        margin-block: 1rem;
      `,image:"",button:""}}},o=String.raw,z={fontSize:{options:n(t,["--current-font-size"],"space"),responsive:!0},color:{options:{primary:o`
        --text-color: var(--color-primary);
      `,secondary:o`
        --text-color: var(--color-secondary);
      `,tertiary:o`
        --text-color: var(--color-tertiary);
      `,error:o`
        --text-color: var(--color-error);
      `,warning:o`
        --text-color: var(--color-warning);
      `,success:o`
        --text-color: var(--color-success);
      `,info:o`
        --text-color: var(--color-info);
      `,inherit:o`
        --text-color: inherit;
      `}},colorHover:{options:{primary:o`
        --text-color-hover: var(--color-primary);
      `,secondary:o`
        --text-color-hover: var(--color-secondary);
      `,tertiary:o`
        --text-color-hover: var(--color-tertiary);
      `,error:o`
        --text-color-hover: var(--color-error);
      `,warning:o`
        --text-color-hover: var(--color-warning);
      `,success:o`
        --text-color-hover: var(--color-success);
      `,info:o`
        --text-color-hover: var(--color-info);
      `,inherit:o`
        --text-color-hover: inherit;
      `},state:"hover"},fontWeight:{options:{light:o`
        font-weight: 300;
      `,normal:o`
        font-weight: 400;
      `,medium:o`
        font-weight: 500;
      `,bold:o`
        font-weight: 700;
      `}},lineHeight:{options:{normal:o`
        line-height: 1.5;
      `,tight:o`
        line-height: 1.3;
      `}}},$={mobile:600,tablet:900,desktop:1200,mq1440:1440},E={cq200:200,cq400:400,cq600:600,cq800:800},R={...f,...y,...z,...w,...k},j={prefix:"mox",viewportBreakpoints:$,containerBreakpoints:E,props:R};export{j as m};
