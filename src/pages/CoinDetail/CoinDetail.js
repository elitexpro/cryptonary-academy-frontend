import React, { useEffect, useState, useCallback } from 'react'
import { styled } from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  Grid,
  Container,
  Box,
  Stack,
  Rating,
  Typography,
  Divider,
  Tab,
  Tabs,
} from '@mui/material'
import { getCoinById, getRelatedCoins } from 'redux/modules/coin/actions'
import { relatedCoinsSelector } from 'redux/modules/coin/selectors'
import Overview from 'components/CoinOverview'
import { Footer } from 'containers/Footer'
import CoinTable from 'components/CoinTable'
import CoinNews from 'components/CoinNews'

const CustomTab = styled(Tab)(() => {
  return {
    textTransform: 'none !important',
    fontSize: 18,
    fontWeight: 400,
    width: "50%",
    minWidth: 160,
    maxWidth: 240
  }
})

const CoinDetail = (props) => {
  const dispatch = useDispatch()
  const relatedCoins = useSelector(relatedCoinsSelector)
  const [currentCoin, setCurrentCoin] = useState({})
  const [isLoading, setIsloading] = useState(false)
  const [currentTab, setCurrentTab] = useState('overview')

  const {
    logo, tokenName, coinSymbol, infoCommunityReview, infoTeamDeveloper,
    infoTokenomicAllocation, infoUsageReview, infoValueAccural, coinTypes, coinSectors
  } = currentCoin

  const rating = (infoCommunityReview + infoTeamDeveloper + infoTokenomicAllocation + infoUsageReview + infoValueAccural) / 5

  const loadCoin = useCallback((symbol) => {
    setIsloading(true)
    dispatch(getCoinById({
      symbol,
      success: ({ data }) => {
        setCurrentCoin(data?.data && data?.data.attributes)
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

  useEffect(() => {
    dispatch(getRelatedCoins({
      id: currentCoin.coinSectors && currentCoin.coinSectors[0].id
    }))
  }, [dispatch, currentCoin])

  const handleChange = (e, value) => {
    setCurrentTab(value)
  }

  return (
    <Container maxWidth="xl">
      {!isLoading &&
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

          <Tabs
            value={currentTab}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            sx={{ borderBottom: '1px solid #EAEAEA' }}
            TabIndicatorProps={{
              style: {
                background: "#4AAF47",
                height: 1
              }
            }}
          >
            <CustomTab label="Overview" value="overview" />
            <CustomTab label="Bitcoin News" value="news" />
            <CustomTab label="Related Coins" value="related_coins" />
          </Tabs>
          {currentTab === 'overview' && <Overview coin={currentCoin} />}
          {currentTab === 'news' && <CoinNews />}
          {currentTab === 'related_coins' &&
            <Box sx={{ mt: 4 }}>
              <CoinTable tableData={relatedCoins} noHeader={true} viewAllButton={true} />
            </Box>
          }
        </Box>
      }

      <Footer minimal />
    </Container >
  )
}

export default CoinDetail
