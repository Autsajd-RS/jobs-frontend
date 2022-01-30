import '../styles/globals.css';
import type { AppProps } from 'next/app';
import createEmotionCache from '../utility/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import lightTheme from '../styles/theme/lightTheme';
import { CssBaseline } from '@mui/material';
interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
