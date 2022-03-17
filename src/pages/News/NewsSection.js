import React, { useState, useEffect, useCallback } from 'react'
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
import { newsTagSelector, newsSortBySelector, newsSearchValueSelector } from 'redux/modules/news/selectors'

const NewsSection = () => {
  const dispatch = useDispatch()
  const newsTag = useSelector(newsTagSelector)
  const sortByValue = useSelector(newsSortBySelector)
  const searchString = useSelector(newsSearchValueSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const loadNews = useCallback(() => {
    setIsLoading(true)

    dispatch(getFilteredNews({
      params: {
        page,
        perPage: 9,
        searchString
      },
      body: {
        tags: newsTag === 'all' ? ['news'] : [newsTag]
      },
      success: ({ data }) => {
        setData(data?.posts)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch, newsTag, searchString, page])

  useEffect(() => {
    loadNews()
  }, [loadNews])

  const handleLoadMoreNews = useCallback(() => {
    // setPage(prev => prev + 1)
  }, [])

  return (
    <Stack spacing={6}>
      <Box>
        <Grid container spacing={4}>
          {
            (isLoading || data.length === 0)
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
              data.map((post, index) => {
                return (
                  <Grid item key={index} xs={12} md={4}>
                    <ArticleItem data={post} />
                  </Grid>
                )
              })
          }
        </Grid>
      </Box>

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
    </Stack>

  )
}

export default NewsSection
