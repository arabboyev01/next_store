import type {AppProps} from 'next/app'
import {theme} from "../theme";
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from "react-redux";
import "../styles/globals.css";
import store from "../src/redux/store";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}

export default MyApp;
