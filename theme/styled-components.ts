import * as styledComponents from 'styled-components';

import { ColorsType } from './colors';
import {
  FontSizeType,
  FontFamilyType,
} from './text';

const {
  default: styled,
  ThemeProvider,
  css,
  createGlobalStyle,
  ThemeContext,
  ServerStyleSheet,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<{
  colors: ColorsType;
  // spacers: SpacersType;
  text: {
    fontSize: FontSizeType;
    fontFamily: FontFamilyType;
  };
}>;

export {
  ServerStyleSheet,
  ThemeProvider,
  css,
  createGlobalStyle,
  ThemeContext,
};

export default styled;