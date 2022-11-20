import NextLink from 'next/link'

import {
  Container,
  Box,
  BoxProps,
  Link,
  Stack,
  Text,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  LinkProps,
  Heading,
  Icon,
  Button,
  HStack,
  InputGroup,
  Input,
  InputRightElement
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import React, { ReactNode, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

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
            <Text color={'white'}>WINC TECH BLOG</Text>
          </Heading>
        </Flex>
      </Container>
    </Box>
  )
}
