import React, { useRef } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import {
  Box,
  Skeleton,
} from '@mui/material'
import useDimension from 'helpers/useDimension'

const LazyImage = ({ src, height }) => {
  const videoRef = useRef(null)
  const { width } = useDimension(videoRef)

  return (
    <Box sx={{ background: "#F5F5F5", position: "relative", zIndex: 1, height: height ? width : width / 2, }} ref={videoRef}>
      <LazyLoadComponent >
        <img
          alt=""
          effect="blur"
          loading="lazy"
          style={{
            width: "100%",
            height: height ? width : width / 2,
            objectFit: "cover"
          }}
          src={src}
        />
      </LazyLoadComponent>

      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ position: "absolute", top: 0, zIndex: -1 }}
      />
    </Box>
  )
}

export default LazyImage
