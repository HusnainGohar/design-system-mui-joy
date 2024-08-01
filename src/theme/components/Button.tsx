import { ButtonProps, Theme } from "@mui/joy";

declare module "@mui/joy/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    primary: true;
  }
}

type ButtonThemeProps =
  | {
      defaultProps?: Partial<ButtonProps>;
      styleOverrides?: {
        root?: any;
      };
    }
  | undefined;

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
        //@ts-ignore
        backgroundColor: theme.vars.palette.background?.["bg-brand-solid"],
        borderRadius: theme.vars.radius["button-radius"],
      }),
      ...(ownerState.variant === "secondary" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize[2],
        fontWeight: theme.vars.fontWeight["inter-3"],
        lineHeight: theme.vars.lineHeight[10],
        color: theme.vars.palette.text["text-brand-primary"],
        //@ts-ignore
        backgroundColor: theme.vars.palette.background?.["bg-brand-secondary"],
        borderRadius: theme.vars.radius["button-radius"],
      }),
    }),
  },
};
