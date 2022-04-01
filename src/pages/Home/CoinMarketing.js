import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  Skeleton,
} from '@mui/material'
import { getCoinRatingsLiveData } from 'redux/modules/global/actions'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import BitcoinSVG from 'assets/image/bitcoin.png'
import EthereumSVG from 'assets/image/ethereum.png'
import BinanceCoinSVG from 'assets/image/binance-coin.png'
import CardanoSVG from 'assets/image/cardano.png'

const DATA = [
  { img: <img src={BitcoinSVG} alt="" style={{ width: 25, height: 25 }} />, coin: 'BTC', label: 'bitcoin' },
  { img: <img src={EthereumSVG} alt="" style={{ width: 25, height: 25 }} />, coin: 'ETH', label: 'ethereum' },
  { img: <img src={BinanceCoinSVG} alt="" style={{ width: 25, height: 25 }} />, coin: 'BNB', label: 'binancecoin' },
  {
    img:
      <img
        src={CardanoSVG}
        alt=""
        style={{ width: 25, height: 25, background: '#2ea2cc', borderRadius: '50%' }} />,
    coin: 'ADA',
    label: 'cardano',
  },
]

const CoinMarketing = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const [coinRatings, setCoinRatings] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const loadData = useCallback(() => {
    setIsLoading(true)
    dispatch(getCoinRatingsLiveData({
      success: ({ data }) => {
        setCoinRatings(data)
        setIsLoading(false)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    loadData()
  }, [loadData])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getCoinRatingsLiveData({
        success: ({ data }) => {
          setCoinRatings(data)
        }
      }))
    }, 10000)

    return () => clearInterval(interval)
  }, [dispatch])

  return (
    !currentUser &&
    <Box sx={{ width: '100%', height: 50, background: '#141414', display: 'fex', alignItems: 'center', margin: 'auto' }}>
      <Container maxWidth="xl">
        <Grid container sx={{ pl: 10 }}>
          {isLoading ?
            <Skeleton width="100%" />
            :
            DATA.map((item, index) => {
              const currentCoin = coinRatings[item.label]
              const color = currentCoin?.usd_24h_change > 0 ? '#9BD699' : '#FF7070'

              return (
                <Grid item key={index} md={3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {item.img}
                    <Typography sx={{ fontSize: 15 }} color="#FFF">{item.coin}</Typography>
                    <Typography sx={{ fontSize: 15 }} color={color}>${currentCoin?.usd.toFixed(2)}</Typography>
                    <Typography sx={{ fontSize: 15 }} color={color}>{currentCoin?.usd_24h_change.toFixed(2)}%</Typography>
                  </Stack>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default CoinMarketing
