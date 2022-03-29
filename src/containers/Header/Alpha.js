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
  KeyboardArrowUpRounded
} from '@mui/icons-material'
import AlphaContent from './AlphaContent'
import EducationContent from './EducationContent'
import { getLatestAlphaList } from 'redux/modules/alpha/actions'

const Alpha = ({ text }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [openAlpha, setOpenAlpha] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAlphaToggle = (e) => {
    setOpenAlpha(true)
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
        sx={{ color: openAlpha ? '#4AAF47' : '#858585', fontSize: '16px' }}
        endIcon={openAlpha ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
        onMouseEnter={handleAlphaToggle}
        onMouseLeave={() => setOpenAlpha(false)}
        onClick={() => {
          if (text === 'Education') {
            setOpenAlpha(false)
            history.push('/education/all')
          }
        }}
      >
        {text}
      </MButton>

      <Popper
        open={openAlpha}
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
              onMouseEnter={() => setOpenAlpha(true)}
              onMouseLeave={() => setOpenAlpha(false)}
            >
              <Box>
                <Divider sx={{ background: "#c3c3c3" }} />
                {text === 'Education' ?
                  <EducationContent isLoading={isLoading} setOpenAlpha={setOpenAlpha} />
                  :
                  <AlphaContent isLoading={isLoading} setOpenAlpha={setOpenAlpha} />
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
