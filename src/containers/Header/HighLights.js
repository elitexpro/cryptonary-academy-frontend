import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Stack,
  Typography,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'

const HighLights = ({ data, searchText, setOpen, setText }) => {
  const history = useHistory()
  const [news, setNews] = useState([])
  const [alpha, setAlpha] = useState([])

  useEffect(() => {
    setNews(data.filter(item => item.access).slice(0, 5))
    setAlpha(data.filter(item => !item.access).slice(0, 5))
  }, [data])

  const handleClick = (tag) => () => {
    let search = localStorage.getItem('search_history') ? JSON.parse(localStorage.getItem('search_history')) : []
    setOpen(false)
    setText(null)
    history.push({
      pathname: '/search-result',
      search: searchText,
      state: {
        data,
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
        <Box>
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
              const { primaryTag, title, type } = item

              return (
                <Box key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                    <Typography variant="subTitle" color="#4AAF47" sx={{ mr: 1, minWidth: 72 }}>{type ? type : primaryTag.name}</Typography>
                    <Box>
                      <Typography variant="subTitle" color="#555">{type ? item.attributes.title : title}</Typography>
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
          <Box sx={{ mt: 3 }}>
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
              const { primaryTag, title, type } = item

              return (
                <Box key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                    <Typography variant="subTitle" color="#4AAF47" sx={{ mr: 1, minWidth: 120 }}>
                      {type ? type : primaryTag.name}
                    </Typography>
                    <Box>
                      <Typography variant="subTitle" color="#555">{type ? item.attributes.title : title}</Typography>
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
