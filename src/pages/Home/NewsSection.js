import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Skeleton,
  Typography,
} from '@mui/material'
import Slider from 'react-slick'
import { getFilteredArticles } from 'redux/modules/article/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MButton } from 'components/CustomMaterial'
import { ArticleItem } from 'components/ArticleItem'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
}

const NewsSection = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getFilteredArticles({
      params: {
        page: 1,
      },
      body: {
        tags: ['news']
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
    <Stack spacing={3}>
      <Typography variant="h4" sx={{ fontWeight: 500 }} >
        Latest Research
      </Typography>

      <Box>
        <Slider {...settings}>
          {
            (isLoading || data.length === 0)
              ?
              [0, 1, 2].map((value, index) => {
                return (
                  <Stack spacing={1} key={index} sx={{ p: 1 }}>
                    <Skeleton variant="rectangular" width="100%" height={220} />
                    <Skeleton width="100px" />
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Stack>
                )
              })
              :
              data.map((post, index) => {
                return (
                  <Box sx={{ p: 1 }} key={index}>
                    <ArticleItem data={post} />
                  </Box>
                )
              })
          }
        </Slider>
      </Box>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <MButton
          variant='outlined'
          color='inherit'
          sx={{ fontSize: '16px', px: 2, color: '#858585', background: "#FFF" }}
          onClick={() => history.push('/news/all')}
        >
          View all news
        </MButton>
      </Stack>
    </Stack >

  )
}

export default NewsSection
