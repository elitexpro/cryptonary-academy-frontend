import React from 'react'
import {
  Box,
  Typography,
  Stack,
} from '@mui/material'
import ImgRelatedVideo from 'assets/image/detail-related-item.png'


const RelatedVideoItem = () => {

  return (
    <Stack direction="row" spacing={2}>
      <img src={ImgRelatedVideo} alt='rv' style={{ width: '100px', height: '100%' }} />

      <Box>
        <Typography variant="subTitle" sx={{ color: "#232A45", fontWeight: 500 }}>
          What is Cold Storage?
        </Typography><br />
        <Typography variant="subTitle" sx={{ color: "#858585" }}>
          Cold Storage is the term given to digital wallets ...
        </Typography>
      </Box>
    </Stack>
  )

}

export default RelatedVideoItem