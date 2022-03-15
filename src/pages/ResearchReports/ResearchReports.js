import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
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
  const [searchString, setSearchStrinhg] = useState('')
  const alphaList = useSelector(alphaListSelector)
  const total = useSelector(totalPagesSelector)

  const loadData = useCallback(() => {
    const selectedTags = alphaTags?.map(item => item.isSelected && item.text).filter(item => item)

    setIsLoading(true)
    dispatch(getAlphaList({
      params: {
        perPage: perPage !== 'all' ? perPage : null,
        page,
        searchString,
        sort: defaultLabel,
      },
      body: {
        tags: selectedTags?.length > 0 ? selectedTags : ['research']
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, page, perPage, alphaTags, searchString, defaultLabel])

  useEffect(() => {
    alphaTags?.length > 0 && loadData()
  }, [loadData, alphaTags])

  useEffect(() => {
    dispatch(getAlphaTags())
  }, [dispatch])

  return (
    <Box sx={{ px: 5 }}>
      <HeroSection
        defaultLabel={defaultLabel}
        setDefaultLabel={setDefaultLabel}
        searchString={searchString}
        setSearchStrinhg={setSearchStrinhg}
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
    </Box>
  )
}

export default ResearchReports
