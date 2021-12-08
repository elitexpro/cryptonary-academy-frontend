import React, { useState } from 'react'
import {
  Box,
  Menu,
  Fade,
  MenuItem,
} from '@mui/material'
import MButton from './MButton'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const MButtonMenu = ({ menuData }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <MButton
        color='inherit'
        variant='outlined'
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ px: 2, color: '#555', borderColor: '#EAEAEA', height: '100%', minWidth: 155 }}
        endIcon={!open ? <MdKeyboardArrowDown sx={{ fontSize: '24px' }} /> : <MdKeyboardArrowUp sx={{ fontSize: '24px' }} />}
      >
        {menuData.category}
      </MButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            minWidth: 155
          }
        }}
      >
        {
          menuData.data.map((page, index) => (
            <MenuItem onClick={handleClose} key={index}>{page.name}</MenuItem>
          ))
        }
      </Menu>
    </Box>
  )
}

export default MButtonMenu
