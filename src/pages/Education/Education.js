import React, { useEffect, useCallback, useState } from 'react'
import { Container } from '@mui/material'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import LevelSection from './LevelSection'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'
import QuizSection from 'components/QuizSection'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { CreateAccountModal } from 'containers/CreateAccountModal'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getEducationArticles,
  getEducationVideos,
} from 'redux/modules/education/actions'
import {
  educationMediaTypeSelector,
  educationSearchValueSelector,
  educationFilteredTagNameSelector,
  educationTabTagSelector,
  // educationReadingTimeSelector,
  // educationDurationSelector,
} from 'redux/modules/education/selectors'

const Education = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const mediaType = useSelector(educationMediaTypeSelector)
  const searchValue = useSelector(educationSearchValueSelector)
  const selectedTags = useSelector(educationFilteredTagNameSelector)
  const tabTag = useSelector(educationTabTagSelector)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [dataType, setDataType] = useState('article')
  const [isLoading, setIsLoading] = useState(true)
  // const readingTime = useSelector(educationReadingTimeSelector)
  // const duration = useSelector(educationDurationSelector)

  if (currentUser && !currentUser?.isEmailVerified) {
    history.push('/verify')
  }

  const loadData = useCallback(() => {
    setIsLoading(true)
    setData([])

    const tags = [...selectedTags]
    tabTag !== 'all' && tags.push(tabTag)

    mediaType === 'article' && dispatch(getEducationArticles({
      params: {
        page,
        perPage: 9,
        searchString: searchValue
      },
      body: {
        tags,
      },
      success: ({ data }) => {
        setData(data?.posts)
        setDataType(mediaType)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))

    mediaType === 'video' && dispatch(getEducationVideos({
      params: {
        page,
        perPage: 9,
        search: searchValue
      },
      // body: {
      //   tags,
      // },
      success: ({ data }) => {
        setData(data?.data)
        setDataType(mediaType)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch, mediaType, searchValue, page, tabTag, selectedTags])

  useEffect(() => {
    currentUser && loadData()
  }, [currentUser, loadData])

  return (
    <>
      {!currentUser && <CreateAccountModal />}

      <Container maxWidth="xl">
        <HeroSection />
      </Container>

      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <FilterBar />
        <LevelSection isLoading={isLoading} data={data} mediaType={dataType} />
        <QuizSection />
      </Container>
      <Paywall />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default Education
