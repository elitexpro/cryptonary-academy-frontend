import React from 'react'
import {
  Drawer,
  Modal,
  Hidden,
  Box,
} from '@mui/material'
import FilterContent from './FilterContent'

const Filter = ({ open, onClose }) => {

  return (
    <Box>
      <Hidden mdUp>
        <Modal open={open}>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -100%)',
              width: '100%',
              border: 'none',
            }}
          >
            <FilterContent onClick={onClose} />
          </Box>
        </Modal>
      </Hidden>

      <Hidden mdDown>
        <Drawer anchor="right" open={open} onClose={onClose}>
          <FilterContent onClick={onClose} />
        </Drawer>
      </Hidden>
    </Box>
  )
}

export default Filter
