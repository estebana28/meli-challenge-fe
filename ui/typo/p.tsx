import React, { FunctionComponent } from 'react';
import { KeyColors } from '../../theme/colors';
import { KeyFontSize } from "../../theme/text"
import styled from '../../theme/styled-components';

const Text = styled.p<{ color?: KeyColors, fontSize?: KeyFontSize }>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.typo20};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.text.fontSize[fontSize] : theme.text.fontSize[16]};
  font-weight: 400;
`;

export const P: FunctionComponent<{
  color?: KeyColors;
  fontSize?: KeyFontSize
  children: string
}> = ({ children, color, fontSize}) => (
  <Text color={color} fontSize={fontSize} >
    {children}
  </Text>
);