import React, { useState, useEffect, useCallback, memo } from 'react'
import {
  Box,
  Stack,
  Skeleton,
  Grid,
} from '@mui/material'
import { getFilteredNews } from 'redux/modules/news/actions'
import { MButton } from 'components/CustomMaterial'
import { ArticleItem } from 'components/ArticleItem'
import { FiRefreshCw } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { newsTagSelector, newsSortBySelector, newsSearchValueSelector, filteredNewsSelector } from 'redux/modules/news/selectors'
import NoData from 'components/NoData'

const NewsSection = () => {
  const dispatch = useDispatch()
  const newsTag = useSelector(newsTagSelector)
  const sortByValue = useSelector(newsSortBySelector)
  const searchString = useSelector(newsSearchValueSelector)
  const filteredNews = useSelector(filteredNewsSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const loadNews = useCallback(() => {
    setIsLoading(true)

    dispatch(getFilteredNews({
      params: {
        page: 1,
        perPage: 9,
        searchString,
        order: sortByValue
      },
      body: {
        tags: newsTag === 'all' ? ['news'] : [newsTag]
      },
      success: () => {
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch, newsTag, searchString, sortByValue])

  useEffect(() => {
    loadNews()
  }, [loadNews])

  const handleLoadMoreNews = useCallback(() => {
    setPage(prev => prev + 1)
    setIsLoadingMore(true)
    dispatch(getFilteredNews({
      params: {
        page: page + 1,
        perPage: 9,
        searchString,
        order: sortByValue
      },
      body: {
        tags: newsTag === 'all' ? ['news'] : [newsTag]
      },
      success: () => {
        setIsLoadingMore(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch, newsTag, page, searchString, sortByValue])

  return (
    <Stack spacing={6}>
      <Box>
        <Grid container spacing={4}>
          {
            isLoading
              ?
              [0, 1, 2].map((value, index) => {
                return (
                  <Grid item key={index} xs={12} md={4}>
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={220} />
                      <Skeleton width="100px" />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Grid>
                )
              })
              :
              filteredNews?.length > 0 ?
                filteredNews.map((post, index) => (
                  <NewsItem post={post} key={index} newsTag={newsTag} />
                ))
                :
                <NoData />
          }
        </Grid>
      </Box>

      <Box>
        {isLoadingMore ?
          <Grid container spacing={4}>
            {
              [0, 1, 2].map((value, index) => {
                return (
                  <Grid item key={index} xs={12} md={4}>
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={220} />
                      <Skeleton width="100px" />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Grid>
                )
              })
            }
          </Grid>
          :
          filteredNews?.length > 0 &&
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <MButton
              variant='outlined'
              color='inherit'
              sx={{ fontSize: '16px', px: 2, color: '#858585', background: "#FFF" }}
              onClick={handleLoadMoreNews}
              endIcon={<FiRefreshCw />}
            >
              Load more
            </MButton>
          </Stack>
        }
      </Box>
    </Stack >
  )
}

export default NewsSection

const NewsItem = memo(({ post, newsTag }) => {
  return (
    <Grid item xs={12} md={4}>
      <ArticleItem data={post} blog="News" blogTo='/news/all' tag={newsTag} />
    </Grid>
  )
}, (prevProps, nextProps) => {
  return (
    JSON.stringify(prevProps.post) === JSON.stringify(nextProps.post)
  )
})