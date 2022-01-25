import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Typography,
  Skeleton,
  Grid,
  Link,
} from '@mui/material'
import { getFeaturedArticles } from 'redux/modules/article/actions'
import { useDispatch, useSelector } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isPremium } from 'helpers'
import { MButton } from 'components/CustomMaterial'

const FeaturedNews = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [featuredNews, setFeaturedNews] = useState([])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getFeaturedArticles({
      params: {
        page: 1,
        perPage: 3
      },
      success: ({ data }) => {
        setFeaturedNews(data?.posts)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch])

  return (
    <Stack spacing={4}>
      <Typography variant="h4" sx={{ fontWeight: 500 }} >
        Featured News
      </Typography>

      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              {
                (isLoading || featuredNews.length === 0) ?
                  <Skeleton variant="rectangular" width="100%" height={250} />
                  :
                  <Box sx={{ background: "#F5F5F5", minHeight: "250px" }}>
                    <LazyLoadImage
                      alt=""
                      effect="blur"
                      width="100%"
                      src={featuredNews[0].featureImage}
                    />
                  </Box>
              }
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              spacing={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%", width: "100%", textAlign: "center" }}
            >
              {
                (isLoading || featuredNews.length === 0) ?
                  <>
                    <Skeleton width="100px" />
                    <Skeleton width="100%" />
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                  </>
                  :
                  <>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                        NFT
                        <Typography variant="subTitle4" sx={{ color: "#858585", ml: 3 }}>
                          1 hour ago
                        </Typography>
                      </Typography>
                    </Box>

                    <Box sx={{ width: "100%" }} >
                      <Typography variant="h2" sx={{ fontWeight: 500 }}>
                        <Link
                          component={'span'}
                          onClick={() =>
                            history.push(!currentUser && isPremium(featuredNews[0].tags) ? `/paywall` : `article/${featuredNews[0]?.id}`)
                          }
                          underline="hover"
                          sx={{ color: "#232A45", fontSize: "32x", cursor: "pointer" }}
                        >
                          <ShowMoreText lines={2} expandByClick={false} more="">
                            {featuredNews[0].title}
                          </ShowMoreText>
                        </Link>
                      </Typography>
                    </Box>
                    <Box sx={{ width: "100%" }} >
                      <Typography variant="subTitle" sx={{ color: "#858585" }}>
                        <ShowMoreText lines={2} expandByClick={false} more="">
                          {featuredNews[0].excerpt}
                        </ShowMoreText>
                      </Typography>
                    </Box>
                  </>
              }
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container spacing={4}>
          {
            (isLoading || featuredNews.length !== 3)
              ?
              [0, 1, 2].map((value, index) => {
                return (
                  <Grid item key={index} xs={12} md={4}>
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={220} />
                      <Skeleton width="100px" />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Grid>
                )
              })
              :
              featuredNews.map((post, index) => {
                return (
                  <Grid item key={index} xs={12} md={4}>
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={220} />
                      <Skeleton width="50px" />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Grid>
                )
              })
          }
        </Grid>
      </Box>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ pt: 2 }}>
          <MButton
            variant='outlined'
            color='inherit'
            sx={{ fontSize: '16px', px: 2, color: '#858585', background: "#FFF" }}
            onClick={() => history.push('/news')}
          >
            View all news
          </MButton>
        </Box>
      </Stack>
    </Stack>

  )
}

export default FeaturedNews
