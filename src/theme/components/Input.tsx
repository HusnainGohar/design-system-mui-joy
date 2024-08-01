import { InputProps, Theme } from "@mui/joy";

declare module "@mui/joy/Input" {
  interface InputPropsVariantOverrides {
    secondary: true;
    primary: true;
  }
}

type InputThemeProps =
  | {
      defaultProps?: Partial<InputProps>;
      styleOverrides?: {
        root?: any;
      };
    }
  | undefined;

export const Input: InputThemeProps = {
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
        //@ts-ignore
        borderColor: theme.vars.palette.border?.["border-tertiary"],
      }),
      ...(ownerState.variant === "secondary" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize[2],
        fontWeight: theme.vars.fontWeight["inter-3"],
        lineHeight: theme.vars.lineHeight[10],
        color: theme.vars.palette.text["text-brand-primary"],
        //@ts-ignore
        backgroundColor: theme.vars.palette.background?.["bg-brand-secondary"],
        //@ts-ignore
        borderColor: theme.vars.palette.border?.["border-tertiary"],
      }),
    }),
  },
};
