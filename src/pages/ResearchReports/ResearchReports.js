import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
} from '@mui/material'
import HeroSection from './HeroSection'
import AlphaTags from './AlphaTags'
import { Footer } from 'containers/Footer'
import AlphaList from 'components/AlphaList'
import { getAlphaList, getAlphaTags } from 'redux/modules/alpha/actions'
import { alphaListSelector, totalPagesSelector } from 'redux/modules/alpha/selectors'

const ResearchReports = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [perPage, setPerPage] = useState(9)
  const [page, setPage] = useState(1)
  const [alphaTags, setAlphaTags] = useState([])
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [searchString, setSearchString] = useState('')
  const alphaList = useSelector(alphaListSelector)
  const total = useSelector(totalPagesSelector)

  const currntPerPage = useMemo(() => {
    return perPage !== 'all' ? perPage : total
  }, [perPage, total])

  const loadData = useCallback(() => {
    const selectedTags = alphaTags?.map(item => item.isSelected && item.text).filter(item => item)

    setIsLoading(true)
    dispatch(getAlphaList({
      params: {
        perPage: currntPerPage,
        page,
        searchString,
        order: defaultLabel,
      },
      body: {
        tags: selectedTags?.length > 0 ? selectedTags : ['research']
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, page, alphaTags, searchString, defaultLabel, currntPerPage])

  useEffect(() => {
    alphaTags?.length > 0 && loadData()
  }, [loadData, alphaTags])

  useEffect(() => {
    dispatch(getAlphaTags())
  }, [dispatch])

  return (
    <Container maxWidth="xl" sx={{ px: { md: 5, xs: 2 } }}>
      <HeroSection
        defaultLabel={defaultLabel}
        setDefaultLabel={setDefaultLabel}
        searchString={searchString}
        setSearchString={setSearchString}
      />

      <AlphaTags
        isLoading={isLoading}
        alphaTags={alphaTags}
        setAlphaTags={setAlphaTags}
      />

      <AlphaList
        isLoading={isLoading}
        perPage={perPage}
        setPerPage={setPerPage}
        page={page}
        setPage={setPage}
        data={alphaList}
        total={total}
      />
      <Footer minimal={true} />
    </Container>
  )
}

export default ResearchReports
