import NextLink from 'next/link'

import {
  Container,
  Box,
  BoxProps,
  Text,
  Flex,
  useColorModeValue,
  LinkProps,
  Heading
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'

type LinkItemProps = {
  href: string
  path: string
  target?: string
  children: ReactNode
} & LinkProps

function LinkItem({ href, path, target, children, ...props }: LinkItemProps) {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Box
        p={2}
        rounded={'md'}
        bg={active ? 'gray.200' : undefined}
        color={active ? '#202023' : inactiveColor}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700')
        }}
      >
        {children}
      </Box>
    </NextLink>
  )
}

type Props = {
  path: string
} & BoxProps

export default function SimpleNavbar({ path, ...props }: Props) {
  const router = useRouter()
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="100%"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" letterSpacing={'tighter'}>
            <Text
              color={'#1c2637'}
              onClick={() => router.push('/')}
              cursor={'pointer'}
            >
              WINC TECH BLOG
            </Text>
          </Heading>
        </Flex>
      </Container>
    </Box>
  )
}
