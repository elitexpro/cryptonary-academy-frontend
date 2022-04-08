import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Stack,
  Skeleton,
  Grid,
  Box,
} from '@mui/material'
import HeroSection from './HeroSection'
import NoData from './NoData'
import { ArticleItem } from 'components/ArticleItem'
import { VideoItem } from 'components/VideoItem'
import { getFavouritesList } from 'redux/modules/favourite/actions'
import { favouritesListSelector } from 'redux/modules/favourite/selectors'
import { Footer } from 'containers/Footer'

const MyFavourites = () => {
  const dispatch = useDispatch()
  const favourites = useSelector(favouritesListSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [defaultLabel, setDefaultLabel] = useState('Sort By')

  const loadData = useCallback(() => {
    setIsLoading(true)
    dispatch(getFavouritesList({
      params: {
        search: searchString,
        order: defaultLabel,
        type: 'article'
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, searchString, defaultLabel])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <Container maxWidth="xl">
      <Box sx={{ px: { md: 5, xs: 2 } }}>
        {
          !isLoading && !favourites?.length > 0 ?
            <></>
            :
            <HeroSection
              searchString={searchString}
              setSearchString={setSearchString}
              defaultLabel={defaultLabel}
              setDefaultLabel={setDefaultLabel}
            />
        }

        <Grid container spacing={4}>
          {isLoading ?
            [0, 1, 2].map((value, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Stack spacing={1}>
                  <Skeleton variant="rectangular" width="100%" height={220} />
                  <Skeleton width="100%" />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Stack>
              </Grid>
            ))
            :
            favourites && favourites?.length > 0 ?
              favourites.map((item, index) => {
                const { article, type } = item.attributes

                return (
                  <Grid item xs={12} md={4} key={index}>
                    {type === 'article' ? <ArticleItem data={article} /> : <VideoItem data={article} />}
                  </Grid>
                )
              })
              :
              <Grid item xs={12} md={12}>
                <NoData />
              </Grid>
          }
        </Grid>
      </Box>

      <Footer minimal />
    </Container>
  )
}

export default MyFavourites
