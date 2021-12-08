import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Box, Hidden } from '@mui/material'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import Posts from './Posts'
import ArticlePagination from './ArticlePagination'
import QuizSection from 'components/QuizSection'
import { Footer } from 'containers/Footer'
import { getAllArticles } from 'redux/modules/article/actions'

const Article = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllArticles())
  }, [dispatch])

  return (
    <Box>
      <Box sx={{ background: "linear-gradient(180deg, #F8FCF8 0%, rgba(248, 252, 248, 0) 100%)" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>
      <Container maxWidth="xl">
        <FilterBar />
        <Posts />
        <Hidden mdDown>
          <ArticlePagination />
        </Hidden>
        <QuizSection />
        <Footer />
      </Container>
    </Box>
  )
}

export default Article
