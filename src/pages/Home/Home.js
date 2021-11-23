import React from 'react'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import Basics from './Basics'
import MustKnow from './MustKnow'
import QuizSection from './QuizSection'
import DeepDives from './DeepDives'
import Resources from './Resources'


const Home = () => {

  return (
    <>
      <HeroSection />
      <FilterBar />
      <Basics />
      <MustKnow />
      <QuizSection />
      <DeepDives />
      <Resources />
    </>
  )
}

export default Home
