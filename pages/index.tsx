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
import { useSession } from 'next-auth/react'
import { MdEvent } from 'react-icons/md'
import { SiQiita, SiZenn } from 'react-icons/si'
import { Tooltip } from '@chakra-ui/react'

const outerLimit = 1
const innerLimit = 1

const getArticles = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  page: number
) => {
  setLoading(true)
  const response = await fetch(
    'https://api.winc.ne.jp/articles/?page=' + String(page)
  )
  const res = await response.json()
  setLoading(false)
  return res
}

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagesCount, setPagesCount] = useState(0)
  const { data: session } = useSession()

  useEffect(() => {
    getArticles(setLoading, 1).then(data => {
      setArticles(data['items'])
      setPagesCount(data['pages_count'])
      console.log(data)
    })
  }, [])

  const router = useRouter()

  const openUrl = (url: string) => {
    window.open(url, '_blank')
  }

  const changeCurrentPage = (page: number) => {
    getArticles(setLoading, page).then(data => {
      setArticles(data)
      console.log(data)
    })
  }

  const [filterWinc, setFilterWinc] = useState(true)
  const [filterQiita, setFilterQiita] = useState(true)
  const [filterZenn, setFilterZenn] = useState(true)
  return (
    <Layout>
      <Container maxW="container.lg">
        {/* <Box display={'flex'} justifyContent={'flex-end'} mb={'2'}>
          <Box
            display={'flex'}
            backgroundColor={'white'}
            justifyContent={'space-evenly'}
            w={'36'}
          >
            <Tooltip
              label={
                filterWinc
                  ? 'WINCのイベントの記事を非表示にする'
                  : 'WINCのイベントの記事を表示する'
              }
              placement="top"
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
            </Tooltip>

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
        </Box> */}
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
          {articles &&
            articles.map((article, i) => {
              return (
                <ArticleCard
                  src={article['image']}
                  title={article['title']}
                  date={article['published']}
                  tag={article['type']}
                  user={'@' + article['name']}
                  onClick={() => openUrl(article['link'])}
                  key={i}
                />
              )
            })}
        </SimpleGrid>
        {articles && (
          <ArticlePagination
            changeCurrentPage={changeCurrentPage}
            pagesCount_={pagesCount}
          />
        )}
      </Container>
    </Layout>
  )
}

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

type ArticlePaginationProps = {
  changeCurrentPage: (page: number) => void
  pagesCount_: number
}
function ArticlePagination({
  changeCurrentPage,
  pagesCount_
}: ArticlePaginationProps) {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: pagesCount_,
    initialState: { currentPage: 1 },
    limits: {
      outer: outerLimit,
      inner: innerLimit
    }
  })

  useEffect(() => {
    changeCurrentPage(currentPage)
  }, [currentPage])

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
