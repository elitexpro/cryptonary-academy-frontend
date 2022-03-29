import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Skeleton,
  Stack,
} from '@mui/material'
import { ArticleItem } from 'components/ArticleItem'
import { articleListSelector, articleStatusSelector } from 'redux/modules/article/selectors'

const Posts = () => {
  const articles = useSelector(articleListSelector)
  const status = useSelector(articleStatusSelector)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(articles.posts)
  }, [articles])

  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={4}>
        {
          status === 'SUCCESS' ?
            posts?.map((post, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  <ArticleItem data={post} />
                </Grid>
              )
            }) : (
              [0, 1, 2].map((value, index) => {
                return (
                  <Grid item key={index} xs={12} md={4}>
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={247} />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Grid>
                )
              })
            )
        }
      </Grid>
    </Box>
  )
}

export default Posts
