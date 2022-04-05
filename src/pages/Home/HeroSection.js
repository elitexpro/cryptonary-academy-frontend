import React, { useRef, useState, useEffect, useMemo } from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Grid,
  Skeleton,
  Link,
  CardActionArea,
} from '@mui/material'
import Slider from 'react-slick'
import { getLatestNews } from 'redux/modules/article/actions'
import { useDispatch, useSelector } from 'react-redux'
import { LazyImage } from 'components/LazyImage'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isPremium } from 'helpers'
import moment from 'moment'
import ImgPremium from 'assets/image/premium-icon.png'
import { FiChevronRight } from 'react-icons/fi'

const HeroSection = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const url = useMemo(() => {
    if (data.length > 0) {
      return !currentUser && isPremium(data[0].tags) ? `/paywall` : `/article/${data[0]?.id}`
    }
  }, [currentUser, data])

  const hours = useMemo(() => {
    return moment(Date.now()).diff(data[0]?.updatedAt, 'hours')
  }, [data])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getLatestNews({
      params: {
        page: 1,
        perPage: 6
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
    <Box>
      <Box sx={{ background: '#141414', p: 2, mb: 4, borderRadius: '4px' }}>
        <Slider {...settings}>
          <Stack>
            <Typography variant="subTitle4" color="#4AAF47">Latest</Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography color="#fff">Crypto ratings guide is now live!</Typography>
              <FiChevronRight style={{ fontSize: '20px', color: '#4AAF47' }} />
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="subTitle4" color="#4AAF47">Latest1</Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography color="#fff">Crypto ratings guide is now live!</Typography>
              <FiChevronRight style={{ fontSize: '20px', color: '#4AAF47' }} />
            </Stack>
          </Stack>
        </Slider>
      </Box>

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
                  <CardActionArea onClick={() => history.push(url)}>
                    <LazyImage src={data[0].featureImage} borderRadius={4} />
                  </CardActionArea>
                  <Typography variant="subTitle4" sx={{ color: "#4AAF47" }}>
                    {data[0]?.primaryTag.name}
                    <Typography variant="subTitle4" sx={{ color: "#000", mx: 2 }}>&bull;</Typography>
                    <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                      {hours < 48 ? `${hours} hours ago` : moment(data[0].updatedAt).format('YYYY-MM-DD')}
                    </Typography>
                  </Typography>

                  <Typography variant="h2" sx={{ fontWeight: 500 }}>
                    <Link
                      component={'span'}
                      onClick={() => history.push(url)}
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
                    const item_hours = moment(Date.now()).diff(item?.updatedAt, 'hours')

                    return (
                      <Stack key={index}>
                        <Typography variant="subTitle4" sx={{ color: "#4AAF47", display: 'flex', mb: 1 }} alignItems="center">
                          {item.isPremium && <img src={ImgPremium} alt="" style={{ marginRight: '16px' }} />}
                          {item?.primaryTag.name}
                          <Typography variant="subTitle4" sx={{ color: "#000", mx: 2 }}>&bull;</Typography>
                          <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                            {item_hours < 48 ? `${item_hours} hours ago` : moment(item.updatedAt).format('YYYY-MM-DD')}
                          </Typography>
                        </Typography>
                        <Typography variant="subTitle3" sx={{ fontWeight: 500 }}>
                          <Link
                            component={'span'}
                            onClick={() => history.push(!currentUser && isPremium(item.tags) ? `/paywall` : `/article/${item?.id}`)}
                            underline="hover"
                            sx={{ color: "#232A45", fontSize: "20x", cursor: "pointer" }}
                          >
                            <ShowMoreText lines={2} expandByClick={false} more="">
                              {item.title}
                            </ShowMoreText>
                          </Link>
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
  )
}


export default HeroSection
