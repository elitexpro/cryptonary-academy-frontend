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
} from '@mui/material'
import { getCoinRatingList, getCoinRatingTypeList } from 'redux/modules/coin/actions'
import { coinRatingsSelector, coinRatingTypesSelector } from 'redux/modules/coin/selectors'
import CoinTable from 'components/CoinTable'

const RatingsTable = () => {
  const dispatch = useDispatch()
  const coinRatings = useSelector(coinRatingsSelector)
  const coinRatingTypes = useSelector(coinRatingTypesSelector)
  const [types, setTypes] = useState([])

  useEffect(() => {
    dispatch(getCoinRatingList())
    dispatch(getCoinRatingTypeList())
  }, [dispatch])

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

  return (
    <Box sx={{ px: { md: 5, xs: 0 } }}>
      <Divider sx={{ color: '#E4E4E4', my: 4 }} />
      <Hidden mdDown>
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
      </Hidden>
      <CoinTable coinRatings={coinRatings} />
    </Box>
  )
}

export default RatingsTable
