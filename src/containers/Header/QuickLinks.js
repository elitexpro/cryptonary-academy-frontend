import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material'
import { getFilteredArticles } from 'redux/modules/article/actions'
import { getFilteredVideos } from 'redux/modules/video/actions'

const QuickLinks = ({ setOpen, data, isSearchHistory }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [flag, setFlag] = useState(0)
  const [url, setUrl] = useState('')

  const handleClick = (link) => () => {
    if (isSearchHistory) {
      setIsLoading(true)
      setUrl(link)
      dispatch(getFilteredArticles({
        body: {
          tags: [
            'news',
          ]
        },
        params: {
          searchString: link,
        },
        success: () => {
          setFlag(prev => prev + 1)
        }
      }))

      dispatch(getFilteredVideos({
        params: {
          search: link,
        },
        success: () => {
          setFlag(prev => prev + 1)
        }
      }))
    } else {
      setOpen(false)
      history.push(link)
    }
  }

  useEffect(() => {
    if (flag === 2) {
      setOpen(false)
      setIsLoading(false)
      setFlag(0)

      history.push({
        pathname: '/search-result',
        search: url,
        state: {
          tag: 'all'
        }
      })
    }
  }, [flag, setOpen, url, history])

  return (
    <Box sx={{ background: '#FAFAFA', p: 2, borderRadius: '0 0 4px 4px' }}>
      {isLoading ?
        <Box>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </Box>
        :
        <Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="subTitle" color="#909090">{!isSearchHistory ? 'Quick Links' : 'Recent Searches'}</Typography>
          </Box>
          <List>
            {data && data.length > 0 && data.map((item, index) => {
              const { name, to } = item

              return (
                <ListItem disablePadding key={index}>
                  <ListItemButton onClick={handleClick(isSearchHistory ? item : to)}>
                    <ListItemText primary={isSearchHistory ? item : name} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      }
    </Box>
  )
}

export default QuickLinks
