import React from 'react'
import {
  Typography,
  Box,
  Grid,
} from '@mui/material'
import MakeFriendsSVG from 'assets/image/Make Friends.svg'

const MakeFriends = () => {
  return (
    <Box sx={{ width: { md: "60%" }, textAlign: { md: "center" } }}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="subTitle" color="#FFF">
            Cryptonary Pro has a Discord community of 10,000+ crypto enthusiasts of all levels.
            Connect with them and discuss big ideas!
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Box sx={{ mt: 4, px: 4 }}>
            <img src={MakeFriendsSVG} alt="" style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MakeFriends
