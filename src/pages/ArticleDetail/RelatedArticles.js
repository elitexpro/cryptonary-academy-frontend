import React from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { ArticleItem } from 'components/ArticleItem'

const RelatedArticles = () => {

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
        <Grid item md={4} xs={12}>
          <ArticleItem />
        </Grid>
        <Grid item md={4} xs={12}>
          <ArticleItem />
        </Grid>
        <Grid item md={4} xs={12}>
          <ArticleItem />
        </Grid>
      </Grid>
    </Box>
  )
}

export default RelatedArticles
