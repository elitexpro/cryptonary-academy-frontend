import React from 'react'
import {
  Stack,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { latestArticlesOfAuthorSelector } from 'redux/modules/author/selectors'
import { HorizontalArticleItem } from 'components/ArticleItem'

const LatestArticles = () => {
  const latestArticles = useSelector(latestArticlesOfAuthorSelector)

  return (
    <Stack spacing={4} >
      {
        latestArticles?.length > 0 && latestArticles.map((data, index) => (
          <HorizontalArticleItem key={index} data={data} showHours={true} />
        ))
      }
    </Stack>
  )
}

export default LatestArticles
