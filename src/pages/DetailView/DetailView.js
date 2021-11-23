import React from 'react'
import {
  Container,
  Grid,
  Box,
} from '@mui/material'
import { MBreadcrumbs } from 'components/CustomMaterial'
import ImgDetailVideo from 'assets/image/detail_video.png'

const DetailView = () => {

  const detailRoot = [
    { text: 'Crypto School', to: '#' },
    { text: 'Basics', to: '#' },
    { text: 'Knowledge', to: '#' },
    { text: 'How to mine bitcoin?' },
  ]

  return (
    <Container maxWidth="xl">
      <MBreadcrumbs data={detailRoot} sx={{ mt: 6, mb: 3 }} />
      <Grid container spacing={2} >
        <Grid item xs={12} md={8}>
          <img src={ImgDetailVideo} alt="video" style={{ width: '100%', height: '100%' }} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Box >
            Related
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DetailView