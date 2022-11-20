import { Center, Container, Text } from '@chakra-ui/react'
import Layout from 'components/layouts/article'
import { SimpleGrid } from '@chakra-ui/react'
import ArticleCard from 'components/articleCard'
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
import { useEffect } from 'react'

const outerLimit = 1
const innerLimit = 1

export default function Home() {
  const router = useRouter()

  const openUrl = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <Layout>
      <Container maxW="container.lg">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          gap={5}
          justifyItems={'center'}
        >
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />

          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
          <ArticleCard
            src={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            title={'Next.js + Chakra UI で簡易ダッシュボード構築してみた'}
            date={'2022/11/11'}
            tag={'イベント'}
            user={'@empelt'}
            onClick={() =>
              openUrl('https://qiita.com/TK-C/items/c64ca54b634b0cae0059')
            }
          />
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

  useEffect(() => {
    console.log('Page', currentPage)
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
