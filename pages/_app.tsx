import React, { FunctionComponent } from 'react';
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react';
import ThemeProvider from "../theme/context";
import createEmotionCache from '../theme/createEmotionCache';
import { GlobalStyling } from '../styles/globals';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();


const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <GlobalStyling />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
