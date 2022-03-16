import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Stack,
  Grid,
  CardActionArea,
  Skeleton,
  Hidden,
  Box,
} from '@mui/material'
import { getCoinNews } from 'redux/modules/coin/actions'
import { coinNewsSelector, newsTotalPagesSelector } from 'redux/modules/coin/selectors'
import { HorizontalArticleItem } from 'components/HorizontalArticleItem'
import { LazyImage } from 'components/LazyImage'
import { MPagination } from 'components/CustomMaterial'

const PAGE_ITEMS = [
  { text: '09', value: 9 },
  { text: '18', value: 18 },
  { text: '27', value: 27 },
  { text: 'All', value: 'all' },
]

const News = ({ currentTab }) => {
  const dispatch = useDispatch()
  const coinNews = useSelector(coinNewsSelector)
  const newsTotalPages = useSelector(newsTotalPagesSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [perPage, setPerPage] = useState(9)
  const [page, setPage] = useState(1)
  const perPageText = PAGE_ITEMS.find(item => item.value === perPage)?.text

  const currntPerPage = useMemo(() => {
    return perPage !== 'all' ? perPage : newsTotalPages
  }, [perPage, newsTotalPages])

  const handleResetPage = (value) => {
    setPerPage(value)
    setPage(1)
  }

  const loadData = useCallback(() => {
    setIsLoading(true)
    dispatch(getCoinNews({
      params: {
        perPage: currntPerPage,
        page,
      },
      body: {
        tags: [
          currentTab,
          'news',
        ]
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, currentTab, page, currntPerPage])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <Box>
      <Stack spacing={4} sx={{ mt: 4, maxWidth: '60%' }}>
        {
          isLoading ?
            [0, 1, 2].map((value, index) => (
              <Grid container key={index}>
                <Grid item xs={12} md={4}>
                  <CardActionArea>
                    <LazyImage>
                      <Skeleton variant="rectangular" width="100%" />
                    </LazyImage>
                  </CardActionArea>
                </Grid>

                <Grid item xs={12} md={8}>
                  <Stack spacing={1} sx={{ pl: 2 }}>
                    <Skeleton width="30%" />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Stack>
                </Grid>
              </Grid>
            ))
            :
            coinNews && coinNews?.map((item, index) => (
              <HorizontalArticleItem key={index} data={item} />
            ))
        }
      </Stack>

      {!isLoading &&
        <Hidden mdDown>
          <MPagination
            listCount={newsTotalPages}
            items={PAGE_ITEMS}
            label={perPageText}
            perPage={perPage}
            onChange={handleResetPage}
            page={page}
            setPage={setPage}
            buttonStyle={{ width: '30px' }}
            positionStyle={{ ml: '0px' }}
            dropboxStyle={{ width: '80px' }}
          />
        </Hidden>
      }
    </Box>
  )
}

export default News
