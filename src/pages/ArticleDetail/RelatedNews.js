import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Skeleton,
  Grid,
  Typography,
} from '@mui/material'
import { getFilteredArticles } from 'redux/modules/article/actions'
import { useDispatch } from 'react-redux'
import { ArticleItem } from 'components/ArticleItem'

const RelatedNews = ({ tag }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    tag && dispatch(getFilteredArticles({
      params: {
        page: 1,
        perPage: 3
      },
      body: {
        tags: [tag]
      },
      success: ({ data }) => {
        setData(data?.posts)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch, tag])

  return (
    <Stack spacing={6}>
      <Typography variant="h4" sx={{ fontWeight: 500 }} >
        Related News
      </Typography>

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
    </Stack>

  )
}

export default RelatedNews
