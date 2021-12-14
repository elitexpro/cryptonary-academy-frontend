import React from 'react'
import {
  Box,
  Grid,
  Divider,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { VideoItem } from 'components/VideoItem'

const Basics = () => {
  return (
    <Box>
      <Stack direction="row">
        <Typography variant="h2" sx={{ color: "#141414", mb: 3 }}>Basics</Typography>
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

      <Divider sx={{ my: 4 }} />
    </Box>
  )
}

export default Basics
