import React from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Divider,
  Stack,
  Typography,
  Link,
  Skeleton,
  CardActionArea,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { HorizontalArticleItem } from 'components/HorizontalArticleItem'
import { latestAlphaSelector } from 'redux/modules/alpha/selectors'
import { LazyImage } from 'components/LazyImage'

const AlphaContent = ({ isLoading }) => {
  const latestAlphaList = useSelector(latestAlphaSelector)

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

            <Stack spacing={4}>
              {
                !isLoading ?
                  latestAlphaList?.map((item, index) => (
                    <HorizontalArticleItem data={item} key={index} />
                  ))
                  :
                  [0, 1].map((value, index) => (
                    <Grid container key={index}>
                      <Grid item xs={12} md={4}>
                        <CardActionArea>
                          <LazyImage>
                            <Skeleton variant="rectangular" width="100%" />
                          </LazyImage>
                        </CardActionArea>
                      </Grid>

                      <Grid item xs={12} md={8}>
                        <Stack spacing={1} sx={{ pl: 2 }}>
                          <Skeleton width="30%" />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton width="60%" />
                        </Stack>
                      </Grid>
                    </Grid>
                  ))
              }
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AlphaContent
