import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Stack,
  Typography,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'

import { filteredArticleSelector } from 'redux/modules/article/selectors'
import { filteredVideosSelector } from 'redux/modules/video/selectors'
import { setFilteredPosts } from 'redux/modules/global/actions'

const HighLights = ({ searchText, setOpen, setText }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const filteredArticles = useSelector(filteredArticleSelector)
  const filteredVideos = useSelector(filteredVideosSelector)
  const [news, setNews] = useState([])
  const [alpha, setAlpha] = useState([])
  const [filteredResult, setFilteredResult] = useState([])

  useEffect(() => {
    let posts = []

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

    setFilteredResult(posts)
    dispatch(setFilteredPosts(posts))
  }, [filteredArticles, filteredVideos, dispatch])

  useEffect(() => {
    setNews(filteredResult.length > 0 && filteredResult.filter(item => item).slice(0, 5))
    setAlpha(filteredResult.length > 0 && filteredResult.filter(item => !item).slice(0, 5))
  }, [filteredResult])

  const handleClick = (tag) => () => {
    let search = localStorage.getItem('search_history') ? JSON.parse(localStorage.getItem('search_history')) : []
    setOpen(false)
    setText(null)
    history.push({
      pathname: '/search-result',
      search: searchText,
      state: {
        tag
      }
    })
    if (search.indexOf(searchText) === -1) {
      search.push(searchText)
    }
    localStorage.setItem('search_history', JSON.stringify(search.slice(-5)))
  }

  return (
    <Box>
      {alpha && alpha.length > 0 &&
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1}>
            <Typography
              variant="subTitle4"
              color="#909090"
              sx={{
                textTransform: 'uppercase'
              }}
            >
              From Alpha
            </Typography>

            <Typography variant="subTitle4" color="#4AAF47">Members Exclusive</Typography>
          </Stack>

          <Stack sx={{ mt: 1, borderRadius: '4px', p: 2, background: '#FFF' }} spacing={2}>
            {alpha.map((item, index) => {
              const { title, tagName } = item

              return (
                <Box key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                    <Typography variant="subTitle" color="#4AAF47" sx={{ mr: 1, minWidth: 72 }}>{tagName}</Typography>
                    <Box>
                      <Typography variant="subTitle" color="#555">{title}</Typography>
                    </Box>
                  </Box>

                  {index !== alpha.length - 1 &&
                    <Divider />
                  }
                </Box>
              )
            })}

            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <MButton
                variant="contained"
                color="inherit"
                sx={{
                  color: '#909090',
                  width: 92,
                }}
                onClick={handleClick('alpha')}
              >
                See more
              </MButton>
            </Box>
          </Stack>
        </Box>
      }

      {news && news.length > 0 &&
        <Box>
          <Box>
            <Typography
              variant="subTitle4"
              color="#909090"
              sx={{
                textTransform: 'uppercase'
              }}
            >
              From News
            </Typography>
          </Box>

          <Stack sx={{ mt: 1, borderRadius: '4px', p: 2, background: '#FFF' }} spacing={2}>
            {news.map((item, index) => {
              const { title, tagName } = item

              return (
                <Box key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                    <Typography variant="subTitle" color="#4AAF47" sx={{ mr: 1, minWidth: 120 }}>
                      {tagName}
                    </Typography>
                    <Box>
                      <Typography variant="subTitle" color="#555">{title}</Typography>
                    </Box>
                  </Box>

                  {index !== news.length - 1 &&
                    <Divider />
                  }
                </Box>
              )
            })}

            <Box sx={{ width: '100%', textAlign: 'center', mt: 1 }}>
              <MButton
                variant="contained"
                color="inherit"
                sx={{
                  color: '#909090',
                  width: 92,
                }}
                onClick={handleClick('news')}
              >
                See more
              </MButton>
            </Box>
          </Stack>
        </Box>
      }
    </Box>
  )
}

export default HighLights
