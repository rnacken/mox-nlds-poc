import type { MoxConfigProps } from "../mox.config";

export const flexProps = {
  direction: {
    options: {
      row: { "flex-direction": "row" },
      column: { "flex-direction": "column" },
      rowReverse: { "flex-direction": "row-reverse" },
      columnReverse: { "flex-direction": "column-reverse" },
    },
    responsive: true,
  },
  wrap: {
    options: {
      nowrap: { "flex-wrap": "nowrap" },
      wrap: { "flex-wrap": "wrap" },
      wrapReverse: { "flex-wrap": "wrap-reverse" },
    },
    responsive: true,
  },
  alignItems: {
    options: {
      stretch: { "align-items": "stretch" },
      center: { "align-items": "center" },
      start: { "align-items": "flex-start" },
      end: { "align-items": "flex-end" },
      baseline: { "align-items": "baseline" },
      initial: { "align-items": "initial" },
      inherit: { "align-items": "inherit" },
    },
    responsive: true,
  },
  justifyContent: {
    options: {
      flexStart: { "justify-content": "flex-start" },
      flexEnd: { "justify-content": "flex-end" },
      center: { "justify-content": "center" },
      spaceBetween: { "justify-content": "space-between" },
      spaceAround: { "justify-content": "space-around" },
      spaceEvenly: { "justify-content": "space-evenly" },
    },
    responsive: true,
  },
} as const satisfies MoxConfigProps;
