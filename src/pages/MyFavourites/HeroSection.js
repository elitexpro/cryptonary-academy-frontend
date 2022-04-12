import React from 'react'
import {
  Stack,
  Typography,
  Grid,
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MDropdown } from 'components/CustomMaterial'

const SORTBY_ITEMS = [
  { text: 'Newest', value: 'newest' },
  { text: 'Oldest', value: 'oldest' },
  { text: 'Title A - Z', value: 'asc' },
  { text: 'Title Z - A', value: 'desc' },
  { text: 'Most Popular', value: 'popularity' },
]

const HeroSection = ({ searchString, setSearchString, defaultLabel, setDefaultLabel }) => {
  const sortLabel = SORTBY_ITEMS.find(item => item.value === defaultLabel) ?
    SORTBY_ITEMS.find(item => item.value === defaultLabel).text : 'Sort By'

  return (
    <Grid container sx={{ my: 4 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="#141414">My Favorites</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={2} sx={{ mt: { md: 0, xs: 2 } }} justifyContent="flex-end">
          <SearchBox placeholder="Search in your favorites" value={searchString} onChange={setSearchString} />
          <MDropdown items={SORTBY_ITEMS} label={sortLabel} onChange={setDefaultLabel} />
        </Stack>
      </Grid>
    </Grid >
  )
}

export default HeroSection
