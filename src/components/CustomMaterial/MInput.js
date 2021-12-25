import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { styled, makeStyles } from '@mui/styles'
import {
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'


const useStyles = makeStyles(theme => ({
  error: {
    border: '1px solid #FA0101 !important',
  },
  helperText: {
    fontSize: '14px',
    color: '#FA0101',
    margin: '0px',
    textAlign: 'left',
    marginBottom: theme.spacing(1.5),
  },
  labelText: {
    float: 'left',
    fontSize: '16px',
    color: '#555555',
    marginBottom: theme.spacing(0.5),
  },
}))

const InputStyle = styled(Input)(({ theme, styleProps }) => {
  return {
    width: '100%',
    padding: '0px 16px',
    border: '1px solid #EAEAEA',
    borderRadius: '4px',
    color: '#858585',
    fontSize: '16px',
    height: '48px',
    background: 'white',
  }
})

// ---------------------------------------- ------------------------------

const MInput = forwardRef(
  ({ type = 'text', error, label, children, ...other }, ref) => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)

    return (
      <>
        {
          label &&
          <p className={classes.labelText}>{label}</p>
        }
        <InputStyle
          ref={ref}
          type={showPassword ? 'text' : type}
          disableUnderline
          className={error && classes.error}
          endAdornment={
            type === 'password' &&
            <InputAdornment position='end'>
              <IconButton size='small' onClick={e => setShowPassword(prev => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          {...other}
        >
          {children}
        </InputStyle>
        {
          error &&
          <p className={classes.helperText}>{error}</p>
        }
      </>
    )
  }
)

MInput.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
}

export default MInput
