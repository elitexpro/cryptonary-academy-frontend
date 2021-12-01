import React from 'react'
import vidoeItemSvg from 'assets/image/video.svg'
import {
  Box,
  Divider,
  IconButton,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'


const VideoItem = () => {
  return (
    <Stack>
      <img src={vidoeItemSvg} alt='' style={{ width: '100%' }} />
      <Typography variant="subTitle3" sx={{ color: "#232A45", mt: 2, mb: 1 }}>What is Cold Storage?</Typography>
      <Typography variant="subTitle" sx={{ color: "#858585" }}>
        Cold Storage is the term given to digital wallets held offline to protect
        cryptocurrency funds from fraudulent use by others ...
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