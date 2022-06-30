import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import TextField from '@mui/material/TextField';
import styled from "../../theme/styled-components"

const StyledTextField = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-root  {
    height: 38px;
    border: 0;
    background-color: ${({ theme }) => theme.colors.bggray};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
`

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  name?: string;
  validation?: any;
  autocomplete?: boolean;
  error?: string;
  InputProps?: any
}

export const InputTextField: FunctionComponent<TextFieldProps> = ({
  label, placeholder, name, validation, autoComplete, error, InputProps
}) => (
  <StyledTextField placeholder={placeholder} name={name} label={label} InputProps={InputProps} >
  </StyledTextField>
);