import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  Box,
  Skeleton,
} from '@mui/material'

const LazyImage = ({ src, height }) => {

  return (
    <Box sx={{ background: "#F5F5F5", minHeight: height, position: "relative" }}>
      <LazyLoadImage
        alt=""
        effect="blur"
        width="100%"
        src={src}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ position: "absolute", top: 0 }}
      />
    </Box>
  )
}

export default LazyImage
