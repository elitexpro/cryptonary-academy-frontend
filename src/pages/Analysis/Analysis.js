import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Box,
} from '@mui/material'
import HeroSection from './HeroSection'
import AnalysisList from './AnalysisList'
import { Footer } from 'containers/Footer'

const Analysis = () => {
  const location = useLocation()
  const [currentTab, setCurrentTab] = useState('technical-analysis')
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [searchString, setSearchStrinhg] = useState('')

  useEffect(() => {
    setCurrentTab(location.search && location.search.split('=')[1])
  }, [location.search])

  return (
    <Box sx={{ px: 5 }}>
      <HeroSection
        defaultLabel={defaultLabel}
        setDefaultLabel={setDefaultLabel}
        searchString={searchString}
        setSearchStrinhg={setSearchStrinhg}
      />
      <AnalysisList
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        searchString={searchString}
        defaultLabel={defaultLabel}
      />
      <Footer minimal={true} />
    </Box>
  )
}

export default Analysis
