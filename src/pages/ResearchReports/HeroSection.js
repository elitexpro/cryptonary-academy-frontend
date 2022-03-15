import React from 'react'
import {
  Stack,
  Typography,
  Grid,
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MDropdown } from 'components/CustomMaterial'

const sortByItems = [
  { text: 'Newest', value: 'desc' },
  { text: 'Oldest', value: 'asc' },
  { text: '4 star or more', value: '4' },
  { text: '3 star or more', value: '3' },
  { text: '2 star or more', value: '2' },
]

const HeroSection = ({ defaultLabel, setDefaultLabel, searchString, setSearchStrinhg }) => {
  const defaultText = sortByItems.find(item => item.value === defaultLabel) ?
    sortByItems.find(item => item.value === defaultLabel).text : 'Sort By'

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
        <Stack direction="row" spacing={2}>
          <SearchBox placeholder="Search in Research reports" value={searchString} onChange={setSearchStrinhg} />
          <MDropdown items={sortByItems} label={defaultText} onChange={(text) => setDefaultLabel(text)} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default HeroSection
