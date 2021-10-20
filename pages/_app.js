import 'nextra-theme-docs/style.css'
import Head from 'next/head'
import { useCopyCode } from '../hooks/useCopyCode'
import "../clipboard.css";
export default function Nextra({ Component, pageProps }) {
  useCopyCode()
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Atomic State is a state management library for React apps"
        />
        <meta property="og:image" content="/preview-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
