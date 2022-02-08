import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Typography,
  Skeleton,
  Grid,
  Link,
  Divider,
} from '@mui/material'
import { getFeaturedArticles } from 'redux/modules/article/actions'
import { useDispatch, useSelector } from 'react-redux'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isPremium } from 'helpers'
import moment from 'moment'
import { LazyImage } from 'components/LazyImage'

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
    <Stack spacing={3}>
      <Typography variant="h4" sx={{ fontWeight: 500 }} >
        Featured News
      </Typography>

      <Divider sx={{ background: "#141414" }} />

      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              {
                (isLoading || featuredNews.length === 0) ?
                  <Skeleton variant="rectangular" width="100%" height={250} />
                  :
                  <LazyImage src={featuredNews[0].featureImage} />
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
                        {featuredNews[0]?.primaryTag.name}
                        <Typography variant="subTitle4" sx={{ color: "#000", mx: 2 }}>&bull;</Typography>
                        <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                          {moment(Date.now()).diff(featuredNews[0].updatedAt, 'hours')} hours ago
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
    </Stack>
  )
}

export default FeaturedNews
