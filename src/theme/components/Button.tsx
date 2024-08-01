import { Components, Theme } from "@mui/joy";

declare module "@mui/joy/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    primary: true;
  }
}

type ButtonThemeProps = Components<Theme>["JoyButton"] | undefined;

export const Button: ButtonThemeProps = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }: { theme: Theme; ownerState: any }) => ({
      ...(ownerState.variant === "primary" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize[2],
        fontWeight: theme.vars.fontWeight["inter-3"],
        lineHeight: theme.vars.lineHeight[10],
        color: theme.vars.palette.text["text-white"],
        backgroundColor: theme.vars.palette.background?.["bg-brand-solid"],
        borderRadius: theme.vars.radius["button-radius"],
        "&:hover": {
          backgroundColor:
            theme.vars.palette.background?.["bg-brand-solid_hover"],
        },
      }),
      ...(ownerState.variant === "secondary" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize[2],
        fontWeight: theme.vars.fontWeight["inter-3"],
        lineHeight: theme.vars.lineHeight[10],
        color: theme.vars.palette.text["text-brand-primary"],
        backgroundColor: theme.vars.palette.background?.["bg-brand-primary"],
        borderRadius: theme.vars.radius["button-radius"],
        "&:hover": {
          backgroundColor:
            theme.vars.palette.background?.["bg-brand-secondary"],
        },
      }),
    }),
  },
};
