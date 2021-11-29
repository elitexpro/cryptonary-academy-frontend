import React, { useState } from 'react'
import {
  Hidden,
  Box,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { SearchBox } from 'components/SearchBox'
import { Filter } from 'containers/Filter'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'

const FilterBar = () => {
  const [filterDrawer, setFilterDrawer] = useState(false)

  const toggleDrawer = (open) => (event) => {
    setFilterDrawer(open)
  }

  return (
    <>
      <Box sx={{ px: { xs: 1, md: 5 }, py: { xs: 2, md: 5 } }}>
        <Box sx={{ display: 'flex', mb: 4 }}>
          <SearchBox />

          <Hidden mdDown>
            <MButton
              color='inherit'
              variant='outlined'
              sx={{ ml: 2, px: 2, color: '#555', borderColor: '#EAEAEA' }}
              endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: '24px' }} />}
            >
              Difficulty Level
            </MButton>
            <MButton
              color='inherit'
              variant='outlined'
              sx={{ ml: 2, px: 2, color: '#555', borderColor: '#EAEAEA' }}
              endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: '24px' }} />}
            >
              Media Type
            </MButton>
          </Hidden>

          <Box sx={{ flexGrow: 1 }} />

          <MButton
            color='inherit'
            sx={{ ml: 2, px: 2, color: '#000', borderColor: '#EAEAEA', backgroundColor: '#F6F8FE', minWidth: '120px' }}
            startIcon={<TuneRoundedIcon sx={{ fontSize: '24px', color: '#000', transform: "rotate(90deg)" }} />}
            onClick={toggleDrawer(true)}
          >
            All Filters
          </MButton>

          <Filter open={filterDrawer} onClose={toggleDrawer(false)} />
        </Box>

        <Divider />
      </Box>
    </>
  )
}

export default FilterBar
