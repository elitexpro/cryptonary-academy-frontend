import React, { useState } from 'react'
import {
  Hidden,
  Box,
  Divider,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { SearchBox } from 'components/SearchBox'
import { Filter } from 'containers/Filter'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { FiSliders } from 'react-icons/fi'

const FilterBar = () => {
  const [filterDrawer, setFilterDrawer] = useState(false)

  const toggleDrawer = (open) => (event) => {
    setFilterDrawer(open)
  }

  return (
    <Box sx={{ mt: { xs: 4, md: 5 } }}>
      <Stack direction="row">
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
          startIcon={<FiSliders sx={{ fontSize: '24px', color: '#000' }} />}
          onClick={toggleDrawer(true)}
        >
          All Filters
        </MButton>

        <Filter open={filterDrawer} onClose={toggleDrawer(false)} />
      </Stack>

      <Divider sx={{ my: 3 }} />
    </Box>
  )
}

export default FilterBar
