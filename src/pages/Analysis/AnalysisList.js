import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
} from '@mui/material'
import { getAlphaList } from 'redux/modules/alpha/actions'
import AlphaList from 'components/AlphaList'
import { MTab } from 'components/CustomMaterial'
import { alphaListSelector, totalPagesSelector } from 'redux/modules/alpha/selectors'

const TABS = [
  { label: 'Technical Analysis', value: 'technical-analysis' },
  { label: 'On-Chain Forensics', value: 'on-chain-forensics' },
]

const AnalysisList = ({ currentTab, setCurrentTab, searchString, defaultLabel }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const alphaList = useSelector(alphaListSelector)
  const total = useSelector(totalPagesSelector)

  const currentPerPage = useMemo(() => {
    return perPage !== 'all' ? perPage : total
  }, [perPage, total])

  const handleChange = (tab) => {
    setCurrentTab(tab)
    setPage(1)
  }

  const loadData = useCallback(() => {
    setIsLoading(true)
    dispatch(getAlphaList({
      params: {
        perPage: currentPerPage,
        page,
        searchString,
        order: defaultLabel,
      },
      body: {
        tags: [
          currentTab
        ]
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, currentTab, searchString, defaultLabel, page, currentPerPage])

  useEffect(() => {
    currentTab && loadData()
  }, [loadData, currentTab])

  return (
    <Box sx={{ mt: 6 }}>
      <MTab
        items={TABS}
        currentTab={currentTab}
        handleChange={handleChange}
        itemStyle={{ maxWidth: '240px !important' }}
      />

      <AlphaList
        isLoading={isLoading}
        data={alphaList}
        total={total}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </Box>
  )
}

export default AnalysisList
