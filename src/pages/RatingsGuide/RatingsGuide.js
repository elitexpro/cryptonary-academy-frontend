import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'
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
  const currentUser = useSelector(currentUserSelector)
  const [open, setOpen] = useState(!localStorage.getItem('ratings_guide_close'))
  const [openWarning, setOpenWarning] = useState(false)

  return (
    <Box>
      <Box sx={{ background: "linear-gradient(180deg, #F8FCF8 0%, rgba(248, 252, 248, 0) 100%)" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>
      <Container maxWidth="xl">
        {!currentUser ? <BitcoinOverview /> : <RatingsTable />}
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
