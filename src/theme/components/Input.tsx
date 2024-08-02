import { Components, Theme } from "@mui/joy";

declare module "@mui/joy/Input" {
  interface InputPropsVariantOverrides {
    secondary: true;
    primary: true;
  }
}

type InputThemeProps = Components<Theme>["JoyInput"] | undefined;

export const Input: InputThemeProps = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "primary" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize[2],
        fontWeight: theme.vars.fontWeight["inter-3"],
        lineHeight: theme.vars.lineHeight[10],
        color: theme.vars.palette.text["text-brand-primary"],
        backgroundColor: theme.vars.palette.background?.["bg-tertiary"],
        borderRadius: theme.vars.radius["input-radius"],
        "&.Mui-focused": {
          backgroundColor: theme.vars.palette.background?.["bg-brand-primary"],
        },
      }),
      ...(ownerState.variant === "secondary" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize[2],
        fontWeight: theme.vars.fontWeight["inter-3"],
        lineHeight: theme.vars.lineHeight[10],
        color: theme.vars.palette.text["text-brand-primary"],
        backgroundColor: theme.vars.palette.background?.["bg-brand-secondary"],
        borderRadius: theme.vars.radius["input-radius"],
        "&.Mui-focused": {
          backgroundColor: theme.vars.palette.background?.["bg-success-solid"],
        },
      }),
    }),
    input: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "primary" && {}),
      ...(ownerState.variant === "secondary" && {}),
    }),
  },
};
