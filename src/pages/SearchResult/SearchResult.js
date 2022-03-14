import React, { useState, useEffect } from 'react'
import { styled } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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
import { MDropdown } from 'components/CustomMaterial'
import CoinNews from 'components/CoinNews'
import NoResults from 'components/NoResults'

import { getFilteredArticles } from 'redux/modules/article/actions'
import { getFilteredVideos } from 'redux/modules/video/actions'
import { filteredArticleSelector } from 'redux/modules/article/selectors'
import { filteredVideosSelector } from 'redux/modules/video/selectors'

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
  const dispatch = useDispatch()
  const filteredArticles = useSelector(filteredArticleSelector)
  const filteredVideos = useSelector(filteredVideosSelector)
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [currentTab, setCurrentTab] = useState('all')
  const [filteredResult, setFilteredResult] = useState([])
  const [searchString, setSearchString] = useState('')

  const sortByItems = [
    { text: 'Newest', value: 'desc' },
    { text: 'Oldest', value: 'asc' },
    { text: '4 star or more', value: '4' },
    { text: '3 star or more', value: '3' },
    { text: '2 star or more', value: '2' },
  ]

  const defaultText = sortByItems.find(item => item.value === defaultLabel) ?
    sortByItems.find(item => item.value === defaultLabel).text : 'Sort By'

  useEffect(() => {
    let posts = []
    filteredArticles.map((item) => {
      const { featureImage, primaryTag, title, id, excerpt, updatedAt } = item

      return posts.push({
        id,
        featureImage,
        tagName: primaryTag.name,
        title,
        excerpt,
        updatedAt
      })
    })

    filteredVideos.map(item => {
      const { id, attributes } = item

      return posts.push({
        id,
        featureImage: attributes.thumbnail.url,
        tagName: 'Videos',
        title: attributes.title,
        excerpt: attributes.description,
        updatedAt: Date.now()
      })
    })
    setFilteredResult(posts)
  }, [filteredArticles, filteredVideos])

  useEffect(() => {
    dispatch(getFilteredArticles({
      body: {
        tags: [
          'news',
        ]
      },
      params: {
        searchString: searchString,
        order: defaultLabel
      },
    }))

    dispatch(getFilteredVideos({
      params: {
        search: searchString,
        order: defaultLabel
      },
    }))
  }, [defaultLabel, dispatch, searchString])

  useEffect(() => {
    setSearchString(location.search.slice(1, location.search.length))
  }, [location.search])

  return (
    <Container maxWidth="xl">
      <Box sx={{ background: '#FAFAFA', px: { md: 5 }, py: 4 }}>
        <Box>
          <Hidden mdDown>
            <Typography
              variant="subTitle1"
              color="#000"
            >
              Search results for "{searchString}"
            </Typography>
          </Hidden>

          <Stack direction="row" sx={{ pt: 2 }} spacing={2}>
            <SearchBox placeholder="Search Coins" value={searchString} onChange={setSearchString} />
            <MDropdown items={sortByItems} label={defaultText} onChange={(text) => setDefaultLabel(text)} />
          </Stack>
        </Box>
      </Box>

      {filteredResult.length === 0 ?
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
            {currentTab === 'all' &&
              <CoinNews
                data={filteredResult}
                isGlobalSearch={true}
              />
            }
            {currentTab === 'news' &&
              <CoinNews
                data={filteredResult.filter(item => item.tagName !== 'Videos')}
                isGlobalSearch={true}
              />
            }
            {currentTab === 'alpha' &&
              <CoinNews isGlobalSearch={true} />
            }
            {currentTab === 'crypto_school' &&
              <CoinNews
                data={filteredResult.filter(item => item.tagName === 'Videos')}
                isGlobalSearch={true}
              />
            }
          </Box>
        </Box>
      }
    </Container>
  )
}

export default SearchResult
