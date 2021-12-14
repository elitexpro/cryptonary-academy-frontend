import React from 'react'
import {
  Stack,
  Hidden,
} from '@mui/material'
import PulseList from './PulseList'
import CPROPulse from './CPROPulse'

const PulseContent = () => {
  return (
    <Stack direction="row" spacing={4} sx={{ mt: 7 }}>
      <PulseList />
      <Hidden mdDown>
        <CPROPulse />
      </Hidden>
    </Stack>
  )
}

export default PulseContent
