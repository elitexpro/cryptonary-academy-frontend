import React, { useState } from 'react'
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

const QuickLinks = ({ setOpen, data, isSearchHistory }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (link) => () => {
    if (isSearchHistory) {
      setIsLoading(true)
      dispatch(getFilteredArticles({
        body: {
          tags: [
            'news',
          ]
        },
        params: {
          searchString: link,
        },
        success: ({ data }) => {
          setOpen(false)
          setIsLoading(false)
          history.push({
            pathname: '/search-result',
            search: link,
            state: {
              data: data?.posts,
              tag: 'all'
            }
          })
        }
      }))
    } else {
      setOpen(false)
      history.push(link)
    }
  }

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
