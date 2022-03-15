import React from 'react'
import {
  Stack,
  Typography,
  Grid,
  Box,
  Hidden,
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MDropdown } from 'components/CustomMaterial'

const SORTBY_ITEMS = [
  { text: 'Newest', value: 'desc' },
  { text: 'Oldest', value: 'asc' },
  { text: '4 star or more', value: '4' },
  { text: '3 star or more', value: '3' },
  { text: '2 star or more', value: '2' },
]

const HeroSection = ({ defaultLabel, setDefaultLabel, searchString, setSearchString }) => {
  const sortLabel = SORTBY_ITEMS.find(item => item.value === defaultLabel) ?
    SORTBY_ITEMS.find(item => item.value === defaultLabel).text : 'Sort By'

  return (
    <Grid container sx={{ mt: 4 }}>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant="h4" color="#141414" fontWeight={500}>Research Reports</Typography>
          <Typography variant="subTitle" color="#555">
            Insights into the biggest events shaping the crypto industry.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={2} sx={{ mt: { md: 0, xs: 2 } }}>
          <Hidden mdDown>
            <Box sx={{ flexGrow: 1 }} />
          </Hidden>
          <SearchBox placeholder="Search in Research reports" value={searchString} onChange={setSearchString} />
          <MDropdown items={SORTBY_ITEMS} label={sortLabel} onChange={setDefaultLabel} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default HeroSection
