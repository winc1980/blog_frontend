import Layout from 'components/layouts/post'
import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton
} from '@chakra-ui/react'
import { Input, Icon } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md'
import { useSession } from 'next-auth/react'

const getLinkedQiitaAccounts = async () => {
  const response = await fetch('https://api.winc.ne.jp/github_team/')
  const res = await response.json()
  return res
}
const getLinkedZennAccounts = async () => {
  const response = await fetch('https://api.winc.ne.jp/github_team/')
  const res = await response.json()
  return res
}

export default function LinkAccounts() {
  const [qiitaAccountName, setQiitaAccountName] = useState('')
  const [zennAccountName, setZennAccountName] = useState('')
  const { data: session } = useSession()

  useEffect(() => {
    ;(async () => {
      const linkedQiitaAccounts = await getLinkedQiitaAccounts()
      const linkedZennAccounts = await getLinkedZennAccounts()
      // setQiitaAccountName(linkedQiitaAccounts)
      // setZennAccountName(linkedZennAccounts)
    })()
  }, [])

  const linkQiitaAccount = async () => {
    if (qiitaAccountName !== '') {
      const response = await fetch('https://api.winc.ne.jp/members/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          qiita: qiitaAccountName,
          token: session?.user.accessToken
        })
      })
      console.log(response)
    }
    console.log(qiitaAccountName + 'アカウント連携！')
  }

  const linkZennAccount = async () => {
    if (zennAccountName !== '') {
      const response = await fetch('https://api.winc.ne.jp/members/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          zenn: zennAccountName,
          token: session?.user.accessToken
        })
      })
      console.log(response)
    }
    console.log(zennAccountName + 'アカウント連携！')
  }

  const unlinkQiitaAccount = async () => {
    if (window.confirm('本当に削除しますか?')) {
      console.log('削除')
    }
  }

  const unlinkZennAccount = async () => {
    if (window.confirm('本当に削除しますか?')) {
      console.log('削除')
    }
  }

  const accountList = ['@empelt', '@addbakkers', '@tetsuya', '@hibiki']
  return (
    <Layout>
      <Text fontSize={'2xl'} textAlign={'center'}>
        アカウント連携
      </Text>

      <Box display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
        <Box>
          <Text fontSize={'xl'} textAlign={'center'}>
            Qiita
          </Text>
          <Box display={'flex'} gap={5} mb={5} mt={5}>
            <Input
              type={'text'}
              placeholder="アカウント名"
              onChange={event => setQiitaAccountName(event.target.value)}
              value={qiitaAccountName}
            />
            <Button onClick={linkQiitaAccount}>追加</Button>
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
                      <Td>
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Text>{account}</Text>
                          <Icon
                            as={MdDelete}
                            w={4}
                            h={4}
                            cursor={'pointer'}
                            onClick={unlinkQiitaAccount}
                          />
                        </Box>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </Box>
        </Box>
        <Box>
          <Text fontSize={'xl'} textAlign={'center'}>
            Zenn
          </Text>
          <Box display={'flex'} gap={5} mb={5} mt={5}>
            <Input
              type={'text'}
              placeholder="アカウント名"
              onChange={event => setZennAccountName(event.target.value)}
              value={zennAccountName}
            />
            <Button onClick={linkZennAccount}>追加</Button>
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
                      <Td>
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Text>{account}</Text>
                          <Icon
                            as={MdDelete}
                            w={4}
                            h={4}
                            cursor={'pointer'}
                            onClick={unlinkZennAccount}
                          />
                        </Box>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
