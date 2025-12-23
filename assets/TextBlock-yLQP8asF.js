import{j as l}from"./iframe-Bn3uxU6K.js";import{c}from"./clsx-B-dksMZM.js";import{p as m}from"./propsToClassNames-BS7oPWl9.js";const f={fontSize:"fontSize"},n=({children:o,as:s,className:a,ref:i,...e})=>{const r=s||"span",t=m(f,e),{fontSize:d,...p}=e;return console.log(t),l.jsx(r,{ref:i,...p,className:c("mox-atom-text-block",t,a),children:o})},y=n;n.__docgenInfo={description:`A text component to be used for any text content.
This element will have it's half-leading on the top/bottom trimmed to fit snugly in designs (e.g. placing it in a \`<Shelf>\` next to an Icon will align them perfectly at the top). See the orange border on the default component.

Responsibilities:
1. Render text content with appropriate semantics (via \`as\` prop).
2. Apply font-size styling via classNames.

Not responsible for:
1. Managing text-specific behavior (e.g., truncation, wrapping)`,methods:[],displayName:"MoxAtomTextBlock",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{n as M,y as a};
