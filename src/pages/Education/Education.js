import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { Container } from '@mui/material'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import LevelSection from './LevelSection'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'
import { currentUserSelector } from 'redux/modules/auth/selectors'
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
  educationArticlesSelector,
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
  const educationArticles = useSelector(educationArticlesSelector)
  const [data, setData] = useState([])
  const [dataType, setDataType] = useState('article')
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  // const readingTime = useSelector(educationReadingTimeSelector)
  // const duration = useSelector(educationDurationSelector)

  useEffect(() => {
    setData(educationArticles)
  }, [educationArticles])

  if (currentUser && !currentUser?.isEmailVerified) {
    history.push('/verify')
  }

  const tab = useMemo(() => {
    return props.match.params.level
  }, [props])

  const loadData = useCallback(() => {
    setIsLoading(true)
    setData([])

    const tags = [...selectedTags]
    tags.push(tab)

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
        search: searchValue,
      },
      body: {
        category: tags,
      },
      success: ({ data }) => {
        setData(data?.data)
        setDataType(mediaType)
        setIsLoading(false)
      },
      fail: () => {
        // handle error 
      }
    }))
  }, [dispatch, mediaType, searchValue, tab, selectedTags, page])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <>
      <Container maxWidth="xl">
        <HeroSection tab={tab} />
      </Container>

      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <FilterBar />
        <LevelSection isLoading={isLoading} data={data} mediaType={dataType} tag={tab} page={page} setPage={setPage} />
      </Container>
      <Paywall />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default Education
