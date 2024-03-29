import React, { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import SimpleNavbar from 'components/simpleNavber'
import { useRouter } from 'next/router'
import Footer from 'components/footer'

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      <SimpleNavbar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>

      <Footer />
    </>
  )
}
