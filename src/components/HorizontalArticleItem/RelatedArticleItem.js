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

const RelatedArticleItem = ({ post }) => {

  return (
    <Box>
      <Box>
        <img src={post?.feature_image} alt='' style={{ width: '100%' }} />
      </Box>
      <Stack spacing={1}>
        <Typography variant="subTitle3" sx={{ color: "#232A45", fontWeight: 500 }}>
          {post?.title}
        </Typography>
        <Typography variant="subTitle" sx={{ color: "#858585" }}>
          {post?.excerpt}
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

export default RelatedArticleItem