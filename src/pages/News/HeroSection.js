import React, { useMemo } from 'react'
import {
  Stack,
  Typography,
  Grid,
  Box,
  Hidden
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MDropdown, MTab } from 'components/CustomMaterial'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { newsSortBySelector, newsSearchValueSelector } from 'redux/modules/news/selectors'
import { setNewsTag, setNewsSortBy, setNewsSearchValue } from 'redux/modules/news/actions'

const SORTBY_ITEMS = [
  { text: 'Newest', value: 'newest' },
  { text: 'Oldest', value: 'oldest' },
  { text: 'Title A - Z', value: 'asc' },
  { text: 'Title Z - A', value: 'desc' },
  { text: 'Most Popular', value: 'popularity' },
]

const TAB_CONTENT = [
  { label: 'All News', value: 'all' },
  { label: 'Bitcoin', value: 'bitcoin-btc-news' },
  { label: 'Ethereum', value: 'ethereum-eth-news' },
  { label: 'Alt', value: 'altcoin-news' },
  { label: 'Defi', value: 'defi' },
  { label: 'Blockchain', value: 'blockchain-news' },
]

const HeroSection = ({ tab }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sortByValue = useSelector(newsSortBySelector)
  const searchString = useSelector(newsSearchValueSelector)
  const sortLabel = useMemo(() => {
    const sortByItem = SORTBY_ITEMS.find(item => item.value === sortByValue)
    return sortByItem ? sortByItem.text : 'Sort By'
  }, [sortByValue])

  const currentTabLabel = useMemo(() => {
    const currentTab = TAB_CONTENT.find(item => item.value === tab)
    return currentTab ? currentTab.label : 'All News'
  }, [tab])

  return (
    <>
      <Grid container sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <Typography variant="h4" color="#141414" fontWeight={500}>{currentTabLabel}</Typography>
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
            <SearchBox placeholder="Search in News" value={searchString} onChange={val => dispatch(setNewsSearchValue(val))} />
            <MDropdown items={SORTBY_ITEMS} label={sortLabel} onChange={(val) => dispatch(setNewsSortBy(val))} />
          </Stack>
        </Grid>
      </Grid >

      <MTab
        currentTab={tab}
        handleChange={(val) => {
          dispatch(setNewsTag(val))
          history.push(`/news/${val}`)
        }}
        items={TAB_CONTENT}
        tabStyle={{ mb: 6 }}
        itemStyle={{ fontSize: '16px !important', width: '180px !important' }}
      />
    </>
  )
}

export default HeroSection
