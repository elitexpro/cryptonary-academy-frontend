import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Typography,
  Stack,
  Hidden,
  Container,
  Pagination,
  Grid,
  Skeleton,
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MDropdown, MTab } from 'components/CustomMaterial'
import CoinNews from './CoinNews'
import NoResults from 'components/NoResults'
import { Footer } from 'containers/Footer'

import { getFilteredArticles } from 'redux/modules/article/actions'
import { getFilteredVideos } from 'redux/modules/video/actions'
import { filteredArticleSelector, totalFilteredCountSelector } from 'redux/modules/article/selectors'
import { filteredVideosSelector } from 'redux/modules/video/selectors'

const TAB_CONTENT = [
  { label: 'All', value: 'all' },
  { label: 'News', value: 'news' },
  { label: 'Alpha', value: 'alpha' },
  { label: 'Crypto School', value: 'crypto_school' },
]

const SearchResult = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const filteredArticles = useSelector(filteredArticleSelector)
  const filteredVideos = useSelector(filteredVideosSelector)
  const totalFilteredArticlesCount = useSelector(totalFilteredCountSelector)
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [currentTab, setCurrentTab] = useState('all')
  const [filteredResult, setFilteredResult] = useState([])
  const [searchString, setSearchString] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const sortByItems = [
    { text: 'Newest', value: 'newest' },
    { text: 'Oldest', value: 'oldest' },
    { text: 'Title A - Z', value: 'asc' },
    { text: 'Title Z - A', value: 'desc' },
    { text: 'Most Popular', value: 'popularity' },
  ]

  const defaultText = sortByItems.find(item => item.value === defaultLabel) ?
    sortByItems.find(item => item.value === defaultLabel).text : 'Sort By'

  useEffect(() => {
    let posts = []
    filteredArticles.map((item) => {
      const { featureImage, primaryTag, title, id, excerpt, updatedAt, isBookmarked, bookmarkId } = item

      return posts.push({
        id,
        featureImage,
        tagName: primaryTag.name,
        title,
        excerpt,
        updatedAt,
        isBookmarked,
        bookmarkId
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
        updatedAt: attributes.updatedAt,
        isBookmarked: attributes?.isBookmarked,
        bookmarkId: attributes?.bookmarkId
      })
    })
    setFilteredResult(posts)
  }, [filteredArticles, filteredVideos])

  useEffect(() => {
    let tags = []
    switch (currentTab) {
      case 'all':
        tags = ['news', 'alpha', 'crypto-school']
        break
      case 'news':
        tags = ['news']
        break
      case 'alpha':
        tags = ['alpha']
        break
      case 'crypto_school':
        tags = ['crypto-school']
        break
      default:
        tags = []
        break
    }
    setIsLoading(true)
    dispatch(getFilteredArticles({
      body: {
        tags
      },
      params: {
        searchString: searchString,
        order: defaultLabel,
        page
      },
      success: () => {
        setIsLoading(false)
      }
    }))

    dispatch(getFilteredVideos({
      params: {
        search: searchString,
        order: defaultLabel,
        page
      },
    }))
  }, [defaultLabel, dispatch, searchString, currentTab, page])

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

      <Box sx={{ px: { md: 5 }, py: 4 }}>
        <MTab
          currentTab={currentTab}
          handleChange={(val) => {
            setCurrentTab(val)
          }}
          items={TAB_CONTENT}
          tabStyle={{ mb: 6 }}
          itemStyle={{ fontSize: '16px !important', width: '180px !important' }}
        />
      </Box>

      {filteredResult.length === 0 ?
        <NoResults />
        :
        <Box sx={{ mt: 4 }}>
          {isLoading ?
            [0, 1, 2].map((value, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Stack spacing={1}>
                  <Skeleton variant="rectangular" width="100%" height={220} />
                  <Skeleton width="100px" />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Stack>
              </Grid>
            ))
            :
            <CoinNews
              data={filteredResult}
              isGlobalSearch={true}
            />
          }
          <Pagination
            count={parseInt(totalFilteredArticlesCount / 15 > 0 ? totalFilteredArticlesCount / 15 + 1 : totalFilteredArticlesCount / 15)}
            shape="rounded"
            defaultPage={page}
            onChange={(e, page) => setPage(page)}
            sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}
          />
        </Box>
      }
      <Footer />
    </Container>
  )
}

export default SearchResult
