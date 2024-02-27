import styled, { css } from "styled-components";

interface ButtonProps {
  weak?: boolean;
  full?: boolean;
  disabled?: boolean;
}
const Button = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
  },
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined
);

export default Button;
