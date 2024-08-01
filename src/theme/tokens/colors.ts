import { ColorSystemOptions } from "@mui/joy/styles/extendTheme";
import { DefaultColorScheme } from "@mui/joy/styles/types";

declare module "@mui/joy/styles" {
  interface Palette {
    base: {
      white?: string;
      black?: string;
      transparent?: string;
    };
    gray: {
      25?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    brand: {
      25?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    red: {
      25?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    yellow: {
      25?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    green: {
      25?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    blue: {
      25?: string;
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    text: {
      "text-primary"?: string;
      "text-secondary"?: string;
      "text-tertiary"?: string;
      "text-white"?: string;
      "text-disabled"?: string;
      "text-placeholder"?: string;
      "text-brand-primary"?: string;
      "text-brand-secondary"?: string;
      "text-brand-tertiary"?: string;
      "text-error-primary"?: string;
      "text-warning-primary"?: string;
      "text-success-primary"?: string;
      "text-primary_on-brand"?: string;
      "text-secondary_on-brand"?: string;
      "text-tertiary_on-brand"?: string;
      "text-info-primary"?: string;
    };
    border: {
      "border-primary"?: string;
      "border-secondary"?: string;
      "border-tertiary"?: string;
      "border-brand"?: string;
      "border-brand-solid"?: string;
      "border-error"?: string;
      "border-error-solid"?: string;
      "border-warning"?: string;
      "border-warning-solid"?: string;
      "border-success"?: string;
      "border-success-solid"?: string;
      "border-info"?: string;
      "border-info-solid"?: string;
      "border-brand-solid_hover"?: string;
    };
    foreground: {
      "fg-primary"?: string;
      "fg-secondary"?: string;
      "fg-tertiary"?: string;
      "fg-white"?: string;
      "fg-disabled"?: string;
      "fg-brand-primary"?: string;
      "fg-brand-secondary"?: string;
      "fg-brand-tertiary"?: string;
      "fg-error-primary"?: string;
      "fg-error-secondary"?: string;
      "fg-warning-primary"?: string;
      "fg-warning-secondary"?: string;
      "fg-success-primary"?: string;
      "fg-success-secondary"?: string;
      "fg-info-primary"?: string;
      "fg-info-secondary"?: string;
      "fg-brand-primary_hover"?: string;
    };
    background: {
      "bg-primary"?: string;
      "bg-secondary"?: string;
      "bg-tertiary"?: string;
      "bg-primary-solid"?: string;
      "bg-disabled"?: string;
      "bg-brand-primary"?: string;
      "bg-brand-secondary"?: string;
      "bg-brand-tertiary"?: string;
      "bg-error-primary"?: string;
      "bg-error-secondary"?: string;
      "bg-warning-primary"?: string;
      "bg-warning-secondary"?: string;
      "bg-success-primary"?: string;
      "bg-success-secondary"?: string;
      "bg-info-primary"?: string;
      "bg-info-secondary"?: string;
      "bg-brand-solid"?: string;
      "bg-brand-solid_hover"?: string;
      "bg-error-solid"?: string;
      "bg-warning-solid"?: string;
      "bg-success-solid"?: string;
      "bg-info-solid"?: string;
      "bg-primary_hover"?: string;
      "bg-secondary_hover"?: string;
    };
  }
}

type ColorScheme =
  | Partial<Record<DefaultColorScheme, ColorSystemOptions>>
  | undefined;

export const primitiveColorsLight = {
  base: {
    white: "#ffffff",
    black: "#000000",
    transparent: "#ffffff00",
  },
  gray: {
    25: "#fcfcfd",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d2d6db",
    400: "#9da4ae",
    500: "#6c737f",
    600: "#4d5761",
    700: "#384250",
    800: "#1f2a37",
    900: "#111927",
    950: "#0d121c",
  },
  brand: {
    25: "#f6f5fd",
    50: "#ebebfd",
    100: "#d8d7fb",
    200: "#c4c3f9",
    300: "#b0aff7",
    400: "#8f8cf6",
    500: "#706ef4",
    600: "#5451f4",
    700: "#3a36ec",
    800: "#3431d4",
    900: "#1d19d4",
    950: "#03009e",
  },
  red: {
    25: "#fffbfa",
    50: "#fef3f2",
    100: "#fee4e2",
    200: "#fecdca",
    300: "#fda29b",
    400: "#f97066",
    500: "#f04438",
    600: "#d92d20",
    700: "#b42318",
    800: "#912018",
    900: "#7a271a",
    950: "#55160c",
  },
  yellow: {
    25: "#fffcf5",
    50: "#fffaeb",
    100: "#fef0c7",
    200: "#fedf89",
    300: "#fec84b",
    400: "#fdb022",
    500: "#f79009",
    600: "#dc6803",
    700: "#b54708",
    800: "#93370d",
    900: "#7a2e0e",
    950: "#4e1d09",
  },
  green: {
    25: "#f6fef9",
    50: "#ecfdf3",
    100: "#dcfae6",
    200: "#abefc6",
    300: "#75e0a7",
    400: "#47cd89",
    500: "#17b26a",
    600: "#079455",
    700: "#067647",
    800: "#085d3a",
    900: "#074d31",
    950: "#053321",
  },
  blue: {
    25: "#f5f8ff",
    50: "#eff4ff",
    100: "#d1e0ff",
    200: "#b2ccff",
    300: "#84adff",
    400: "#528bff",
    500: "#2970ff",
    600: "#155eef",
    700: "#004eeb",
    800: "#0040c1",
    900: "#00359e",
    950: "#002266",
  },
};

export const semanticColorsLight = {
  text: {
    "text-primary": "var(--joy-palette-gray-950)",
    "text-secondary": "var(--joy-palette-gray-700)",
    "text-tertiary": "var(--joy-palette-gray-400)",
    "text-white": "var(--joy-palette-base-white)",
    "text-disabled": "var(--joy-palette-gray-300)",
    "text-placeholder": "var(--joy-palette-gray-400)",
    "text-brand-primary": "var(--joy-palette-brand-700-main)",
    "text-brand-secondary": "var(--joy-palette-brand-600)",
    "text-brand-tertiary": "var(--joy-palette-brand-400)",
    "text-error-primary": "var(--joy-palette-red-600)",
    "text-warning-primary": "var(--joy-palette-yellow-600)",
    "text-success-primary": "var(--joy-palette-green-600)",
    "text-primary_on-brand": "var(--joy-palette-base-white)",
    "text-secondary_on-brand": "var(--joy-palette-brand-700-main)",
    "text-tertiary_on-brand": "var(--joy-palette-brand-500)",
    "text-info-primary": "var(--joy-palette-blue-600)",
  },
  border: {
    "border-primary": "var(--joy-palette-gray-300)",
    "border-secondary": "var(--joy-palette-gray-200)",
    "border-tertiary": "var(--joy-palette-gray-100)",
    "border-brand": "var(--joy-palette-brand-300)",
    "border-brand-solid": "var(--joy-palette-brand-700-main)",
    "border-error": "var(--joy-palette-red-300)",
    "border-error-solid": "var(--joy-palette-red-600)",
    "border-warning": "var(--joy-palette-yellow-300)",
    "border-warning-solid": "var(--joy-palette-yellow-600)",
    "border-success": "var(--joy-palette-green-300)",
    "border-success-solid": "var(--joy-palette-green-600)",
    "border-info": "var(--joy-palette-blue-300)",
    "border-info-solid": "var(--joy-palette-blue-600)",
    "border-brand-solid_hover": "var(--joy-palette-brand-800)",
  },
  foreground: {
    "fg-primary": "var(--joy-palette-gray-900)",
    "fg-secondary": "var(--joy-palette-gray-700)",
    "fg-tertiary": "var(--joy-palette-gray-500)",
    "fg-white": "var(--joy-palette-base-white)",
    "fg-disabled": "var(--joy-palette-gray-400)",
    "fg-brand-primary": "var(--joy-palette-brand-700-main)",
    "fg-brand-secondary": "var(--joy-palette-brand-600)",
    "fg-brand-tertiary": "var(--joy-palette-brand-500)",
    "fg-error-primary": "var(--joy-palette-red-600)",
    "fg-error-secondary": "var(--joy-palette-red-500)",
    "fg-warning-primary": "var(--joy-palette-yellow-600)",
    "fg-warning-secondary": "var(--joy-palette-yellow-500)",
    "fg-success-primary": "var(--joy-palette-green-600)",
    "fg-success-secondary": "var(--joy-palette-green-500)",
    "fg-info-primary": "var(--joy-palette-blue-600)",
    "fg-info-secondary": "var(--joy-palette-blue-500)",
    "fg-brand-primary_hover": "var(--joy-palette-brand-800)",
  },
  background: {
    "bg-primary": "var(--joy-palette-base-white)",
    "bg-secondary": "var(--joy-palette-gray-50)",
    "bg-tertiary": "var(--joy-palette-gray-100)",
    "bg-primary-solid": "var(--joy-palette-gray-900)",
    "bg-disabled": "var(--joy-palette-gray-100)",
    "bg-brand-primary": "var(--joy-palette-brand-50)",
    "bg-brand-secondary": "var(--joy-palette-brand-100)",
    "bg-brand-tertiary": "var(--joy-palette-brand-200)",
    "bg-error-primary": "var(--joy-palette-red-50)",
    "bg-error-secondary": "var(--joy-palette-red-100)",
    "bg-warning-primary": "var(--joy-palette-yellow-50)",
    "bg-warning-secondary": "var(--joy-palette-yellow-100)",
    "bg-success-primary": "var(--joy-palette-green-50)",
    "bg-success-secondary": "var(--joy-palette-green-100)",
    "bg-info-primary": "var(--joy-palette-blue-50)",
    "bg-info-secondary": "var(--joy-palette-blue-100)",
    "bg-brand-solid": "var(--joy-palette-brand-700)",
    "bg-brand-solid_hover": "var(--joy-palette-brand-800)",
    "bg-error-solid": "var(--joy-palette-red-600)",
    "bg-warning-solid": "var(--joy-palette-yellow-600)",
    "bg-success-solid": "var(--joy-palette-green-600)",
    "bg-info-solid": "var(--joy-palette-blue-600)",
    "bg-primary_hover": "var(--joy-palette-gray-50)",
    "bg-secondary_hover": "var(--joy-palette-gray-100)",
  },
};

export const componentColorsLight = {
  button: {},
};

export const colors = {
  light: {
    palette: {
      ...primitiveColorsLight,
      ...semanticColorsLight,
    },
  },
} as ColorScheme;
