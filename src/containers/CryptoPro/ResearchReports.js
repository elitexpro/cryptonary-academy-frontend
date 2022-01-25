import React from 'react'
import {
  Typography,
  Box,
  Grid,
} from '@mui/material'
import EtfSVG from 'assets/image/etf.svg'

const ResearchReports = () => {
  return (
    <Box sx={{ width: { md: "60%" }, textAlign: { md: "center" } }}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="subTitle" color="#FFF">
            Get detailed research that our team spends countless hours on condensed into easy to digest journals and papers.
            Over 900 hours have gone into our reports in 2021.
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Box sx={{ mt: 4, px: 4 }}>
            <img src={EtfSVG} alt="" style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ResearchReports
