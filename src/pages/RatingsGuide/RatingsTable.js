import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Divider,
  Stack,
  Grid,
  Chip,
  FormControlLabel,
  Checkbox,
  Hidden,
  Skeleton,
} from '@mui/material'
import { getCoinRatingList, getCoinRatingTypeList } from 'redux/modules/coin/actions'
import { coinRatingsSelector, coinRatingTypesSelector } from 'redux/modules/coin/selectors'
import CoinTable from 'components/CoinTable'

const RatingsTable = () => {
  const dispatch = useDispatch()
  const coinRatings = useSelector(coinRatingsSelector)
  const coinRatingTypes = useSelector(coinRatingTypesSelector)
  const [types, setTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [flag, setFlag] = useState(0)
  const [coinRatingsData, setCoinRatingsData] = useState(coinRatings)

  useEffect(() => {
    setIsLoading(true)
    dispatch(getCoinRatingList({
      success: () => {
        setFlag(prev => prev + 1)
      }
    }))
    dispatch(getCoinRatingTypeList({
      success: () => {
        setFlag(prev => prev + 1)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    if (flag === 2) {
      setIsLoading(false)
      setFlag(0)
    }
  }, [flag])

  useEffect(() => {
    const formattedTypes = coinRatingTypes.data && coinRatingTypes.data.map(item => {
      const { name, isSelected = false } = item.attributes

      return {
        name,
        isSelected
      }
    })

    setTypes(formattedTypes)
  }, [coinRatingTypes])

  const handleClickTopic = (item) => () => {
    setTypes(prev => prev.map(x => {
      const { isSelected, name } = x
      return {
        name,
        isSelected: name === item.name ? !isSelected : isSelected
      }
    }))
  }

  useEffect(() => {
    const filteredTypes = types?.filter(item => item.isSelected && item.name)
    setCoinRatingsData(
      filteredTypes?.length > 0 ?
        coinRatings?.data?.filter(item => filteredTypes.find(x => x.name === item.attributes.coinTypes[0].name)) :
        coinRatings.data
    )
  }, [coinRatings, types])

  return (
    <Box sx={{ px: { md: 5, xs: 0 } }}>
      <Divider sx={{ color: '#E4E4E4', my: 4 }} />
      <Hidden mdDown>
        {isLoading ?
          <Skeleton variant="text" sx={{ mb: 4 }} />
          :
          <Stack sx={{ mb: 4 }} direction='row' justifyContent='space-between' alignItems='center'>
            <Grid container spacing={2}>
              {
                types && types.map((item, key) => (
                  <Grid item xs='auto' key={key}>
                    <Chip
                      color={item.isSelected ? 'success' : undefined}
                      label={item.name}
                      variant={!item.isSelected ? 'outlined' : undefined}
                      onClick={handleClickTopic(item)}
                    />
                  </Grid>
                ))
              }
            </Grid>
            <Box
              sx={{
                background: '#FCFCFC',
                px: 3,
                height: 40,
                width: 310,
                borderRadius: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <FormControlLabel
                sx={{ fontSize: 14, color: '#909090' }}
                control={
                  <Checkbox
                    sx={{
                      '&.Mui-checked': {
                        color: '#141414'
                      }
                    }}
                  />
                }
                label='Show new coins only'
              />
            </Box>
          </Stack>
        }
      </Hidden>
      <CoinTable tableData={coinRatingsData} isLoading={isLoading} />
      {/* <Hidden mdDown>
        <Stack sx={{ mt: 4 }}>
          <Pagination count={coinRatingsData && coinRatingsData.length / 10} shape="rounded" />
        </Stack>
      </Hidden> */}
    </Box>
  )
}

export default RatingsTable
