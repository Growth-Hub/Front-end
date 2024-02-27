import { forwardRef, SelectHTMLAttributes } from "react";
import Flex from "./Flex";
import Text from "./Text";
import styled from "styled-components";

export interface Optoin {
  label: string;
  value: string | number | undefined;
}

interface SelectPorps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Optoin[];
  placeholder?: string;
}

const BaseSelect = styled.select`
  border: none;
  background-color: lightgrey;
  font-weight: bold;
  font-size: large;
  border-radius: 60px;
  padding: 10px 18px;
  cursor: pointer;

  &:required:invalid {
  }
`;
// 어떤 ref를 받을지 , 어떤 props를 받을지 타입 정의
const Select = forwardRef<HTMLSelectElement, SelectPorps>(function Select(
  { label, options, placeholder, value },
  ref
) {
  return (
    <Flex $direction="column">
      {label ? (
        <Text color="black" display="inline-block" style={{ marginBottom: 6 }}>
          {label}
        </Text>
      ) : null}
      <BaseSelect required={true} ref={ref} value={value}>
        <option disabled={true} selected={true} hidden={true} value="">
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  );
});
export default Select;
