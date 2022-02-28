import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Box,
  Typography,
  Stack,
  Tabs,
  Tab,
  Hidden,
  Container,
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MDropBox } from 'components/CustomMaterial'
import CoinNews from 'components/CoinNews'
import NoResults from 'components/NoResults'

import { filteredPostsSelector } from 'redux/modules/global/selectors'

const CustomTab = styled(Tab)(() => {
  return {
    textTransform: 'none !important',
    fontSize: 14,
    fontWeight: 400,
    minWidth: 120,
    maxWidth: 200
  }
})

const SearchResult = () => {
  const location = useLocation()
  const posts = useSelector(filteredPostsSelector)
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [currentTab, setCurrentTab] = useState('all')

  const sortByItems = [
    { text: 'Newest', value: 'newest' },
    { text: 'Oldest', value: 'oldest' },
    { text: '4 star or more', value: '4star' },
    { text: '3 star or more', value: '3star' },
    { text: '2 star or more', value: '2star' },
  ]

  return (
    <Container maxWidth="xl">
      <Box sx={{ background: '#FAFAFA', px: { md: 5 }, py: 4 }}>
        <Box>
          <Hidden mdDown>
            <Typography
              variant="subTitle1"
              color="#000"
            >
              Search results for "{location.search.slice(1, location.search.length)}"
            </Typography>
          </Hidden>

          <Stack direction="row" sx={{ pt: 2 }} spacing={2}>
            <SearchBox placeholder="Search Coins" />
            <MDropBox items={sortByItems} label={defaultLabel} onChange={(text) => setDefaultLabel(text)} />
          </Stack>
        </Box>
      </Box>

      {posts.length === 0 ?
        <NoResults />
        :
        <Box sx={{ px: { md: 5 }, py: 4 }}>
          <Tabs
            value={currentTab}
            onChange={(e, value) => setCurrentTab(value)}
            textColor="inherit"
            variant="fullWidth"
            sx={{ borderBottom: '1px solid #EAEAEA' }}
            TabIndicatorProps={{
              style: {
                background: "#4AAF47",
                height: 1
              }
            }}
          >
            <CustomTab label="All" value="all" />
            <CustomTab label="News" value="news" />
            <CustomTab label="Alpha" value="alpha" />
            <CustomTab label="Crypto School" value="crypto_school" />
          </Tabs>

          <Box sx={{ mt: 4 }}>
            {currentTab === 'all' && <CoinNews data={posts} isGlobalSearch={true} />}
            {currentTab === 'news' && <CoinNews data={posts.filter(item => item)} isGlobalSearch={true} />}
            {currentTab === 'alpha' && <CoinNews data={posts.filter(item => !item)} isGlobalSearch={true} />}
            {currentTab === 'crypto_school' && <CoinNews isGlobalSearch={true} />}
          </Box>
        </Box>
      }
    </Container>
  )
}

export default SearchResult
