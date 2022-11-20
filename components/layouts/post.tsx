import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import bgImg from 'public/images/article_back.jpg'
import SimpleNavbar from 'components/simpleNavber'
import { useRouter } from 'next/router'
import Footer from 'components/footer'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      <SimpleNavbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          {children}
        </motion.article>
      </Container>

      <Footer />
    </>
  )
}
