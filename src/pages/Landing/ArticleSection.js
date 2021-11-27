import React from 'react'
import {
  Box,
  Stack,
  Typography,
} from '@mui/material'
import ImgLandingArticle from 'assets/image/landing2.png'

const ArticleSection = () => {

  return (
    <Stack spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{ my: { md: 10, xs: 4 } }}>
      <Typography variant="headTitle2" >
        In-Depth journals and articles
      </Typography>

      <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: 600 }}>
        Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
      </Typography>

      <Box sx={{ maxWidth: 920 }}>
        <img src={ImgLandingArticle} alt='' style={{ width: "100%" }} />
      </Box>
    </Stack>
  )
}

export default ArticleSection
