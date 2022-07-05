import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import TextField from '@mui/material/TextField';
import styled from "../../theme/styled-components"
import { Controller } from "react-hook-form";


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
  control: any
}

export const InputTextField: FunctionComponent<TextFieldProps> = ({
  label, placeholder, name = "", validation, autoComplete, error, InputProps, control
}) => (
  <Controller
  render={({
    field: { onChange, value }
  }) => (
    <StyledTextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={InputProps}
      />
      )}
    name={name}
    control={control}
    />
);
