import React, { useState, useEffect, useCallback } from 'react'
import {
  Box,
  Stack,
  Skeleton,
  Grid,
} from '@mui/material'
import { getAllArticles } from 'redux/modules/article/actions'
import { useDispatch } from 'react-redux'
import { MButton } from 'components/CustomMaterial'
import { ArticleItem } from 'components/ArticleItem'
import { FiRefreshCw } from "react-icons/fi"

const NewsSection = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAllArticles({
      params: {
        page: 1,
        perPage: 9
      },
      success: ({ data }) => {
        setData(data?.posts)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch])

  const handleLoadMoreNews = useCallback(() => {
    console.log('here')
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
