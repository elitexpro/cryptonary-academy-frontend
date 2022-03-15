import React from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Divider,
  Stack,
  Grid,
  Chip,
  Hidden,
  Skeleton,
  Pagination,
  Typography,
} from '@mui/material'
import { totalPagesSelector, coinRatingsSelector } from 'redux/modules/coin/selectors'
import CoinTable from 'components/CoinTable'

const RatingsTable = ({ currentPage, setCurrentPage, types, setTypes, isLoading }) => {
  const totalPages = useSelector(totalPagesSelector)
  const coinRatings = useSelector(coinRatingsSelector)

  const handleClickTopic = (item) => () => {
    setTypes(prev => prev.map(x => {
      const { isSelected, name, id } = x
      return {
        name,
        isSelected: name === item.name ? !isSelected : isSelected,
        id
      }
    }))
  }

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
          </Stack>
        }
      </Hidden>
      <CoinTable isLoading={isLoading} />
      {!isLoading && coinRatings && coinRatings.length > 0 &&
        <Hidden mdDown>
          <Stack sx={{ mt: 4 }} direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="subTitle" color="#909090">
                Showing {currentPage * 10 > coinRatings?.length ? (coinRatings?.length + (currentPage - 1) * 10) : currentPage * 10}
                &nbsp;of {coinRatings?.length + (currentPage - 1) * 10}
              </Typography>
            </Box>
            <Pagination
              count={totalPages}
              shape="rounded"
              onChange={(e, page) => setCurrentPage(page)}
            />
          </Stack>
        </Hidden>
      }
    </Box>
  )
}

export default RatingsTable
