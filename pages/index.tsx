import {
  Box,
  IconButton,
  Center,
  Container,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from 'components/layouts/article'
import ArticleCard, { ArticleCardSkeleton } from 'components/articleCard'
import { useRouter } from 'next/router'
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup
} from '@ajna/pagination'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { MdEvent } from 'react-icons/md'
import { SiQiita, SiZenn } from 'react-icons/si'

const outerLimit = 1
const innerLimit = 1

const getLinkedAccounts = async (
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true)
  const response = await fetch('https://api.winc.ne.jp/articles/')
  const res = await response.json()
  setLoading(false)
  return res
}

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLinkedAccounts(setLoading).then(data => setArticles(data))
  }, [])

  const router = useRouter()

  const openUrl = (url: string) => {
    window.open(url, '_blank')
  }

  const [filterWinc, setFilterWinc] = useState(true)
  const [filterQiita, setFilterQiita] = useState(true)
  const [filterZenn, setFilterZenn] = useState(true)
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box display={'flex'} justifyContent={'flex-end'} mb={'2'}>
          <Box
            display={'flex'}
            backgroundColor={'white'}
            justifyContent={'space-evenly'}
            w={'36'}
          >
            <IconButton
              aria-label="winc"
              icon={<MdEvent />}
              borderRadius={'50%'}
              _hover={{
                boxShadow: filterWinc ? 'none' : '',
                backgroundColor: filterWinc ? '' : 'gray.200'
              }}
              backgroundColor={filterWinc ? 'lightblue' : 'white'}
              onClick={() => setFilterWinc(!filterWinc)}
            />
            <IconButton
              aria-label="qiita"
              icon={<SiQiita />}
              borderRadius={'50%'}
              _hover={{
                boxShadow: filterQiita ? 'none' : '',
                backgroundColor: filterQiita ? '' : 'gray.200'
              }}
              backgroundColor={filterQiita ? 'lightblue' : 'white'}
              onClick={() => setFilterQiita(!filterQiita)}
            />
            <IconButton
              aria-label="zenn"
              icon={<SiZenn />}
              borderRadius={'50%'}
              _hover={{
                boxShadow: filterZenn ? 'none' : '',
                backgroundColor: filterZenn ? '' : 'gray.200'
              }}
              backgroundColor={filterZenn ? 'lightblue' : 'white'}
              onClick={() => setFilterZenn(!filterZenn)}
            />
          </Box>
        </Box>
        {loading && (
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3 }}
            gap={5}
            justifyItems={'center'}
          >
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </SimpleGrid>
        )}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          gap={5}
          justifyItems={'center'}
        >
          {articles.map((article, i) => {
            return (
              <ArticleCard
                src={
                  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                }
                title={article['Title']}
                date={article['Published']}
                tag={'イベント'}
                user={'@' + article['Name']}
                onClick={() => openUrl(article['Link'])}
                key={i}
              />
            )
          })}
        </SimpleGrid>
        <ArticlePagination />
      </Container>
    </Layout>
  )
}

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

function ArticlePagination() {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: 20,
    initialState: { currentPage: 1 },
    limits: {
      outer: outerLimit,
      inner: innerLimit
    }
  })

  useEffect(() => {}, [currentPage])

  return (
    <Container my={'10'} maxWidth={'100%'} border={'2'}>
      <Center>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        >
          <PaginationContainer>
            <PaginationPrevious colorScheme="blue" mr={'2'}>
              <GrFormPrevious />
            </PaginationPrevious>
            <PaginationPageGroup>
              {pages.map(page => (
                <PaginationPage
                  mr={'1'}
                  width={'8'}
                  key={`pagination_page_${page}`}
                  page={page}
                  isDisabled={page === currentPage}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext colorScheme="blue" mr={'2'}>
              <GrFormNext />
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </Center>
    </Container>
  )
}
