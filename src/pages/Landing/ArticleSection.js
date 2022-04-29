import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Typography,
  Card,
  Skeleton,
  Grid,
  Hidden,
} from '@mui/material'
import Slider from 'react-slick'
import { MButton } from 'components/CustomMaterial'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllArticles } from 'redux/modules/article/actions'
import { ArticleItem } from 'components/ArticleItem'

const ArticleSection = ({ id }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
    centerMode: true,
    arrows: false,
  }

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAllArticles({
      params: {
        page: 1,
        perPage: 3
      },
      success: ({ data }) => {
        setData(data?.posts)
        setIsLoading(false)
      },
      fail: () => {
      }
    }))
  }, [dispatch])

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ my: { md: 10, xs: 4 } }}
      id={id}
    >
      <Typography textAlign="center" fontSize={{ md: '40px', xs: '32px' }} color="#141414">
        In-Depth journals and articles
      </Typography>

      <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: 600, textAlign: "center" }}>
        Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
      </Typography>

      <Grid container>
        {
          (isLoading || data.length === 0)
            ?
            [0, 1, 2].map((value, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  <Card
                    variant="outlined"
                    sx={{ p: 2, mx: { md: 1 }, mb: { xs: 2 }, borderRadius: '8px' }}
                  >
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={250} />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Card>
                </Grid>
              )
            })
            :
            <>
              <Hidden mdDown>
                {data.map((post, index) => {
                  return (
                    <Grid item key={index} md={4}>
                      <Card
                        variant="outlined"
                        sx={{ p: 2, mx: 1, borderRadius: '8px' }}
                      >
                        <ArticleItem data={post} />
                      </Card>
                    </Grid>
                  )
                })}
              </Hidden>
            </>
        }
      </Grid>

      <Hidden mdUp>
        <Box sx={{ width: '100%' }}>
          <Slider {...settings}>
            {data.map((post, index) => {
              return (
                <Box
                  sx={{ p: 1, borderRadius: '8px' }}
                  key={index}
                >
                  <ArticleItem data={post} />
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Hidden>

      <Box sx={{ pt: 6 }}>
        <MButton
          variant='outlined'
          color='inherit'
          sx={{ fontSize: '16px', px: 2, color: '#555' }}
          onClick={() => history.push('/news/all')}
        >
          View more
        </MButton>
      </Box>
    </Stack >
  )
}

export default ArticleSection
