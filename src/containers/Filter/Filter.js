import React from 'react'
import {
  Drawer,
  Dialog,
  Hidden,
  Box,
} from '@mui/material'
import FilterContent from './FilterContent'

const Filter = ({ open, onClose }) => {

  return (
    <Box>
      <Hidden mdUp>
        <Dialog open={open} onClose={onClose} fullWidth>
          <FilterContent onClick={onClose} />
        </Dialog>
      </Hidden>

      <Hidden mdDown>
        <Drawer anchor="right" open={open} onClose={onClose}>
          <FilterContent onClick={onClose}/>
        </Drawer>
      </Hidden>
    </Box>
  )
}

export default Filter
