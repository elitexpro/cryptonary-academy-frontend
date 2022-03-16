import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Grid,
  Container,
  Box,
  Stack,
  Rating,
  Typography,
  Divider,
  Skeleton,
} from '@mui/material'
import { getCoinById } from 'redux/modules/coin/actions'
import { currentCoinSelector } from 'redux/modules/coin/selectors'
import Overview from 'components/CoinOverview'
import { Footer } from 'containers/Footer'
import CoinTable from 'components/CoinTable'
import News from './News'
import { MTab } from 'components/CustomMaterial'

const CoinDetail = (props) => {
  const dispatch = useDispatch()
  const currentCoin = useSelector(currentCoinSelector)
  const [isLoading, setIsloading] = useState(false)
  const [currentTab, setCurrentTab] = useState('overview')

  const {
    logo, tokenName, coinSymbol, infoCommunityReview, infoTeamDeveloper,
    infoTokenomicAllocation, infoUsageReview, infoValueAccural, coinTypes, coinSectors, relatedCoinRatings
  } = currentCoin

  const rating = (infoCommunityReview + infoTeamDeveloper + infoTokenomicAllocation + infoUsageReview + infoValueAccural) / 5

  const loadCoin = useCallback((symbol) => {
    setIsloading(true)
    dispatch(getCoinById({
      symbol,
      success: ({ data }) => {
        setIsloading(false)
      },
      fail: (err) => {
        setIsloading(false)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    loadCoin(props.match.params.symbol)
  }, [loadCoin, props.match.params.symbol])

  const handleChange = (value) => {
    setCurrentTab(value)
  }

  const TABS = [
    { label: 'Overview', value: 'overview' },
    { label: 'Bitcoin News', value: 'news' },
    { label: 'Related Coins', value: 'related_coins' },
  ]

  return (
    <Container maxWidth="xl">
      {isLoading ?
        <Box sx={{ px: { md: 10 }, mt: 4, minHeight: `calc(100vh - 365px)` }}>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: 4, maxWidth: { md: 320 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Skeleton variant="circular" width={48} height={48} />
                  <Box sx={{ width: '60%', ml: 1, display: 'flex', flexDirection: 'column' }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: { md: 'column', xs: 'row' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                  <Skeleton width="100%" />
                  <Skeleton width="60%" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: 4 }}>
                <Skeleton variant="rectangular" height={118} />
              </Box>
            </Grid>
          </Grid>

          <Stack spacing={4}>
            {[...Array(5)].map((item, index) => (
              <Box key={index}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            ))}
          </Stack>
        </Box>
        :
        <Box sx={{ px: { md: 10 }, mt: 4 }}>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: 4, maxWidth: { md: 320 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={logo?.url} alt="" style={{ width: 48, height: 48 }} />
                  <Box sx={{ ml: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h2" color="#141414" sx={{ mr: 1 }}>{tokenName}</Typography>
                      <Typography variant="subTitle" color="#909090">{coinSymbol}</Typography>
                    </Box>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating
                        sx={{ color: '#4AAF47' }}
                        value={rating ? rating : 0}
                        precision={0.1}
                        readOnly
                      />
                      <Typography variant="subTitle1" color="#141414">{rating ? rating : 0}</Typography>
                    </Stack>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', flexDirection: { md: 'column', xs: 'row' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                    <Typography variant="subTitle1" color="#141414" sx={{ marginRight: 1 }}>Type</Typography>
                    <Typography variant="subTitle" color="#858585">{coinTypes && coinTypes.length > 0 && coinTypes[0].name}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: { md: 'column', xs: 'row' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                    <Typography variant="subTitle1" color="#141414" sx={{ marginRight: 1 }}>Sector</Typography>
                    <Typography variant="subTitle" color="#858585">
                      {coinSectors && coinSectors.length > 0 && coinSectors[0].name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>

            </Grid>
          </Grid>

          <MTab
            items={TABS}
            currentTab={currentTab}
            handleChange={handleChange}
            itemStyle={{ maxWidth: '240px !important' }}
          />

          {currentTab === 'overview' && <Overview coin={currentCoin} />}
          {currentTab === 'news' && <News currentTab={currentTab} />}
          {currentTab === 'related_coins' &&
            <Box sx={{ mt: 4 }}>
              <CoinTable isRelated={true} setCurrentTab={setCurrentTab} data={relatedCoinRatings} />
            </Box>
          }
        </Box>
      }
      <Footer minimal />
    </Container >
  )
}

export default CoinDetail
