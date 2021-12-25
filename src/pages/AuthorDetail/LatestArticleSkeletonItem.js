import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Skeleton,
} from '@mui/material'

const LatestArticleSkeletonItem = () => {

  return (
    <Box maxWidth="md" sx={{ width: '100%' }}>
      <Grid container spacing={2} sx={{ display: "flex", flexDirection: { md: "row", xs: "row-reverse" } }}>
        <Grid item xs={4}>
          <Box sx={{ maxWidth: 320 }}>
            <Skeleton variant="rectangular" animation="wave" width="100%" height="150px" />
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Stack spacing={1}>
            <Typography variant="subTitle1" sx={{ color: "#232A45", fontWeight: 500 }}>
              <Skeleton animation="wave" width="60%" />
            </Typography>
            <Typography variant="subTitle" sx={{ color: "#858585" }}>
              <Skeleton animation="wave" width="100%" />
              <Skeleton animation="wave" width="80%" />
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Typography variant='subTitle' sx={{ color: "#858585" }}>
            <Skeleton animation="wave" width="30%" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LatestArticleSkeletonItem
