import React from 'react'
import {
  Stack,
} from '@mui/material'
import LatestArticleItem from './LatestArticleItem'

const LatestArticles = () => {

  return (
    <Stack spacing={4} >
      <LatestArticleItem />
      <LatestArticleItem />
      <LatestArticleItem />
      <LatestArticleItem />
      <LatestArticleItem />
      <LatestArticleItem />
    </Stack>
  )
}

export default LatestArticles
