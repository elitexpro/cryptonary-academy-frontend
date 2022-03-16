import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Container,
} from '@mui/material'
import HeroSection from './HeroSection'
import AnalysisList from './AnalysisList'
import { Footer } from 'containers/Footer'

const Analysis = () => {
  const location = useLocation()
  const [currentTab, setCurrentTab] = useState()
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    setCurrentTab(location.search && location.search.split('=')[1])
  }, [location.search])

  return (
    <Container maxWidth="xl" sx={{ px: { md: 5, xs: 2 } }}>
      <HeroSection
        defaultLabel={defaultLabel}
        setDefaultLabel={setDefaultLabel}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <AnalysisList
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        searchString={searchString}
        defaultLabel={defaultLabel}
      />
      <Footer minimal={true} />
    </Container>
  )
}

export default Analysis
