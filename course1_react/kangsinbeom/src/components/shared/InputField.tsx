import {
  FocusEventHandler,
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import Input from "../shared/Input";
import styled from "styled-components";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  validation: RegExp;
  errorMessage: string;
  value: string;
  id: string;
  name?: string;
  title: string;
}

const InputField = ({
  errorMessage,
  validation,
  value,
  title,
  type = "text",
  onBlur,
  ...props
}: InputFieldProps) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [dirty, setDirty] = useState<boolean>(false);
  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur?.(e);
  };
  useEffect(() => {
    if (validation.test(value)) setIsError(false);
    else setIsError(true);
  }, [validation, value]);
  const isHidden = useMemo(
    () => (dirty && isError ? "visible" : "hidden"),
    [dirty, isError]
  );
  return (
    <>
      <LabelText>{title}</LabelText>
      <Input
        type={type}
        aria-invalid={isError}
        onBlur={(e) => {
          handleBlur(e);
          setDirty(true);
        }}
        {...props}
      />
      <ErrorText $visible={isHidden}>{errorMessage}</ErrorText>
    </>
  );
};

const LabelText = styled.p`
  font-weight: bold;
  padding: 0 0 5px 10px;
`;

const ErrorText = styled.p<{ $visible: "visible" | "hidden" }>(
  {
    color: "red",
    fontSize: "small",
    padding: "5px 0 0 10px",
  },
  ({ $visible }) => ({ visibility: $visible })
);

export default InputField;
