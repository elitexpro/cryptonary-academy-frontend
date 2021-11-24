import React from 'react'
import {
  Box,
  Typography,
  IconButton,
  Stack,
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

const VideoTitle = ({ sx, ...other }) => {
  return (
    <Box sx={{ my: 3, ...sx }}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
          How to Mine Bitcoin
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />
        <IconButton size="small">
          <BookmarkBorderIcon />
        </IconButton>
      </Stack>

      <Typography variant="subTitle1" sx={{ color: "#555", mt: 1 }}>
        Jul 21, 2021
      </Typography>
    </Box>
  )
}

export default VideoTitle

