import {
  Card,
  Text,
  CardBody,
  Image,
  Stack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Badge,
  Box
} from '@chakra-ui/react'

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

        <Text fontWeight={'bold'} mt={'1'}>
          {title}
        </Text>
        <Text color={'#787878'} fontSize={'xs'}>
          {user}
        </Text>
      </CardBody>
    </Card>
  )
}

export function ArticleCardSkeleton() {
  return (
    <Card maxW="md" overflow={'hidden'} w={'full'}>
      <Box>
        <Skeleton height="150px" />
      </Box>
      <CardBody>
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </CardBody>
    </Card>
  )
}
