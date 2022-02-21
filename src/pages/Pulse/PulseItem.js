import React from 'react'
import {
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PulseItem = ({ data }) => {
  const { attributes } = data

  return (
    <Box sx={{ py: 4, px: { md: 4, xs: 2 }, backgroundColor: "#FAFAFA", borderRadius: "8px" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        {
          attributes?.coin?.url &&
          <LazyLoadImage
            alt=""
            effect="blur"
            width={40}
            height={40}
            src={attributes?.coin?.url}
          />
        }
        <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>
          {attributes?.title}
        </Typography>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="subTitle1" sx={{ color: "#555" }}>{attributes?.description}</Typography>

      {
        attributes && attributes?.images.length > 0 &&
        <Box sx={{ mt: 2, maxWidth: 480 }}>
          <LazyLoadImage
            alt=""
            effect="blur"
            width="100%"
            src={attributes?.images[0]}
          />
        </Box>
      }
    </Box>
  )
}

export default PulseItem
