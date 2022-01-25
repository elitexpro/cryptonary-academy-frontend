import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { RelatedArticleItem } from 'components/RelatedArticleItem'

const RelatedArticles = () => {
  const articles = useSelector((state) => state.article.articles)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(articles?.posts)
  }, [articles])

  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ display: 'flex', mb: 3 }}>
        <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500 }}>Related articles</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <MButton color='inherit' size="small" sx={{ fontSize: '16px' }}>
          View all
        </MButton>
      </Box>

      <Grid container spacing={3}>
        {
          posts?.length > 0 &&
          posts.map((post, index) => (
            <Grid item key={index} md={4} xs={12}>
              <RelatedArticleItem post={post} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default RelatedArticles
