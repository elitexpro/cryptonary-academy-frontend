import React, { useState, useEffect, useCallback } from 'react'
import {
  Container,
  Grid,
  Hidden,
} from '@mui/material'
import PulseDatePicker from './PulseDatePicker'
import PulseList from './PulseList'
import CPROPulse from './CPROPulse'
import NoPulse from './NoPulse'
import { Footer } from 'containers/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { pulsePinDateSelector } from 'redux/modules/global/selectors'
import { getPulsesByDate } from 'redux/modules/pulse/actions'
import { BackLoader } from 'components/Loader'
import moment from 'moment'

const Pulse = () => {
  const dispatch = useDispatch()
  const pinDate = useSelector(pulsePinDateSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const loadPulseData = useCallback((date) => {
    setIsLoading(true)

    dispatch(getPulsesByDate({
      params: {
        date: date && moment(date).format('YYYY-MM-DD'),
      },
      success: ({ data }) => {
        setData(data?.data)
        setIsLoading(false)
      },
      fail: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    loadPulseData(pinDate)
  }, [pinDate, loadPulseData])

  const handleShowLatest = () => {
    loadPulseData(null)
  }

  return (
    <>
      <BackLoader open={isLoading} />

      <PulseDatePicker />
      <Container maxWidth="xl">
        <Grid container spacing={4} >
          <Grid item xs={12} md={8} >
            {
              data.length === 0 ?
                <NoPulse showLatest={handleShowLatest} />
                :
                <PulseList data={data} />
            }
          </Grid>

          <Hidden mdDown>
            <Grid item md={4}>
              <CPROPulse />
            </Grid>
          </Hidden>
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default Pulse
