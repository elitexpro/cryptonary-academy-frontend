import React from 'react'
import {
  Typography,
  Box,
} from '@mui/material'
import EtfSVG from 'assets/image/etf.svg'

const ResearchReports = () => {
  return (
    <Box sx={{ width: "60%", textAlign: "center" }}>
      <Typography variant="subTitle" color="#FFF">
        Get detailed research that our team spends countless hours on condensed into easy to digest journals and papers.
        Over 900 hours have gone into our reports in 2021.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <img src={EtfSVG} alt="" />
      </Box>
    </Box>
  )
}

export default ResearchReports
