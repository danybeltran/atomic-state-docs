import 'nextra-theme-docs/style.css'
import Head from 'next/head'
import { useState } from 'react'
import { useCopyCode } from '../hooks/useCopyCode'
import '../clipboard.css'
import '../notification.css'
import Notification from '../components/Notification'
export default function Nextra({ Component, pageProps }) {
  const [ShowAlert, SetShowAlert] = useState(false)
  useCopyCode({ SetShowAlert })
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Atomic State is a state management library for React apps"
        />
        <meta property="og:image" content="/preview-image.jpg" />
      </Head>
      <Notification show={ShowAlert} />
      <Component {...pageProps} />
    </>
  )
}
