import React from 'react'
import moment from 'moment'
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Skeleton,
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

const VideoTitle = ({ video, isLoading, sx, ...other }) => {
  return (
    !isLoading ?
      <Stack sx={{ my: 3, ...sx }} spacing={2}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
            {video?.title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />
          <IconButton size="small">
            <BookmarkBorderIcon />
          </IconButton>
        </Stack>

        <Typography variant="subTitle1" color="#555">
          {video?.description}
        </Typography>

        <Typography variant="subTitle1" sx={{ color: "#555", mt: 1 }}>
          {moment(video?.createdAt).format('DD MMM, YYYY')}
        </Typography>
      </Stack>
      :
      <Stack sx={{ my: 3 }} spacing={1}>
        <Skeleton />
        <Skeleton />
        <Skeleton width="60%" />
      </Stack>
  )
}

export default VideoTitle

