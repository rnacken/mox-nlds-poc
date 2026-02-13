const t=["4xs","3xs","2xs","xs","sm","md","lg","xl","2xl","3xl","4xl"],x=["0","auto","inherit","fit-content","max-content","min-content"],s=["0","auto","inherit"],v=["primary","primary-hover","primary-subtle","primary-subtle-hover","primary-subtle-2","primary-subtle-2-hover","secondary","secondary-hover","secondary-subtle","secondary-subtle-hover","secondary-subtle-2","secondary-subtle-2-hover","neutral","neutral-hover","neutral-subtle","neutral-subtle-hover","neutral-subtle-2","neutral-subtle-2-hover","accent","accent-hover","accent-subtle","accent-subtle-hover","accent-subtle-2","accent-subtle-2-hover","info","info-hover","info-subtle","info-subtle-hover","info-subtle-2","info-subtle-2-hover","success","success-hover","success-subtle","success-subtle-hover","success-subtle-2","success-subtle-2-hover","warning","warning-hover","warning-subtle","warning-subtle-hover","warning-subtle-2","warning-subtle-2-hover","error","error-hover","error-subtle","error-subtle-hover","error-subtle-2","error-subtle-2-hover","zwart","wit","transparant"],n=(a,l,p)=>{const d={};for(const m of a){const g=l.map(h=>`${h}: var(--mox-${p}-${m});`);d[m]=g.join(`
`)}return d},i=(a,l)=>{const p={};for(const d of a){const m=l.map(g=>`${g}: ${d};`);p[d]=m.join(`
`)}return p},e=String.raw,b={0:e`
    border-radius: 0;
  `,"1px":e`
    border-radius: 1px;
  `,"2px":e`
    border-radius: 2px;
  `,"4px":e`
    border-radius: 4px;
  `,"8px":e`
    border-radius: 8px;
  `,circle:e`
    border-radius: 50%;
  `},u=a=>({...b,"lint-0.25":e`border-${a}-radius: calc(0.25 * var(--mox-lint-inline-size));`,"lint-0.5":e`border-${a}-radius: calc(0.5 * var(--mox-lint-inline-size));`,"lint-1":e`border-${a}-radius: calc(1 * var(--mox-lint-inline-size));`,"lint-2":e`border-${a}-radius: calc(2 * var(--mox-lint-inline-size));`,"lint-4":e`border-${a}-radius: calc(4 * var(--mox-lint-inline-size));`,"lint-8":e`border-${a}-radius: calc(8 * var(--mox-lint-inline-size));`}),w={borderRadius:{options:b,responsive:!0},borderStartStartRadius:{options:u("start-start"),responsive:!0},borderStartEndRadius:{options:u("start-end"),responsive:!0},borderEndStartRadius:{options:u("end-start"),responsive:!0},borderEndEndRadius:{options:u("end-end"),responsive:!0},borderWidth:{options:{0:e`
        border-width: 0;
      `,"1px":e`
        border-width: 1px;
      `,"2px":e`
        border-width: 2px;
      `,"4px":e`
        border-width: 4px;
      `,"8px":e`
        border-width: 8px;
      `}},borderColor:{options:n(v,["border-color"],"color")},borderStyle:{options:{solid:e`
        border-style: solid;
      `,dashed:e`
        border-style: dashed;
      `,dotted:e`
        border-style: dotted;
      `,none:e`
        border-style: none;
      `}},backgroundColor:{options:v.reduce((a,l)=>({...a,[l]:e`
          background-color: var(--mox-color-${l});
          --mox-text-color: var(--mox-color-${l}-contrast);
        `}),{})},size:{options:{...n(t,["inline-size","block-size"],"space"),...i(x,["inline-size","block-size"])},responsive:!0},inlineSize:{options:{...n(t,["inline-size"],"space"),...i(x,["inline-size"])},responsive:!0},blockSize:{options:{...n(t,["block-size"],"space"),...i(x,["block-size"])},responsive:!0},padding:{options:{...n(t,["padding"],"space"),...i(s,["padding"])},responsive:!0},paddingBlock:{options:{...n(t,["padding-block"],"space"),...i(s,["padding-block"])},responsive:!0},paddingInline:{options:{...n(t,["padding-inline"],"space"),...i(s,["padding-inline"])},responsive:!0},paddingBlockStart:{options:{...n(t,["padding-block-start"],"space"),...i(s,["padding-block-start"])},responsive:!0},paddingBlockEnd:{options:{...n(t,["padding-block-end"],"space"),...i(s,["padding-block-end"])},responsive:!0},paddingInlineStart:{options:{...n(t,["padding-inline-start"],"space"),...i(s,["padding-inline-start"])},responsive:!0},paddingInlineEnd:{options:{...n(t,["padding-inline-end"],"space"),...i(s,["padding-inline-end"])},responsive:!0}},o=String.raw,f={direction:{options:{row:o`
        flex-direction: row;
      `,column:o`
        flex-direction: column;
      `,rowReverse:o`
        flex-direction: row-reverse;
      `,columnReverse:o`
        flex-direction: column-reverse;
      `},responsive:!0},wrap:{options:{nowrap:o`
        flex-wrap: nowrap;
      `,wrap:o`
        flex-wrap: wrap;
      `,wrapReverse:o`
        flex-wrap: wrap-reverse;
      `},responsive:!0},alignItems:{options:{stretch:o`
        align-items: stretch;
      `,center:o`
        align-items: center;
      `,start:o`
        align-items: flex-start;
      `,end:o`
        align-items: flex-end;
      `,baseline:o`
        align-items: baseline;
      `,initial:o`
        align-items: initial;
      `,inherit:o`
        align-items: inherit;
      `},responsive:!0},justifyContent:{options:{flexStart:o`
        justify-content: flex-start;
      `,flexEnd:o`
        justify-content: flex-end;
      `,center:o`
        justify-content: center;
      `,spaceBetween:o`
        justify-content: space-between;
      `,spaceAround:o`
        justify-content: space-around;
      `,spaceEvenly:o`
        justify-content: space-evenly;
      `},responsive:!0},itemSize:{options:{half:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-half)
          ),
          minmax(0, 1fr)
        );
      `,third:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-third)
          ),
          minmax(0, 1fr)
        );
      `,quarter:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-quarter)
          ),
          minmax(0, 1fr)
        );
      `,sixth:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-sixth)
          ),
          minmax(0, 1fr)
        );
      `},responsive:!0},gridColumn:{options:{window:o`
        --mox-page-grid-column: window;
      `,page:o`
        --mox-page-grid-column: page;
      `,span1:o`
        --mox-page-grid-column: span 1;
      `,span2:o`
        --mox-page-grid-column: span 2;
      `,span3:o`
        --mox-page-grid-column: span 3;
      `,span4:o`
        --mox-page-grid-column: span 4;
      `,span5:o`
        --mox-page-grid-column: span 5;
      `,span6:o`
        --mox-page-grid-column: span 6;
      `,span7:o`
        --mox-page-grid-column: span 7;
      `,span8:o`
        --mox-page-grid-column: span 8;
      `,span9:o`
        --mox-page-grid-column: span 9;
      `,span10:o`
        --mox-page-grid-column: span 10;
      `,span11:o`
        --mox-page-grid-column: span 11;
      `,span12:o`
        --mox-page-grid-column: span 12;
      `},responsive:!0},gridColumnStart:{options:{windowStart:o`
        --mox-page-grid-column-start: window-start;
      `,pageStart:o`
        --mox-page-grid-column-start: page-start;
      `,pageEnd:o`
        --mox-page-grid-column-start: page-end;
      `,windowEnd:o`
        --mox-page-grid-column-start: window-end;
      `,0:o`
        --mox-page-grid-column-start: 0;
      `,1:o`
        --mox-page-grid-column-start: 1;
      `,2:o`
        --mox-page-grid-column-start: 2;
      `,3:o`
        --mox-page-grid-column-start: 3;
      `,4:o`
        --mox-page-grid-column-start: 4;
      `,5:o`
        --mox-page-grid-column-start: 5;
      `,6:o`
        --mox-page-grid-column-start: 6;
      `,7:o`
        --mox-page-grid-column-start: 7;
      `,8:o`
        --mox-page-grid-column-start: 8;
      `,9:o`
        --mox-page-grid-column-start: 9;
      `,10:o`
        --mox-page-grid-column-start: 10;
      `,11:o`
        --mox-page-grid-column-start: 11;
      `,12:o`
        --mox-page-grid-column-start: 12;
      `,13:o`
        --mox-page-grid-column-start: 13;
      `},responsive:!0},gridColumnEnd:{options:{windowStart:o`
        --mox-page-grid-column-end: window-start;
      `,pageStart:o`
        --mox-page-grid-column-end: page-start;
      `,windowEnd:o`
        --mox-page-grid-column-end: window-end;
      `,pageEnd:o`
        --mox-page-grid-column-end: page-end;
      `,0:o`
        --mox-page-grid-column-end: 0;
      `,1:o`
        --mox-page-grid-column-end: 1;
      `,2:o`
        --mox-page-grid-column-end: 2;
      `,3:o`
        --mox-page-grid-column-end: 3;
      `,4:o`
        --mox-page-grid-column-end: 4;
      `,5:o`
        --mox-page-grid-column-end: 5;
      `,6:o`
        --mox-page-grid-column-end: 6;
      `,7:o`
        --mox-page-grid-column-end: 7;
      `,8:o`
        --mox-page-grid-column-end: 8;
      `,9:o`
        --mox-page-grid-column-end: 9;
      `,10:o`
        --mox-page-grid-column-end: 10;
      `,11:o`
        --mox-page-grid-column-end: 11;
      `,12:o`
        --mox-page-grid-column-end: 12;
      `,13:o`
        --mox-page-grid-column-end: 13;
      `},responsive:!0},gap:{options:{...n(t,["gap"],"space"),...i(s,["gap"])},responsive:!0},rowGap:{options:{...n(t,["row-gap"],"space"),...i(s,["row-gap"])},responsive:!0},columnGap:{options:{...n(t,["column-gap"],"space"),...i(s,["column-gap"])},responsive:!0}},c=String.raw,y={underline:{options:{underline:c`
        text-decoration: underline;
      `,strikethrough:c`
        text-decoration: line-through;
      `,none:c`
        text-decoration: none;
      `}},underlineHover:{options:{underline:c`
        text-decoration: underline;
      `,strikethrough:c`
        text-decoration: line-through;
      `,none:c`
        text-decoration: none;
      `},state:"hover"}},S=String.raw,k={markup:{options:{p:S`
        text-decoration: none;
        margin-block: 1rem;
      `,image:"",button:""}}},r=String.raw,z={fontSize:{options:n(t,["--current-font-size"],"space"),responsive:!0},color:{options:{primary:r`
        --text-color: var(--mox-color-primary);
        color: var(--text-color);
      `,secondary:r`
        --text-color: var(--mox-color-secondary);
        color: var(--text-color);
      `,tertiary:r`
        --text-color: var(-mox-color-tertiary);
        color: var(--text-color);
      `,error:r`
        --text-color: var(--mox-color-error);
        color: var(--text-color);
      `,warning:r`
        --text-color: var(--mox-color-warning);
        color: var(--text-color);
      `,success:r`
        --text-color: var(--mox-color-success);
        color: var(--text-color);
      `,info:r`
        --text-color: var(--mox-color-info);
        color: var(--text-color);
      `,inherit:r`
        --text-color: inherit;
        color: var(--text-color);
      `}},colorHover:{options:{primary:r`
        --text-color-hover: var(--mox-color-primary);
        color: var(--text-color-hover);
      `,secondary:r`
        --text-color-hover: var(--mox-color-secondary);
        color: var(--text-color-hover);
      `,tertiary:r`
        --text-color-hover: var(--mox-color-tertiary);
        color: var(--text-color-hover);
      `,error:r`
        --text-color-hover: var(--mox-color-error);
        color: var(--text-color-hover);
      `,warning:r`
        --text-color-hover: var(--mox-color-warning);
        color: var(--text-color-hover);
      `,success:r`
        --text-color-hover: var(--mox-color-success);
        color: var(--text-color-hover);
      `,info:r`
        --text-color-hover: var(--mox-color-info);
        color: var(--text-color-hover);
      `,inherit:r`
        --text-color-hover: inherit;
        color: var(--text-color-hover);
      `},state:"hover"},fontWeight:{options:{light:r`
        font-weight: 300;
      `,normal:r`
        font-weight: 400;
      `,medium:r`
        font-weight: 500;
      `,bold:r`
        font-weight: 700;
      `}},lineHeight:{options:{normal:r`
        line-height: 1.5;
      `,tight:r`
        line-height: 1.3;
      `}}},$={mobile:600,tablet:900,desktop:1200,mq1440:1440},E={cq200:200,cq400:400,cq600:600,cq800:800},R={...f,...y,...z,...w,...k},C={prefix:"mox",viewportBreakpoints:$,containerBreakpoints:E,props:R},j={p:{markup:"p",alignItems:"start",inlineSize:{mobileMin:"md",mobileMax:"xs"}},a:{color:"primary",underline:"underline",underlineHover:"none"},blockquote:{backgroundColor:"primary-subtle-2",padding:"md",borderStartStartRadius:"lint-0.5"}};export{j as a,C as m};
