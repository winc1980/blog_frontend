import { Card, Text, CardBody, Image, Stack } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'

type Props = {
  src: string
  title: string
  date: string
  tag: string
  user: string
  onClick: () => void
}
export default function ArticleCard({
  src,
  title,
  date,
  tag,
  user,
  onClick
}: Props) {
  return (
    <Card
      maxW="md"
      boxShadow={'md'}
      overflow={'hidden'}
      transition={'box-shadow 0.2s, transform 0.3s'}
      cursor={'pointer'}
      _hover={{ boxShadow: '2xl', transform: 'translate(0, -2px)' }}
      onClick={onClick}
    >
      <Image objectFit="cover" src={src} alt="Chakra UI" />
      <CardBody>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Text color={'#787878'} fontSize={'xs'}>
            {date}
          </Text>
          <Badge colorScheme="blue">{tag}</Badge>
        </Stack>

        <Text>{title}</Text>
        <Text color={'#787878'} fontSize={'xs'}>
          {user}
        </Text>
      </CardBody>
    </Card>
  )
}
