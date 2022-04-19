import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Grid,
  Link,
  CardActionArea,
  Container,
} from '@mui/material'
import { LazyImage } from 'components/LazyImage'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'

const FeaturedPodcast = () => {
  const history = useHistory()

  return (
    <Container sx={{ my: 4, pb: 5 }} maxWidth="xl">
      <Grid container spacing={5} >
        <Grid item xs={12} md={7}>
          <Box>
            <Stack spacing={1}>
              <Typography variant="h2" sx={{ fontWeight: 500 }} color="#F8B714" >
                Featured Podcast
              </Typography>

              <Divider sx={{ background: "#F8B714" }} />

              <CardActionArea onClick={() => history.push('#')} sx={{ pt: 2 }}>
                <LazyImage src={``} borderRadius={4} />
              </CardActionArea>

              <Typography variant="h2" sx={{ fontWeight: 500 }}>
                <Link
                  component={'span'}
                  onClick={() => history.push('#')}
                  underline="hover"
                  sx={{ color: "#FFF", fontSize: "32x", cursor: "pointer" }}
                >
                  <ShowMoreText lines={2} expandByClick={false} more="">
                    NFA Ep 4 | Nomad: The future of blockchain bridges
                  </ShowMoreText>
                </Link>
              </Typography>

              <Typography variant="subTitle" sx={{ color: "#FFF" }}>
                <ShowMoreText lines={2} expandByClick={false} more="">
                  In this episode of Non-Financial Advice, our podcast host Stan and researcher Eugene talk with Pranay Mohan,
                  founder of Nomad, a security-first cross-chain messaging…
                </ShowMoreText>
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={1}>
            <Stack direction='row' justifyContent="space-between">
              <Typography variant="h3" sx={{ fontWeight: 500 }} color="#FFF" >
                More Podcasts
              </Typography>

              <Typography variant="subTitle1" sx={{ fontWeight: 500 }} color="#F8B714" >
                All Podcasts
              </Typography>
            </Stack>

            <Divider sx={{ background: "#FFF" }} />

            <Stack spacing={3} divider={<Divider sx={{ background: '#FFF' }} />} sx={{ pt: 2 }}>
              {[0, 1, 3].map((item, index) => {
                return (
                  <Grid container key={index}>
                    <Grid item xs={12} md={4}>
                      <CardActionArea onClick={() => history.push('#')}>
                        <img src={``} alt="" />
                      </CardActionArea>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      <Stack>
                        <Typography variant="subTitle3" sx={{ fontWeight: 500 }}>
                          <Link
                            component={'span'}
                            onClick={() => history.push('#')}
                            underline="hover"
                            sx={{ color: "#FFF", fontSize: "20x", cursor: "pointer" }}
                          >
                            <ShowMoreText lines={2} expandByClick={false} more="">
                              A Deep Dive into DeFi Derivatives (CPRO)
                            </ShowMoreText>
                          </Link>
                        </Typography>

                        <Typography variant="subTitle4" sx={{ fontWeight: 100 }} color="#FFF">
                          <ShowMoreText lines={2} expandByClick={false} more="">
                            In this episode of the Cryptonary Podcast exclusively for Cryptonary Pro members, our host Stan talks…
                          </ShowMoreText>
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                )
              })}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container >
  )
}

export default FeaturedPodcast
