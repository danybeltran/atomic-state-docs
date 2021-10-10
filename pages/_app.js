import 'nextra-theme-docs/style.css'
import Head from 'next/head'
export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Atomic State is a state managment library for React apps"
        />
        <meta property="og:image" content="/preview-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
