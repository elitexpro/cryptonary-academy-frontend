import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
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
import { filteredArticleSelector } from 'redux/modules/article/selectors'
import { filteredVideosSelector } from 'redux/modules/video/selectors'
import { setFilteredPosts } from 'redux/modules/global/actions'

const QuickLinks = ({ setOpen, data, isSearchHistory }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const filteredArticles = useSelector(filteredArticleSelector)
  const filteredVideos = useSelector(filteredVideosSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [flag, setFlag] = useState(0)

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

  const setPosts = useCallback(() => {
    let posts = []

    setFlag(0)
    setIsLoading(false)
    filteredArticles.map((item) => {
      const { featureImage, primaryTag, title, excerpt, updatedAt } = item

      return posts.push({
        featureImage,
        tagName: primaryTag.name,
        title,
        excerpt,
        updatedAt: moment(updatedAt),
      })
    })

    filteredVideos.map(item => {
      const { attributes } = item

      return posts.push({
        featureImage: attributes.thumbnail.url,
        tagName: 'Videos',
        title: attributes.title,
        excerpt: attributes.description,
        updatedAt: moment(),
      })
    })

    console.log('debug -------------- ', filteredArticles)
    dispatch(setFilteredPosts(posts))
  }, [filteredArticles, filteredVideos, dispatch])

  useEffect(() => {
    if (flag === 2) {
      setOpen(false)
      setPosts()
    }
  }, [flag, setPosts, setOpen])

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
