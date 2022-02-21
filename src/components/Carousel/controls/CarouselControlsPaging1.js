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
  padding: '0px',
  '& li': {
    width: 6,
    height: 6,
    borderRadius: 6,
    border: "1px solid #FFF",
    background: '#141414',
    margin: 4,
    cursor: 'pointer',
    '&.slick-active': {
      opacity: 1,
      '& .dotActive': {
        width: 6,
        height: 6,
        borderRadius: 6,
        background: '#FFF',
      }
    }
  }
})

const DotStyle = styled('span')(({ theme }) => ({
  width: 6,
  height: 6,
  borderRadius: 6,
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
        <RootStyle>{dots}</RootStyle>
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
