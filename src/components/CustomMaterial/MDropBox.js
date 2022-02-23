import React, { useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const MDropBox = ({ items, label, onChange }) => {
  const [openTopic, setOpenTopic] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleToggle = (e) => {
    setOpenTopic(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  return (
    <Box
      sx={{
        background: '#FCFCFC',
        border: '1px solid #E4E4E4',
        borderRadius: '4px',
        py: 1,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        zIndex: '1102'
      }}
      onClick={handleToggle}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
        <Typography variant="subTitle4" color="#909090" sx={{ minWidth: 100 }}>{label}</Typography>
        {!openTopic ? <FiChevronDown color='#A2A2A2' /> : <FiChevronUp color='#A2A2A2' />}
      </Stack>
      <Popper
        open={openTopic}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom-end'
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper sx={{ border: '1px solid #EAEAEA' }}>
              <ClickAwayListener onClickAway={() => setOpenTopic(false)}>
                <Box>
                  <List disablePadding>
                    {
                      items && items.map((item, key) => {
                        const { text } = item

                        return (
                          <ListItem disablePadding key={key} sx={{ borderBottom: key !== 5 && '1px solid #E4E4E4' }}>
                            <ListItemButton
                              onClick={() => {
                                onChange(text)
                                return setOpenTopic(false)
                              }}
                              sx={{ width: 140 }}
                            >
                              <Typography variant="subTitle4" sx={{ color: label === text ? '#555555' : '#909090' }}>{text}</Typography>
                            </ListItemButton>
                          </ListItem>
                        )
                      })
                    }
                  </List>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}

export default MDropBox
