import React from 'react'
import useStyles from './styles.js'
import vidoeItemSvg from 'assets/image/video.svg'
import {
  Box,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'


const VideoItem = () => {
  const classes = useStyles()

  return (
    <Box>
      <img src={vidoeItemSvg} alt='' style={{ width: '100%' }} />
      <div className={classes.title}>What is Cold Storage?</div>
      <div className={classes.content}>
        Cold Storage is the term given to digital wallets held offline to protect
        cryptocurrency funds from fraudulent use by others ...
      </div>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex' }}>
        <MButton color='success' variant='outlined'>
          Begineer
        </MButton>
        <Box sx={{ flexGrow: 1 }} />
        <BookmarkBorderRoundedIcon sx={{ fontSize: '24px' }} />
      </Box>
    </Box>
  )

}

export default VideoItem