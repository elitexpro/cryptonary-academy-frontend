import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { VideoItem } from 'components/VideoItem'

const MustKnow = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row">
        <Typography variant="h2" sx={{ color: "#141414", mb: 3 }}>Must Knows</Typography>
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
