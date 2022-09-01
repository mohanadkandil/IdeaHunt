import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import Header from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="bg-[#2E2F37] min-h-screen">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp
