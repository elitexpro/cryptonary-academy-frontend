import React from 'react'
import {
  Box,
  Grid,
  Divider,
  Stack,
  Typography,
  Link,
  Skeleton,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const AlphaContent = () => {

  return (
    <Box sx={{ py: 5, px: 10, background: "#FCFCFC" }}>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography variant="subTitle4" sx={{ color: "#555" }}>
              RESEARCH
            </Typography>
            <Divider />
            <Link
              component={RouterLink}
              to='/research-reports'
              underline="hover"
              sx={{ pt: 3, color: "#141414", fontWeight: 500, fontSize: "16px" }}
            >
              Research Reports
            </Link>
            <Typography variant="subTitle4" sx={{ color: "#858585" }}>
              In crypto, opportunities are everywhere but the really great
              ones only show up every once in a while – we estimate ...
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography variant="subTitle4" sx={{ color: "#555" }}>
              ANALYSIS
            </Typography>

            <Divider />

            <Link
              component={RouterLink}
              to='/analysis?tab=on-chain-forensics'
              underline="hover"
              sx={{ pt: 3, color: "#141414", fontWeight: 500, fontSize: "16px" }}
            >
              On-chain forensics
            </Link>
            <Typography variant="subTitle4" sx={{ color: "#858585" }}>
              Quick Access to BTC related news
            </Typography>

            <Link
              component={RouterLink}
              to='/analysis?tab=technical-analysis'
              underline="hover"
              sx={{ pt: 3, color: "#141414", fontWeight: 500, fontSize: "16px" }}
            >
              Weekly Technicals
            </Link>
            <Typography variant="subTitle4" sx={{ color: "#858585" }}>
              Quick Access to BTC related news
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Stack spacing={4} sx={{ borderLeft: "1px solid #E4E4E4", ml: 6, pl: 6 }}>
            <Stack spacing={2} direction="row">
              <Typography variant="subTitle4" sx={{ color: "#555" }}>
                LATEST ALPHA
              </Typography>
              <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                Members Exclusive
              </Typography>
            </Stack>

            <Divider />

            <Stack spacing={2} direction="row">
              <Box sx={{ minWidth: "175px", height: "100px" }}>
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
              <Stack spacing={1}>
                <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                  On-chain forensics
                </Typography>
                <Typography variant="subTitle4" sx={{ color: "#141414" }}>
                  The Full GIGA-BRAIN Plan
                </Typography>
                <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                  In crypto, opportunities are everywhere but the really great ones only
                  show up every once in a while – we estimate ...
                </Typography>
              </Stack>

            </Stack>
            <Stack spacing={2} direction="row">
              <Box sx={{ minWidth: "175px", height: "100px" }}>
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
              <Stack spacing={1}>
                <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                  Explained
                </Typography>
                <Typography variant="subTitle4" sx={{ color: "#141414" }}>
                  Layer 1s Explained
                </Typography>
                <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                  What is a Layer 1 blockchain? Simply, a Layer 1 blockchain is the underlying core architecture upon which other ...
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AlphaContent
