import React from 'react'
import { Container, Box } from '@mui/material'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import Basics from './Basics'
// import MustKnow from './MustKnow'
// import DeepDives from './DeepDives'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { CreateAccountModal } from 'containers/CreateAccountModal'
// import { useHistory } from 'react-router-dom'

const Education = () => {
  // const history = useHistory()
  const currentUser = useSelector(currentUserSelector)

  if (currentUser && !currentUser?.attributes?.isEmailVerified) {
    // history.push('/verify')
  }

  return (
    <>
      {!currentUser && <CreateAccountModal />}
      <Box sx={{ background: "linear-gradient(180deg, #F8FCF8 0%, rgba(248, 252, 248, 0) 100%)" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <FilterBar />
        <Basics />
        {/* <MustKnow />
        <DeepDives /> */}
      </Container>
      <Paywall />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default Education
