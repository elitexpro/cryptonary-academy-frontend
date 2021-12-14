import React from 'react'
import {
  Stack,
} from '@mui/material'
import PulseItem from './PulseItem'
import mockupData from './pulseItemMockup.json'
import SvgBitcoin from 'assets/image/bitcoin.svg'
import SvgEther from 'assets/image/ether.svg'
import SvgDOT from 'assets/image/dot.svg'

const icons = [
  SvgBitcoin,
  SvgEther,
  SvgDOT
]

const PulseList = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {mockupData.map((item, index) => <PulseItem key={index} icon={icons[index]} content={item} /> )}
    </Stack>
  )
}

export default PulseList
