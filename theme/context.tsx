import React, { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import { colors } from './colors';
import { FontSizeType, fontSize, fontFamily, FontFamilyType } from './text';

interface ThemeProps {
  children: ReactNode,
}

const ThemeProvider: FunctionComponent<ThemeProps> = ({ 
  /** Internal content componets */
  children, 
  }) => (
  <Provider theme={{colors, text: { fontSize, fontFamily }}}>
    {children}
  </Provider>
)

export default ThemeProvider;