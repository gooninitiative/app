import * as React from "react"
import type { AppProps } from 'next/app'

import "@fontsource/nunito";
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps}/>
}
