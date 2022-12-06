import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/layouts/main'
import Fonts from 'components/fonts'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}
