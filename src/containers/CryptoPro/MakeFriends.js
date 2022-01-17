import React from 'react'
import {
  Typography,
  Box,
} from '@mui/material'
import MakeFriendsSVG from 'assets/image/Make Friends.svg'

const MakeFriends = () => {
  return (
    <Box sx={{ width: "60%", textAlign: "center" }}>
      <Typography variant="subTitle" color="#FFF">
        Cryptonary Pro has a Discord community of 10,000+ crypto enthusiasts of all levels.
        Connect with them and discuss big ideas!
      </Typography>
      <Box sx={{ mt: 4 }}>
        <img src={MakeFriendsSVG} alt="" />
      </Box>
    </Box>
  )
}

export default MakeFriends
