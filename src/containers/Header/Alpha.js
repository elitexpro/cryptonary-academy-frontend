import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'
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
import { getLatestAlphaList } from 'redux/modules/alpha/actions'

const Alpha = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [openAlpha, setOpenAlpha] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAlphaToggle = (e) => {
    setOpenAlpha(prev => prev + 1)
    setAnchorEl(e.currentTarget)
  }

  useEffect(() => {
    setIsLoading(true)
    dispatch(getLatestAlphaList({
      params: {
        perPage: 2,
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch])

  return (
    <>
      <MButton
        color='inherit'
        sx={{ color: '#858585', fontSize: '16px' }}
        endIcon={<KeyboardArrowDownRounded />}
        onMouseEnter={handleAlphaToggle}
        onMouseLeave={() => setOpenAlpha(prev => prev - 1)}
      >
        Alpha
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
                <AlphaContent isLoading={isLoading} />
              </Box>
            </Paper>
          </Fade >
        )}
      </Popper>
    </>
  )
}

export default Alpha
