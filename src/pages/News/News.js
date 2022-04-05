import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
} from '@mui/material'
import HeroSection from './HeroSection'
import NewsSection from './NewsSection'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'
import { setNewsTag } from 'redux/modules/news/actions'

const News = (props) => {
  const dispatch = useDispatch()

  const tab = useMemo(() => {
    dispatch(setNewsTag(props.match.params.tab))
    return props.match.params.tab
  }, [props, dispatch])

  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 4 }}>
        <HeroSection tab={tab} />
      </Container>

      <Container maxWidth="xl" sx={{ pb: 4, mb: 10 }}>
        <NewsSection />
      </Container>

      <Paywall />

      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default News
