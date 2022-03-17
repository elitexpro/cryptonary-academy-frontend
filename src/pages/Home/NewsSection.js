import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Skeleton,
  Grid,
} from '@mui/material'
import { getFilteredArticles } from 'redux/modules/article/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MButton } from 'components/CustomMaterial'
import { ArticleItem } from 'components/ArticleItem'

const NewsSection = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getFilteredArticles({
      params: {
        page: 1,
        perPage: 3
      },
      body: {
        tags: ['news']
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
          onClick={() => history.push('/news')}
        >
          View all news
        </MButton>
      </Stack>
    </Stack>

  )
}

export default NewsSection
