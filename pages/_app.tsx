import type { AppProps } from 'next/app'
import { theme } from '../theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import store from '../src/redux/store';
import { Toaster } from 'react-hot-toast';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                <Toaster position="top-center" reverseOrder={false} toastOptions={{
                    style: {
                        border: '1px solid #ddd',
                        padding: '16px',
                        color: '#713200',
                    },
                }}/>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}

export default MyApp;
