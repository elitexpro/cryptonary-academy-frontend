import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { VideoItem } from 'components/VideoItem'
import { useDispatch, useSelector } from 'react-redux'

const MustKnow = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ color: "#141414" }}>Must Knows</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <MButton color='inherit' size="small">
          View all
        </MButton>
      </Stack>

      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <VideoItem />
        </Grid>
        <Grid item md={4} xs={12}>
          <VideoItem />
        </Grid>
        <Grid item md={4} xs={12}>
          <VideoItem />
        </Grid>
      </Grid>
    </Box>
  )
}

export default MustKnow
