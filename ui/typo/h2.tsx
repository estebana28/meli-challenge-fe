import React, { FunctionComponent } from 'react';
import { KeyColors } from '../../theme/colors';
import styled from '../../theme/styled-components';

const Text = styled.h2<{ color?: KeyColors }>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.typo20};
  font-weight: 400;
`;

export const H2: FunctionComponent<{
  color?: KeyColors;
  children: string
}> = ({ children, color }) => (
  <Text color={color} >
    {children}
  </Text>
);

