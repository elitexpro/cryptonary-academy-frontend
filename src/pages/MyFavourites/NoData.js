import React from 'react'
import {
  Skeleton,
  Box,
  Stack,
  Typography,
} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'

const NoData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: "calc(100vh - 80px)",
        justifyContent: 'center',
      }}
    >
      <Stack spacing={1} sx={{ p: 3, mb: 4 }}>
        <Skeleton variant="rectangular" width="100%" height={220} />
        <Stack direction="row" spacing={1}>
          <Stack spacing={2}>
            <Skeleton width="350px" />
            <Skeleton />
            <Skeleton width="60%" />
          </Stack>
          <BookmarkIcon style={{ color: '#4AAF47' }} />
        </Stack>
      </Stack>

      <Typography variant='h4' color='#141414'>No article favorited yet!</Typography>

      <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
        <Typography variant="subTitle" color="#909090">
          Keep track of the articles you are interested in by clicking the
        </Typography>

        <BookmarkBorderRoundedIcon />

        <Typography variant="subTitle" color="#909090">icon</Typography>
      </Stack>
    </Box>
  )
}

export default NoData
