import React, { ReactNode } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import bgImg from 'public/images/article_back.jpg'
import SimpleNavbar from 'components/simpleNavber'
import { useRouter } from 'next/router'
import Footer from 'components/footer'

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  const router = useRouter()

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      <SimpleNavbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}
