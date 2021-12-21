import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Divider,
} from '@mui/material'
import SvgPulseIcon from 'assets/image/pulse-icon.svg'

const CPROPulse = () => {
  return (
    <Box sx={{
      position: "sticky",
      top: 140,
      p: 4,
      backgroundColor: "#F8FCF8",
      borderRadius: "13px 13px 0px 0px",
      mt: 2.5,
    }}>
      <Stack spacing={2} alignItems="flex-start">
        <img src={SvgPulseIcon} alt="" style={{ weight: 48, height: 48 }} />
        <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>CPRO Pulse</Typography>
      </Stack>

      <Divider sx={{ my: 3 }} />
      
      <Stack spacing={3}>
        <Typography variant="subTitle4" sx={{ color: "#555" }}>
          Welcome to CPRO Pulse where we analyse the cryptocurrency market in both text & video formats.
        </Typography>
        <Typography variant="subTitle4" sx={{ color: "#555" }}>
          <strong style={{ color: "#141414" }}>Multi-Format Thursdays </strong>
          where we analyse the cryptocurrency market in both text & video formats.
        </Typography>
        <Typography variant="subTitle4" sx={{ color: "#555" }}>
          <strong style={{ color: "#141414" }}>Daily Market Analysis </strong>
          where we analyse the cryptocurrency market in both text & video formats.
        </Typography>
        <Typography variant="subTitle4" sx={{ color: "#555" }}>
          <strong style={{ color: "#141414" }}>On-chain forensic </strong>
          where we analyse the cryptocurrency market in both text & video formats.
        </Typography>
      </Stack>
    </Box>
  )
}

export default CPROPulse
