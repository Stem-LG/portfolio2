import { darkMode } from "@/atoms";
import "@/styles/globals.css";
import { darkTheme, lightTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { useAtomValue } from "jotai";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Animate } from "react-simple-animate";

export default function App({ Component, pageProps }: AppProps) {
    const isDarkMode = useAtomValue(darkMode);
    return (
        <>
            <Head>
                <title>{"Louay's Portfolio"}</title>
                <meta
                    name="description"
                    content="Personal Porfolio for Louay Ghanney. Built with Next JS"
                />
                <link rel="icon" href="/favicon.ico" />
                <link href="/fonts/flama.css" rel="stylesheet" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
