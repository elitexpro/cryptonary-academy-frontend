import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  IconButton,
  Box,
  Modal,
  InputBase,
  Skeleton,
  Typography,
} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseIcon from '@mui/icons-material/Close'
import QuickLinks from './QuickLinks'
import HighLights from './HighLights'

import { getFilteredArticles } from 'redux/modules/article/actions'
import { getFilteredVideos } from 'redux/modules/video/actions'

const LINKS = [
  {
    name: 'Crypto Research',
    to: '/research-reports'
  },
  {
    name: 'Market Analysis',
    to: '/analysis/technical-analysis'
  },
  {
    name: 'News',
    to: '/news/all'
  },
  {
    name: 'Crypto School',
    to: '/education/crypto-school'
  },
  {
    name: 'Ratings Guide',
    to: '/rating-guide'
  },
]

const debounce = (fn, delay) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...args), delay)
  }
}

const GlobalSearch = ({ isMobile }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState(null)
  const [flag, setFlag] = useState(0)

  const handleGlobalSearch = debounce((e) => {
    setIsLoading(true)
    setSearchText(e.target.value)
    dispatch(getFilteredArticles({
      body: {
        tags: [
          'news',
        ]
      },
      params: {
        searchString: e.target.value,
      },
      success: () => {
        setFlag(prev => prev + 1)
      }
    }))

    dispatch(getFilteredVideos({
      params: {
        search: e.target.value,
      },
      success: () => {
        setFlag(prev => prev + 1)
      }
    }))
  }, 300)

  useEffect(() => {
    if (flag === 2) {
      setIsLoading(false)
      setFlag(0)
    }
  }, [flag])

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && !isLoading) {
      let search = localStorage.getItem('search_history') ? JSON.parse(localStorage.getItem('search_history')) : []
      setOpen(false)
      setSearchText(null)
      if (searchText && search.indexOf(searchText) === -1) {
        search.push(searchText)
      }
      localStorage.setItem('search_history', JSON.stringify(search.slice(-5)))
      e.preventDefault()
      e.stopPropagation()

      history.push({
        pathname: '/search-result',
        search: searchText,
        state: {
          tag: 'all'
        }
      })
    }
  }

  return (
    <Box>
      {isMobile ?
        <Box onClick={() => setOpen(true)}>
          <Typography variant="subTitle1" color="#858585">Global Search</Typography>
        </Box>
        :
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            '&:hover': {
              backgroundColor: '#fff',
              color: { md: '#4AAF47' },
            },
          }}
        >
          <SearchRoundedIcon />
        </IconButton>
      }

      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
          setSearchText(null)
        }}
      >
        <Box
          sx={{
            p: '2px 4px',
            width: { md: '50%', xs: '100%' },
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translate(-50%)'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: '#FFF',
              borderRadius: '4px 4px 0 0',
              p: 2,
            }}
          >
            <IconButton aria-label="search">
              <SearchRoundedIcon />
            </IconButton>

            <InputBase
              sx={{ flex: 1 }}
              placeholder="Search for news, journals and analysis"
              onChange={handleGlobalSearch}
              onKeyDown={handleKeyPress}
            />

            <IconButton
              onClick={() => {
                setOpen(false)
                setSearchText(null)
              }}
            >
              <CloseIcon style={{ width: 20, height: 20 }} />
            </IconButton>
          </Box>

          {!searchText ?
            <QuickLinks
              setOpen={setOpen}
              data={localStorage.getItem('search_history') ? JSON.parse(localStorage.getItem('search_history')) : LINKS}
              isSearchHistory={localStorage.getItem('search_history') ? true : false}
            />
            :
            <Box
              sx={{
                background: '#FAFAFA',
                p: 2,
                borderRadius: '0 0 4px 4px'
              }}
            >
              {isLoading ?
                <Box>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="60%" />
                </Box>
                :
                <HighLights
                  searchText={searchText}
                  setOpen={setOpen}
                  setText={setSearchText}
                />
              }
            </Box>
          }
        </Box>
      </Modal>
    </Box>
  )
}

export default GlobalSearch
