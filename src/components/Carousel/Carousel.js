import React, { useRef } from 'react'
import Slider from 'react-slick'
// material
import {
  useTheme,
  styled
} from '@mui/styles'
import { Box } from '@mui/material'
import {
  CarouselControlsPaging2,
} from './controls'
import sliderImg from 'assets/image/slider.png'


const CAROUSELS = [...Array(3)].map((_, index) => {
  return {
    title: 'Tailored to power your learning',
    description: '121221',
    image: sliderImg
  }
})

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .slick-track': {
    display: 'flex',
  }
}))


function CarouselItem({ item }) {
  const { image, title } = item

  return (
    <Box sx={{ width: '100%', height: 480, objectFit: 'cover', textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <p>We’re excited to start delivering you insightful crypto knowledge.
        Answer a few questions to help us recommend personalized content to you.</p>
    </Box>
  )
}


const Carousel = () => {
  const theme = useTheme()
  const carouselRef = useRef()

  const settings = {
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselControlsPaging2({
      sx: { mt: 3 }
    })
  }

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings} >
        {CAROUSELS.map((item) => (
          <CarouselItem key={item.title} item={item} />
        ))}
      </Slider>
    </RootStyle>
  )

}

export default Carousel