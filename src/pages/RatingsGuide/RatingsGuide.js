import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Box,
  Modal,
  Stack,
  Typography,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Alert,
} from '@mui/material'
import { getCoinRatingList, getCoinRatingTypeList } from 'redux/modules/coin/actions'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import HeroSection from './HeroSection'
import BitcoinOverview from './BitcoinOverview'
import RatingsTable from './RatingsTable'
import { Paywall } from 'containers/Paywall'
import { Footer } from 'containers/Footer'
import { MButton } from 'components/CustomMaterial'

const DISCLAIMER = [
  `I agree that this guide does not represent financial advice nor any type of financial recommendation.
    If I do use this guide for assistance in any capital-related decision, I declare that any result is my full responsibility.`,
  `I understand that this guide is not price-specific but rather rates projects from a fundamental perspective.`,
  `I understand that this guide does not take into consideration the vulnerability to hacks or smart contracts risks.`,
  `I understand that this guide judges all digital assets through the same metrics and it may be possible that one size does not fit all.`,
]

const RatingsGuide = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const [open, setOpen] = useState(!localStorage.getItem('ratings_guide_close'))
  const [openWarning, setOpenWarning] = useState(false)
  const [defaultLabel, setDefaultLabel] = useState('Sort By')
  const [searchString, setSearchString] = useState('')
  const [types, setTypes] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [flag, setFlag] = useState(0)

  const filters = useMemo(() => {
    let filteredTypes = types?.map(item => item.isSelected ? item.id : null)
    filteredTypes = filteredTypes?.filter(item => item)

    let copyFilters = {}
    copyFilters['filteredTypes'] = filteredTypes
    copyFilters['defaultLabel'] = defaultLabel === 'Sort By' ? '' : defaultLabel
    copyFilters['searchString'] = searchString

    return copyFilters
  }, [types, defaultLabel, searchString])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getCoinRatingTypeList({
      success: ({ data }) => {
        const formattedTypes = data.data && data.data.map(item => {
          const { name } = item.attributes

          return {
            name,
            isSelected: false,
            id: item.id
          }
        })

        setTypes(formattedTypes)
        setFlag(prev => prev + 1)
      }
    }))
  }, [dispatch])

  const getCoinRatingListData = useCallback(() => {
    dispatch(getCoinRatingList({
      params: {
        page: currentPage,
        coinType: filters?.filteredTypes?.join(','),
        order: filters?.defaultLabel,
        coinName: filters?.searchString
      },
      success: () => {
        setFlag(prev => prev + 1)
      }
    }))
  }, [dispatch, currentPage, filters])

  useEffect(() => {
    types && getCoinRatingListData()
  }, [types, currentPage, getCoinRatingListData])

  useEffect(() => {
    if (flag === 2) {
      setIsLoading(false)
      setFlag(0)
    }
  }, [flag])

  return (
    <Box>
      <Box sx={{ background: "linear-gradient(180deg, #F8FCF8 0%, rgba(248, 252, 248, 0) 100%)" }}>
        <Container maxWidth="xl">
          <HeroSection
            defaultLabel={defaultLabel}
            setDefaultLabel={setDefaultLabel}
            setSearchString={setSearchString}
            searchString={searchString}
          />
        </Container>
      </Box>
      <Container maxWidth="xl">
        {
          !currentUser ?
            <BitcoinOverview /> :
            <RatingsTable
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              types={types}
              setTypes={setTypes}
              isLoading={isLoading}
            />
        }
      </Container>
      {!currentUser && <Paywall />}
      <Container maxWidth="xl">
        <Footer minimal={currentUser ? true : false} />
      </Container>

      <Modal
        open={open}
        disableEscapeKeyDown
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            position: 'absolute',
            top: { md: '50%', xs: '100%' },
            left: '50%',
            transform: { md: 'translate(-50%, -50%)', xs: 'translate(-50%, -100%)' },
            px: { md: 6, xs: 2 },
            py: { md: 4, xs: 3 },
            width: { xs: '100%', md: 'auto' },
            border: 'none',
          }}
        >
          <Stack spacing={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subTitle3" color="#141414">Disclaimer</Typography>
            </Box>

            {openWarning &&
              <Box sx={{ px: { md: 4 } }}>
                <Alert severity="warning">
                  Agreeeing to the disclaimer is mandatory to view Ratings Guide
                </Alert>
              </Box>
            }

            <FormControl component="fieldset">
              <FormGroup>
                {DISCLAIMER.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          color="success"
                          defaultChecked
                          sx={{
                            p: 0,
                            mr: 2
                          }}
                        />
                      }
                      label={item}
                      sx={{ mb: 3, alignItems: 'flex-start', mx: 0 }}
                    />
                  )
                })}
              </FormGroup>
            </FormControl>

            <Stack direction="row" spacing={3} sx={{ justifyContent: { md: 'flex-end', xs: 'center' } }}>
              <MButton
                variant="outlined"
                color="error"
                sx={{
                  color: '#EA260B',
                  px: 6,
                  py: 1,
                  width: { xs: '100%', md: 'auto' }
                }}
                onClick={() => setOpenWarning(true)}
              >Decline</MButton>

              <MButton
                variant="contained"
                color="success"
                sx={{
                  color: '#FFFFFF',
                  px: 6,
                  py: 1,
                  width: { xs: '100%', md: 'auto' }
                }}
                onClick={() => {
                  setOpen(false)
                  setOpenWarning(false)
                  localStorage.setItem('ratings_guide_close', true)
                }}
              >Accept</MButton>
            </Stack>
          </Stack>
        </Box>
      </Modal >
    </Box >
  )
}

export default RatingsGuide
