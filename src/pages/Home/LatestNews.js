import React, { useRef, useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Grid,
  Skeleton,
  Link,
} from '@mui/material'
import { getFilteredArticles } from 'redux/modules/article/actions'
import { useDispatch, useSelector } from 'react-redux'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isPremium } from 'helpers'
import moment from 'moment'
import { LazyImage } from 'components/LazyImage'

const LatestNews = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getFilteredArticles({
      params: {
        page: 1,
        perPage: 6
      },
      body: {
        tags: ['crypto-school']
      },
      success: ({ data }) => {
        setData(data?.posts)
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
        Latest from Crypto School
      </Typography>

      <Box>
        <Grid container spacing={5} >
          <Grid item xs={12} md={7}>
            <Box ref={videoRef} >
              {
                (isLoading || data.length === 0)
                  ?
                  <Stack spacing={1}>
                    <Skeleton variant="rectangular" width="100%" height={300} />
                    <Skeleton width="150px" />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton />
                  </Stack>
                  :
                  <Stack spacing={1}>
                    <LazyImage src={data[0].featureImage} />

                    <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                      {data[0]?.primaryTag.name}
                      <Typography variant="subTitle4" sx={{ color: "#000", mx: 2 }}>&bull;</Typography>
                      <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                        {moment(Date.now()).diff(data[0].updatedAt, 'hours')} hours ago
                      </Typography>
                    </Typography>

                    <Typography variant="h2" sx={{ fontWeight: 500 }}>
                      <Link
                        component={'span'}
                        onClick={() => history.push(!currentUser && isPremium(data[0].tags) ? `/paywall` : `article/${data[0]?.id}`)}
                        underline="hover"
                        sx={{ color: "#232A45", fontSize: "32x", cursor: "pointer" }}
                      >
                        <ShowMoreText lines={2} expandByClick={false} more="">
                          {data[0].title}
                        </ShowMoreText>
                      </Link>
                    </Typography>

                    <Typography variant="subTitle" sx={{ color: "#858585" }}>
                      <ShowMoreText lines={2} expandByClick={false} more="">
                        {data[0].excerpt}
                      </ShowMoreText>
                    </Typography>
                  </Stack>
              }

            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box>
              <Stack direction="column" spacing={1.5} divider={<Divider />}>
                {
                  (isLoading || data.length === 0)
                    ?
                    [0, 1, 3].map((item, index) => {
                      return (
                        <Stack spacing={1} key={index}>
                          <Skeleton width="50px" />
                          <Skeleton />
                          <Skeleton width="60%" />
                        </Stack>
                      )
                    })
                    :
                    data.slice(1).map((item, index) => {
                      return (
                        <Stack key={index}>
                          <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                            {item?.primaryTag.name}
                          </Typography>
                          <Typography variant="subTitle3" sx={{ fontWeight: 500 }}>
                            <Link
                              component={'span'}
                              onClick={() => history.push(!currentUser && isPremium(item.tags) ? `/paywall` : `article/${item?.id}`)}
                              underline="hover"
                              sx={{ color: "#232A45", fontSize: "20x", cursor: "pointer" }}
                            >
                              <ShowMoreText lines={2} expandByClick={false} more="">
                                {item.title}
                              </ShowMoreText>
                            </Link>
                          </Typography>
                          <Typography variant="subTitle" sx={{ color: "#858585" }}>
                            <ShowMoreText lines={1} expandByClick={false} more="">
                              {item.excerpt}
                            </ShowMoreText>
                          </Typography>
                        </Stack>
                      )
                    })
                }
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}


export default LatestNews
