import Layout from 'components/layouts/login'
import { Flex, Heading, Button, Stack, Box, Avatar } from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()

  const buttonClick = () => {}

  return (
    <Layout>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Stack mb="2" justifyContent="center" alignItems="center">
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: '90%', md: '468px' }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
                maxW={'300px'}
                margin={'0 auto'}
              >
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  onClick={() => signIn('', { callbackUrl: '/' })}
                >
                  Login
                </Button>
                {session && (
                  <>
                    Signed in as{' '}
                    <img src={session.user.image ?? ''} width="50px" />
                    {session.user.name} <br />
                    AccessToken : {session.user.accessToken} <br />
                    <button onClick={() => signOut()}>Sign out</button>{' '}
                  </>
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
          onClick={() => buttonClick()}
        >
          Login
        </Button>
      </Flex>
    </Layout>
  )
}
