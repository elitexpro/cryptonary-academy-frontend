import React, { useState, useMemo } from 'react'
import {
  Container,
} from '@mui/material'
import HeroSection from './HeroSection'
import AnalysisList from './AnalysisList'
import { Footer } from 'containers/Footer'

const Analysis = (props) => {
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [searchString, setSearchString] = useState('')
  const currentTab = useMemo(() => {
    return props.match.params.tab
  }, [props])

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
        searchString={searchString}
        defaultLabel={defaultLabel}
      />
      <Footer minimal={true} />
    </Container>
  )
}

export default Analysis
