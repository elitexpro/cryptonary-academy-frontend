import React from 'react'
import {
  Container,
  Box,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import HeroSection from './HeroSection'
import BitcoinOverview from './BitcoinOverview'
import RatingsTable from './RatingsTable'
import { Paywall } from 'containers/Paywall'
import { Footer } from 'containers/Footer'

const RatingsGuide = () => {
  const currentUser = useSelector(currentUserSelector)

  return (
    <Box>
      <Box sx={{ background: "linear-gradient(180deg, #F8FCF8 0%, rgba(248, 252, 248, 0) 100%)" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>
      <Container maxWidth="xl">
        {!currentUser ? <BitcoinOverview /> : <RatingsTable />}
      </Container>
      {!currentUser && <Paywall />}
      <Container maxWidth="xl">
        <Footer minimal={currentUser ? true : false} />
      </Container>
    </Box>
  )
}

export default RatingsGuide
