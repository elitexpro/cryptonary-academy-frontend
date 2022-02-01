import React, { useState } from 'react'
import useStyles from './styles.js'
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

const Alpha = () => {
  const classes = useStyles()
  const [openAlpha, setOpenAlpha] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleAlphaToggle = (e) => {
    setOpenAlpha(prev => prev + 1)
    setAnchorEl(e.currentTarget)
  }

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
                <AlphaContent />
              </Box>
            </Paper>
          </Fade >
        )}
      </Popper>
    </>
  )
}

export default Alpha
