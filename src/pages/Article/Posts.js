import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Grid,
} from '@mui/material'
import { VideoItem } from 'components/VideoItem'

const Posts = () => {
  const articles = useSelector((state) => state.article.articles)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(articles)
  }, [articles])

  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={4}>
        {
          posts?.posts?.length > 0 &&
          posts?.posts?.map((post, index) => {
            return (
              <Grid item key={index} xs={12} md={4}>
                <VideoItem post={post} />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default Posts
