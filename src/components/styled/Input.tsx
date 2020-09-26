import styled from "styled-components/macro";
import TextField from "@material-ui/core/TextField";
import { ThemeProps } from "types";

const Input = styled(TextField)`
  height: var(--itemHeight);
  .MuiInputBase-root {
    height: 100%;
    &::before,
    &::after {
      display: none;
    }
    > input {
      padding: ${({ theme }: ThemeProps) => theme.spacing(0, 0, 0, 4)};
      height: 100%;
    }
  }
`;

export default Input;
