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
import { signOut, signIn, useSession } from 'next-auth/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

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
  auth?: boolean
} & BoxProps

export default function Navbar({ path, auth, ...props }: Props) {
  const handleClick = () => {}
  const [isFocused, setFocused] = useState(false)
  const { data: session } = useSession()

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

        <Box flex={1} textAlign="right">
          <InputGroup
            transition={
              'box-shadow 0.2s ease-out 0s, background-color 0.2s ease-out 0s'
            }
            bgColor={isFocused ? 'white' : 'rgba(4, 4, 4, 0.07)'}
            borderRadius={'3xl'}
            color={'rgb(4, 4, 5)'}
            overflow={'hidden'}
            _hover={{ boxShadow: '2xl', bgColor: 'white' }}
            boxShadow={isFocused ? '2xl' : 'none'}
            maxW={'container.sm'}
          >
            <Input
              type={'text'}
              placeholder="キーワード"
              border={'none'}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={handleClick}
                bgColor={'transparent'}
                border={'none'}
                borderRadius={0}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button onClick={() => signIn()}>ログイン</Button>
        {session && (
          <>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'none', md: 'flex' }}
              // width={{ base: 'full', md: 'auto' }}
              maxW={'180px'}
              alignItems="center"
              flexGrow={1}
              mt={{ base: 4, md: 0 }}
              justifyContent={'space-evenly'}
            >
              <LinkItem href="/post" path={path}>
                記事投稿
              </LinkItem>
              <Menu>
                <MenuButton>
                  <Avatar
                    width={'40px'}
                    height={'40px'}
                    src={session.user.image ?? ''}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => signOut()}>ログアウト</MenuItem>
                </MenuList>
              </Menu>
            </Stack>

            <Box
              flex={1}
              textAlign="right"
              maxW={'180px'}
              display={{ base: 'inline-block', md: 'none' }}
            >
              <Box ml={2}>
                <Menu isLazy id="navbar-menu">
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <MenuItem onClick={() => signOut()}>ログアウト</MenuItem>
                    <NextLink href="/post" passHref>
                      <MenuItem as={Link}>記事投稿</MenuItem>
                    </NextLink>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </Box>
  )
}
