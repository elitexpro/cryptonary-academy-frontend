import React from 'react'
import {
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import SvgVideo from 'assets/image/video.svg'

const PulseItem = ({ icon, data }) => {

  return (
    <Box sx={{ py: 4, px: { md: 4, xs: 2 }, backgroundColor: "#FAFAFA", borderRadius: "8px" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <img src={icon} alt="" style={{ width: 40, height: 40 }} />
        <Typography variant="subTitle3" sx={{ color: "#141414" }}>{data.title}</Typography>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="subTitle1" sx={{ color: "#555" }}>{data.content}</Typography>

      <Box sx={{ mt: 2 }}>
        <img src={SvgVideo} alt="" style={{ maxWidth: 480, width: "100%" }} />
      </Box>
    </Box>
  )
}

export default PulseItem
