import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { styled } from '@mui/styles'
import { Button } from '@mui/material'

// ----------------------------------------------------------------------

const ButtonStyle = styled(Button)(({ theme, styleProps }) => {
  return {
    textTransform: 'none !important',
    fontWeight: '400 !important',
  }
})

// ----------------------------------------------------------------------

const MButton = forwardRef(
  ({ color = 'primary', variant = 'text', children, ...other }, ref) => {

    return (
      <ButtonStyle
        ref={ref}
        color={color}
        variant={variant}
        disableElevation
        {...other}
      >
        {children}
      </ButtonStyle>
    )
  }
)

MButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'black',
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['contained', 'outlined', 'text']),
    PropTypes.string
  ])
}

export default MButton
