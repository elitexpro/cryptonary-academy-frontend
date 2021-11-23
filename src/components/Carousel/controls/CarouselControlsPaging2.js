import React from 'react'
import PropTypes from 'prop-types'
// material
import { styled } from '@mui/styles'
import { Box } from '@mui/material'

// ----------------------------------------------------------------------

const RootStyle = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'center',
  '& li': {
    width: 40,
    height: 4,
    borderRadius: 8,
    background: '#EAEAEA',
    margin: 4,
    cursor: 'pointer',
    '&.slick-active': {
      opacity: 1,
      '& .dotActive': {
        width: 40,
        height: 4,
        borderRadius: 8,
        background: '#62BE5F',
      }
    }
  }
})

const DotStyle = styled('span')(({ theme }) => ({
  width: 40,
  height: 4,
  borderRadius: 8,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.easeInOut,
    duration: 360
  })
}))

// ----------------------------------------------------------------------

CarouselControlsPaging2.propTypes = {
  color: PropTypes.string
}

export default function CarouselControlsPaging2({ color, ...other }) {
  return {
    appendDots: (dots) => (
      <>
        <RootStyle {...other}>{dots}</RootStyle>
      </>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <DotStyle
          className="dotActive"
          sx={{
            bgcolor: color || 'primary.main'
          }}
        />
      </Box>
    )
  }
}
