import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Popper,
  Fade,
  Paper,
  Box,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import {
  KeyboardArrowDownRounded,
} from '@mui/icons-material'
import AlphaContent from './AlphaContent'
import EducationContent from './EducationContent'
import { getLatestAlphaList } from 'redux/modules/alpha/actions'

const Alpha = ({ text }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [openAlpha, setOpenAlpha] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAlphaToggle = (e) => {
    setOpenAlpha(prev => prev + 1)
    setAnchorEl(e.currentTarget)
  }

  useEffect(() => {
    setIsLoading(true)
    text === 'Alpha' && dispatch(getLatestAlphaList({
      params: {
        perPage: 2,
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, text])

  return (
    <>
      <MButton
        color='inherit'
        sx={{ color: '#858585', fontSize: '16px' }}
        endIcon={<KeyboardArrowDownRounded />}
        onMouseEnter={handleAlphaToggle}
        onMouseLeave={() => setOpenAlpha(prev => prev - 1)}
        onClick={() => text === 'Education' && history.push('/education')}
      >
        {text}
      </MButton>

      <Popper
        open={openAlpha > 0}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom'
        className={classes.alphaPoper}
      >
        {({ TransitionProps }) => (
          <Fade  {...TransitionProps}>
            <Paper
              elevation={0}
              onMouseEnter={() => setOpenAlpha(prev => prev + 1)}
              onMouseLeave={() => setOpenAlpha(prev => prev - 1)}
            >
              <Box>
                <Divider sx={{ background: "#c3c3c3" }} />
                {text === 'Education' ?
                  <EducationContent isLoading={isLoading} />
                  :
                  <AlphaContent isLoading={isLoading} />
                }
              </Box>
            </Paper>
          </Fade >
        )}
      </Popper>
    </>
  )
}

export default Alpha
