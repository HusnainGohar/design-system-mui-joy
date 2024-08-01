declare module "@mui/joy/styles" {
  interface Radius {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "10xl"?: string;
    "input-radius"?: string;
    "tooltip-radius"?: string;
    "button-radius"?: string;
    "badge-radius-xs"?: string;
    "badge-radius-full"?: string;
    "groupButton-radius"?: string;
  }
}

const primitiveRadius = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "10xl": "9999px",
};

const componentRadius = {
  "input-radius": "var(--joy-radius-sm)",
  "tooltip-radius": "var(--joy-radius-sm)",
  "button-radius": "var(--joy-radius-10xl)",
  "badge-radius-xs": "var(--joy-radius-xs)",
  "badge-radius-full": "var(--joy-radius-10xl)",
  "groupButton-radius": "var(--joy-radius-sm)",
};

export const radius = {
  ...primitiveRadius,
  ...componentRadius,
};
