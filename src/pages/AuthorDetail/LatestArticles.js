import React from 'react'
import {
  Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { latestArticlesOfAuthorSelector } from 'redux/modules/author/selectors'
import { ArticleItem } from 'components/ArticleItem'

const LatestArticles = () => {
  const latestArticles = useSelector(latestArticlesOfAuthorSelector)

  return (
    <Grid container spacing={3}>
      {
        latestArticles?.length > 0 && latestArticles.map((data, index) => (
          <Grid item md={4} xs={12} key={index}>
            <ArticleItem data={data} showHours={true} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default LatestArticles
