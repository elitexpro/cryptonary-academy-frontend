import React from 'react'
import {
  Stack,
} from '@mui/material'
import PulseItem from './PulseItem'

const PulseList = ({ data }) => {
  return (
    <Stack spacing={2} sx={{ mt: { md: 2.5, xs: 0 } }}>
      {data.map((item, index) => <PulseItem key={index} data={item} />)}
    </Stack>
  )
}

export default PulseList
