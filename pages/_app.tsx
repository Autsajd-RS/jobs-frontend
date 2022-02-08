import '../styles/globals.css';
import type { AppProps } from 'next/app';
import createEmotionCache from '../utility/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import lightTheme from '../styles/theme/lightTheme';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../app-redux/store';
interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
};

export default MyApp;
