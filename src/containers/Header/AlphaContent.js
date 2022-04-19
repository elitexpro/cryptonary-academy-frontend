import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  Box,
  Grid,
  Divider,
  Stack,
  Typography,
  Skeleton,
  CardActionArea,
  Container,
} from '@mui/material'
import { latestAlphaSelector } from 'redux/modules/alpha/selectors'
import { LazyImage } from 'components/LazyImage'
import { HorizontalArticleItem } from 'components/ArticleItem'

const AlphaContent = ({ isLoading, openAlpha, setOpenAlpha }) => {
  const history = useHistory()
  const latestAlphaList = useSelector(latestAlphaSelector)

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 5, px: 10, background: "#FCFCFC" }}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <Stack
              spacing={1}
              sx={{
                '&:hover': {
                  background: '#fff',
                  p: 2,
                  m: -2,
                  cursor: 'pointer',
                }
              }}
              onClick={() => {
                history.push('/research-reports')
                setOpenAlpha(false)
              }}
            >
              <Typography variant="subTitle4" sx={{ color: "#555" }}>
                RESEARCH
              </Typography>
              <Divider />
              <Box sx={{ pt: 3, color: "#141414", fontWeight: 500, fontSize: "16px" }}>
                Research Reports
              </Box>
              <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                In crypto, opportunities are everywhere but the really great
                ones only show up every once in a while – we estimate ...
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack
              spacing={1}
              sx={{
                '&:hover': {
                  background: '#fff',
                  p: 2,
                  m: -2,
                  cursor: 'pointer',
                }
              }}
              onClick={() => {
                history.push('/analysis/technical-analysis')
                setOpenAlpha(false)
              }}
            >
              <Typography variant="subTitle4" sx={{ color: "#555" }}>
                ANALYSIS
              </Typography>

              <Divider />

              <Box sx={{ pt: 3, color: "#141414", fontWeight: 500, fontSize: "16px" }}>
                On-chain forensics
              </Box>

              <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                Quick Access to BTC related news
              </Typography>

              <Box sx={{ pt: 3, color: "#141414", fontWeight: 500, fontSize: "16px" }}>
                Weekly Technicals
              </Box>

              <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                Quick Access to BTC related news
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack spacing={2} sx={{ borderLeft: "1px solid #E4E4E4", ml: 6, pl: 6 }}>
              <Stack spacing={2} direction="row">
                <Typography variant="subTitle4" sx={{ color: "#555", p: 1 }}>
                  LATEST ALPHA
                </Typography>
                <Typography variant="subTitle4" sx={{ color: "#4AAF47", background: '#f0fff0', p: 1 }}>
                  MEMBERS EXCLUSIVE
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
    </Container >
  )
}

export default AlphaContent
