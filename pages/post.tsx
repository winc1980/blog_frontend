import { Container, Text } from '@chakra-ui/react'
import Layout from 'components/layouts/post'

export default function Post() {
  return (
    <Layout>
      <Container maxW="container.sm">
        <Text>post</Text>
      </Container>
    </Layout>
  )
}
