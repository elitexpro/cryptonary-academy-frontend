import React from 'react'
import vidoeItemSvg from 'assets/image/video.svg'
import {
  Box,
  Divider,
  IconButton,
  Typography,
  Stack,
  Link,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'

const defaultString =
  "Cold Storage is the term given to digital wallets held offline to protect cryptocurrency funds from fraudulent use by others ..."

const VideoItem = ({ post }) => {
  return (
    <Stack>
      <img src={post ? post.feature_image : vidoeItemSvg} alt='' style={{ width: '100%' }} />
      <Typography variant="subTitle3" sx={{ mt: 2, mb: 1 }}>
        <Link href={`article/${post?.id}`} underline="hover" sx={{ color: "#232A45" }}>
          {post ? post.title : "What is Cold Storage?"}
        </Link>
      </Typography>
      <Typography variant="subTitle" sx={{ color: "#858585" }}>
        {post ? post.excerpt : defaultString}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack direction="row">
        <MButton color='success' variant='outlined'>
          Begineer
        </MButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small">
          <BookmarkBorderRoundedIcon sx={{ fontSize: '24px' }} />
        </IconButton>
      </Stack>
    </Stack>
  )

}

export default VideoItem