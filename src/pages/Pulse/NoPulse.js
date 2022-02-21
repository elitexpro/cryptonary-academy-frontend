import React from 'react'
import {
  Stack,
  Typography,
} from '@mui/material'
import SvgNoPulse from 'assets/image/no-pulse.svg'
import { MButton } from 'components/CustomMaterial'

const NoPulse = ({ showLatest }) => {
  return (
    <Stack
      sx={{ mt: { md: 10, xs: 5 } }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={4} sx={{ width: 300, textAlign: "center", alignItems: "center" }}>
        <img src={SvgNoPulse} alt="" sx={{ height: 200 }} />
        <Stack spacing={1}>
          <Typography variant="subTitle3" sx={{ color: "#555", fontWeight: 500 }}>
            No updates at the moment
          </Typography>
          <Typography variant="subTitle4" sx={{ color: "#909090" }}>
            Once market analysis for this date has been puclished, it will appear here.
          </Typography>
        </Stack>

        <MButton
          color='success'
          variant='contained'
          sx={{ height: 40, color: '#FFF', fontSize: 14, width: 150 }}
          onClick={showLatest}
        >
          See latest update
        </MButton>
      </Stack>
    </Stack >
  )
}

export default NoPulse
