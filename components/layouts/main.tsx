import Head from 'next/head'
import { Box, Container, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Router } from 'next/router'
import Navbar from 'components/navbar'
import bgImg from 'public/images/article_back.jpg'
import Footer from 'components/footer'

interface Props {
  children: ReactNode
  router: Router
}
export default function Main({ children, router }: Props) {
  return (
    <Box as="main" height={'100%'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="WINC BLOG" />
        <meta name="author" content="WINC" />
        <title>WINC BLOG</title>
      </Head>

      {children}
    </Box>
  )
}
