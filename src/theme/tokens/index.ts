import { extendTheme } from "@mui/joy";
import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { lineHeight } from "./lineHeight";
import { fontWeight } from "./fontWeight";
import { fontFamily } from "./fontFamily";
import { typography } from "./typography";
import { radius } from "./radius";
import { Button } from "../components/Button";

export const theme = extendTheme({
  //tokens
  colorSchemes: colors,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  typography,
  radius,
  //components
  components: {
    JoyButton: Button,
  },
});
