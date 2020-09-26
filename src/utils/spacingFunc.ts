import { ThemeProps } from "types";

const spacingFunc = (spacing: number, { theme }: ThemeProps) =>
  `${theme.spacing(spacing)}px`;

export default spacingFunc;
