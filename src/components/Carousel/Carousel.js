import React, { useRef, useMemo } from 'react'
import Slider from 'react-slick'
import { useTheme } from '@mui/styles'
import { Box, Hidden, Typography, Stack } from '@mui/material'
import { CarouselControlsPaging1, CarouselControlsPaging2 } from './controls'

const CarouselItem = ({ item, itemStyle }) => {
  const { image, title, description } = item
  const { imageStyle, titleStyle, descriptionStyle } = itemStyle

  return (
    <Box sx={{ width: '100%', objectFit: 'cover', textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ ...imageStyle }}>
          <img src={image} alt='' style={{ width: "100%", margin: "auto" }} />
        </Box>
      </Stack>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subTitle" sx={{ ...titleStyle }}>{title}</Typography>
      </Box>
      <Hidden mdDown>
        <Typography variant="subTitle" sx={{ ...descriptionStyle }}>{description}</Typography>
      </Hidden>
    </Box>
  )
}

const Carousel = ({ data, style, pagingStyle }) => {
  const theme = useTheme()
  const carouselRef = useRef()

  const carouselController = useMemo(() => {
    switch (pagingStyle) {
      case "circle":
        return CarouselControlsPaging1({
          sx: { mt: { md: 4, xs: 10 } }
        })
      default:
        return CarouselControlsPaging2({
          sx: { mt: 3 }
        })
    }
  }, [pagingStyle])

  const settings = {
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'), ...carouselController
  }

  return (
    <Box>
      <Slider ref={carouselRef} {...settings} >
        {data.map((item) => (
          <CarouselItem key={item.title} item={item} itemStyle={style} />
        ))}
      </Slider>
    </Box>
  )

}

export default Carousel