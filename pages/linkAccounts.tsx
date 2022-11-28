import Layout from 'components/layouts/post'
import { useState } from 'react'
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const getLinkedAccounts = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const res = await response.json()
  return res
}

export default function LinkAccounts() {
  const [accountName, setAccountName] = useState('')

  const handleClick = () => {
    console.log(accountName)
  }

  const accountList = ['@empelt', '@addbakkers', '@tetsuya', '@hibiki']
  return (
    <Layout>
      <Text>アカウント連携 ※zennのみ</Text>
      <Box display={'flex'} gap={5} mb={5} mt={5}>
        <Input
          type={'text'}
          placeholder="アカウント名"
          onChange={event => setAccountName(event.target.value)}
          value={accountName}
        />
        <Button onClick={handleClick}>追加</Button>
      </Box>

      <Box border="1px solid" borderColor="gray.100" borderRadius="md">
        <Table>
          <Thead>
            <Tr>
              <Th>アカウント名</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accountList.map((account, i) => {
              return (
                <Tr key={i}>
                  <Td>{account}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Box>
    </Layout>
  )
}
