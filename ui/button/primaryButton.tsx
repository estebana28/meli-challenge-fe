import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import styled from "../../theme/styled-components"
import { Controller } from "react-hook-form";


const StyledButton = styled(Button)`
  
`

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string
}

export const PrimaryButton: FunctionComponent<ButtonProps> = ({
  children
}) => (
  <StyledButton variant="contained">
    {children}
  </StyledButton>
);
