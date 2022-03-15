import React, { useState } from 'react'
import {
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Box
} from '@mui/material'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { MButton } from 'components/CustomMaterial'

const MDropdown = ({ items, label, onChange, buttonStyle, dropboxStyle, layoutStyle }) => {
  const [openTopic, setOpenTopic] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleToggle = (e) => {
    setOpenTopic(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <MButton
        color='inherit'
        variant='outlined'
        onClick={handleToggle}
        sx={{ ml: 2, px: 2, color: '#555', borderColor: '#EAEAEA', ...layoutStyle }}
        endIcon={!openTopic ? <ArrowDownIcon sx={{ fontSize: '28px' }} /> : <ArrowUpIcon sx={{ fontSize: '28px' }} />}
      >
        <Box sx={{ width: '100px', fontSize: '14px', ...buttonStyle }}>
          {label}
        </Box>
      </MButton>

      <Popper
        open={openTopic}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom-end'
        style={{
          zIndex: '1102',
          width: '150px',
          ...dropboxStyle
        }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper sx={{ border: '1px solid #EAEAEA', mt: 0.5 }} elevation={3}>
              <ClickAwayListener onClickAway={() => setOpenTopic(false)}>
                <MenuList autoFocusItem={openTopic}>
                  {
                    items && items.map((item, key) => {
                      const { text, value } = item

                      return (
                        <MenuItem
                          key={key}
                          sx={{ fontSize: '14px' }}
                          onClick={() => {
                            onChange && onChange(value)
                            setOpenTopic(false)
                          }}
                        >
                          {text}
                        </MenuItem >
                      )
                    })
                  }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default MDropdown
