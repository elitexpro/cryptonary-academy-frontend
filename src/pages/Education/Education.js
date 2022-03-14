import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { Container, Box, Divider } from '@mui/material'
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
  getBeginnerArticles,
  getIntermediateArticles,
  getAdvanceArticles,
} from 'redux/modules/education/actions'
import {
  getBeginnerVideos,
  getIntermediateVideos,
  getAdvanceVideos
} from 'redux/modules/video/actions'
import {
  educationMediaTypeSelector,
  educationSearchValueSelector,
  educationFilteredTagNameSelector,
  beginnerArticleSelector,
  intermediateArticleSelector,
  advanceArticleSelector,
  // educationReadingTimeSelector,
  // educationDurationSelector,
} from 'redux/modules/education/selectors'
import {
  beginnerVideoSelector,
  intermediateVideoSelector,
  advanceVideoSelector
} from 'redux/modules/video/selectors'

const initParams = {
  page: 1,
  perPage: 3,
}

const Education = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const mediaType = useSelector(educationMediaTypeSelector)
  const searchValue = useSelector(educationSearchValueSelector)
  const selectedTags = useSelector(educationFilteredTagNameSelector)
  const beginnerArticles = useSelector(beginnerArticleSelector)
  const intermediateArticles = useSelector(intermediateArticleSelector)
  const advanceArticles = useSelector(advanceArticleSelector)
  const beginnerVideos = useSelector(beginnerVideoSelector)
  const intermediateVideos = useSelector(intermediateVideoSelector)
  const advanceVideos = useSelector(advanceVideoSelector)
  const [beginnerData, setBeginnerData] = useState([])
  const [intermediateData, setIntermediateData] = useState([])
  const [advanceData, setAdvanceData] = useState([])
  const [page, setPage] = useState(1)
  const [levelData, setLevelData] = useState([])
  // const readingTime = useSelector(educationReadingTimeSelector)
  // const duration = useSelector(educationDurationSelector)

  if (currentUser && !currentUser?.isEmailVerified) {
    history.push('/verify')
  }

  const educationLevel = useMemo(() => {
    const levelString = props.match.params.level
    if (levelString) {
      const levelEnums = ['beginner', 'intermediate', 'advance']
      const index = levelEnums.findIndex(item => item === levelString)
      if (index > -1) {
        return levelString
      } else {
        history.push('/education')
      }
    }
  }, [history, props.match.params.level])



  const loadArticleByDifficultLevel = useCallback((level, params) => {
    level === 'beginner' && dispatch(getBeginnerArticles({
      params: {
        ...params,
        search: searchValue
      },
      body: {
        tags: [...selectedTags, level]
      }
    }))
    level === 'intermediate' && dispatch(getIntermediateArticles({
      params: {
        ...params,
        search: searchValue
      },
      body: {
        tags: [...selectedTags, level]
      }
    }))
    level === 'advance' && dispatch(getAdvanceArticles({
      params: {
        ...params,
        search: searchValue
      },
      body: {
        tags: [...selectedTags, level]
      }
    }))
  }, [selectedTags, searchValue, dispatch])

  const loadVideoByDifficultLevel = useCallback((level, params) => {
    level === 'beginner' && dispatch(getBeginnerVideos({ params: { ...params, difficulty_level: level } }))
    level === 'intermediate' && dispatch(getIntermediateVideos({ params: { ...params, difficulty_level: level } }))
    level === 'advance' && dispatch(getAdvanceVideos({ params: { ...params, difficulty_level: level } }))
  }, [dispatch])

  const loadData = useCallback(async () => {
    if (mediaType === 'unset' || mediaType === 'both' || mediaType === 'article') {
      loadArticleByDifficultLevel("beginner", initParams)
      loadArticleByDifficultLevel("intermediate", initParams)
      loadArticleByDifficultLevel("advance", initParams)
    }

    if (mediaType === 'unset' || mediaType === 'both' || mediaType === 'video') {
      loadVideoByDifficultLevel("beginner", initParams)
      loadVideoByDifficultLevel("intermediate", initParams)
      loadVideoByDifficultLevel("advance", initParams)
    }
  }, [loadArticleByDifficultLevel, loadVideoByDifficultLevel, mediaType])

  const loadDataByLevel = useCallback(async (level, params) => {
    if (mediaType === 'unset' || mediaType === 'both' || mediaType === 'article') {
      loadArticleByDifficultLevel(level, params)
    }
    if (mediaType === 'unset' || mediaType === 'both' || mediaType === 'video') {
      loadVideoByDifficultLevel(level, params)
    }
  }, [loadArticleByDifficultLevel, loadVideoByDifficultLevel, mediaType])

  useEffect(() => {
    !educationLevel && currentUser && loadData()
  }, [currentUser, educationLevel, loadData])

  useEffect(() => {
    educationLevel && currentUser && loadDataByLevel(educationLevel, { page, perPage: 9 })
  }, [currentUser, educationLevel, page, loadDataByLevel])

  const combineVideosAndArticles = (articles = [], videos = []) => {
    const res = articles.map(item => ({
      type: "articles",
      attributes: item,
    })).concat(videos)

    res.sort((a, b) => {
      const nameA = a.attributes.title
      const nameB = b.attributes.title

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })

    return res
  }

  useEffect(() => {
    setBeginnerData(combineVideosAndArticles(
      mediaType === 'video' ? [] : beginnerArticles, mediaType === 'article' ? [] : beginnerVideos
    ))
  }, [mediaType, beginnerArticles, beginnerVideos])

  useEffect(() => {
    setIntermediateData(combineVideosAndArticles(
      mediaType === 'video' ? [] : intermediateArticles, mediaType === 'article' ? [] : intermediateVideos
    ))
  }, [mediaType, intermediateArticles, intermediateVideos])

  useEffect(() => {
    setAdvanceData(combineVideosAndArticles(
      mediaType === 'video' ? [] : advanceArticles, mediaType === 'article' ? [] : advanceVideos
    ))
  }, [mediaType, advanceArticles, advanceVideos])

  useEffect(() => {
    if (educationLevel) {
      switch (educationLevel) {
        case 'beginner':
          setLevelData(beginnerData)
          break
        case 'intermediate':
          setLevelData(intermediateData)
          break
        case 'advance':
          setLevelData(advanceData)
          break
        default:
          break
      }
    }
  }, [educationLevel, beginnerData, intermediateData, advanceData])

  return (
    <>
      {!currentUser && <CreateAccountModal />}
      <Box sx={{ background: "linear-gradient(180deg, #F8FCF8 0%, rgba(248, 252, 248, 0) 100%)" }}>
        <Container maxWidth="xl">
          <HeroSection level={educationLevel} />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <FilterBar isLevelFilter={!!educationLevel} />
        {
          educationLevel ?
            <>
              <LevelSection level={educationLevel} data={levelData} hideSectionHeader />
            </>
            :
            <>
              <LevelSection level="beginner" data={beginnerData.slice(0, 3)} />
              <Divider sx={{ my: 4 }} />
              <LevelSection level="intermediate" data={intermediateData.slice(0, 3)} />
              <QuizSection />
              <LevelSection level="advance" data={advanceData.slice(0, 3)} />
            </>
        }
      </Container>
      <Paywall />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default Education
