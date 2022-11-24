import React, { ReactNode } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import SimpleNavbar from 'components/simpleNavber'
import { useRouter } from 'next/router'
import Footer from 'components/footer'
import bgImg from 'public/images/article_back.jpg'

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      <Box
        bgImage={bgImg.src}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        height={'80'}
        position={'relative'}
        _before={{
          content: '""',
          bgColor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      >
        <SimpleNavbar path={router.asPath} />

        <Box w={'full'} textAlign={'center'} pt={28} position={'absolute'}>
          <Text fontSize={'6xl'} color={'white'}>
            室内人数カウントシステムの開発
          </Text>
        </Box>
      </Box>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>

      <Footer />
    </>
  )
}
