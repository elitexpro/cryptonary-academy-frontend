import React, { useState, useEffect } from 'react'
import { styled } from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  Tabs,
  Tab,
  Box,
} from '@mui/material'
import { getAlphaList } from 'redux/modules/alpha/actions'
import AlphaList from 'components/AlphaList'
import { alphaListSelector, totalPagesSelector } from 'redux/modules/alpha/selectors'

const CustomTab = styled(Tab)(() => {
  return {
    textTransform: 'none !important',
    fontSize: 14,
    fontWeight: 400,
    minWidth: 120,
    maxWidth: 200
  }
})

const AnalysisList = ({ currentTab, setCurrentTab, searchString, defaultLabel }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const alphaList = useSelector(alphaListSelector)
  const total = useSelector(totalPagesSelector)

  const handleChange = (e, tab) => {
    setCurrentTab(tab)
    setPage(1)
  }

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAlphaList({
      params: {
        perPage: perPage !== 'all' ? perPage : null,
        page,
        searchString,
        sort: defaultLabel,
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
  }, [dispatch, currentTab, searchString, defaultLabel, perPage, page])

  return (
    <Box sx={{ mt: 6 }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="fullWidth"
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            background: "#4AAF47",
            height: 1
          }
        }}
      >
        <CustomTab label="Technical Analysis" value="technical-analysis" />
        <CustomTab label="On-Chain Forensics" value="on-chain-forensics" />
      </Tabs>

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
