import React from 'react'
import {
  Box,
  Divider,
  Typography,
  Stack,
  IconButton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import ImgRelatedArticle from 'assets/image/related-article.png'

const ArticleItem = () => {

  return (
    <Box>
      <Box>
        <img src={ImgRelatedArticle} alt='' style={{ width: '100%' }} />
      </Box>
      <Stack spacing={1}>
        <Typography variant="subTitle3" sx={{ color: "#232A45", fontWeight: 500 }}>
          What is Cold Storage?
        </Typography>
        <Typography variant="subTitle" sx={{ color: "#858585" }}>
          Cold Storage is the term given to digital wallets held offline to protect
          cryptocurrency funds from fraudulent use by others ...
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', mb: 2 }}>
        <MButton color='warning' variant='text' sx={{ background: "#FFF7EB" }}>
          Intermediate
        </MButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small">
          <BookmarkBorderRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  )

}

export default ArticleItem