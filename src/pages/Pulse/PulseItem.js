import React from 'react'
import {
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import SvgVideo from 'assets/image/video.svg'

const PulseItem = ({ icon, content }) => {
  return (
    <Box sx={{ backgroundColor: "#FAFAFA", borderRadius: "8px", py: 4, px: {md: 4, xs: 2} }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <img src={icon} alt="" style={{ width: 40, height: 40 }} />
        <Typography variant="subTitle3" sx={{ color: "#141414" }}>{content.title}</Typography>
      </Stack>
      <Divider sx={{ my: 3 }} />
      {content.startDescription.map((item, index) => {
        const { content1, content2, content3 } = item

        return (
          <Stack key={index} spacing={3}>
            <Typography variant="subTitle1" sx={{ color: "#555" }}>{content1}</Typography>
            <Typography variant="subTitle1" sx={{ color: "#555" }}>{content2}</Typography>
            {content3 && <Typography variant="subTitle1" sx={{ color: "#555" }}>{content3}</Typography>}
          </Stack>
        )
      })}
      <Box sx={{ mt: 2 }}>
        <img src={SvgVideo} alt="" style={{ maxWidth: 480, width: "100%" }} />
      </Box>
      {content.endDescription && <Box sx={{ mt: 2 }}>
        <Typography variant="subTitle1" sx={{ color: "#555" }}>{content.endDescription}</Typography>
      </Box>}
    </Box>
  )
}

export default PulseItem
