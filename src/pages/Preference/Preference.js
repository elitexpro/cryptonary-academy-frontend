import React, { useState } from 'react'
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import SwipeableViews from 'react-swipeable-views'
import { QuizItem } from 'components/QuizItem'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const quizGroup = [
  {
    step: 0,
    quiz: 'How much do you know about cryptocurrencies?',
    fullWidth: true,
    type: 'single',
    answer: [
      { value: 0, text: 'A little bit' },
      { value: 1, text: 'I have basic knowledge' },
      { value: 2, text: 'I am an expert' },
    ]
  },
  {
    step: 1,
    quiz: 'What are your Crypto goals ?',
    type: 'single',
    fullWidth: false,
    answer: [
      { value: 0, text: 'A source of income' },
      { value: 1, text: 'Want to stay ahead of the curve' },
      { value: 2, text: 'Growth' },
      { value: 3, text: 'Preserve my savings' },
      { value: 4, text: 'Something else' },
      { value: 5, text: 'Speculation' },
    ]
  },
  {
    step: 2,
    quiz: 'Follow your interests',
    type: 'multi',
    fullWidth: false,
    description: 'Choose a few of your favorite topics',
    answer: [
      { value: 0, text: 'Blockchain' },
      { value: 1, text: 'Mining' },
      { value: 2, text: 'Altcoins' },
      { value: 3, text: 'Fiat' },
      { value: 4, text: 'Bitcoin' },
      { value: 5, text: 'DeFi' },
      { value: 6, text: 'Centralized' },
      { value: 7, text: 'FUD' },
      { value: 8, text: 'NFT' },
      { value: 9, text: 'Bullish' },
      { value: 10, text: 'Bitcoin' },
      { value: 11, text: 'Mining' },
      { value: 12, text: 'Wallet' },
    ]
  },
  {
    step: 3,
    quiz: 'Select your preferred media type ?',
    type: 'single',
    fullWidth: false,
    answer: [
      { value: 0, text: 'Video Only' },
      { value: 1, text: 'Text Only' },
      { value: 2, text: 'Both' },
    ]
  },
]

const Preference = () => {
  const [index, setIndex] = useState(0)

  const handleClickNext = () => {
    setIndex(index + 1)
  }

  const handleClickBack = () => {
    setIndex(index - 1)
  }

  return (
    <Box sx={{ px: { md: 0, xs: 2 }, flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item md={12} xs={12}>
          <Stack sx={{ minHeight: { md: "calc(100vh - 80px)" } }} justifyContent="center" alignItems="center">
            <Box sx={{ textAlign: { md: "center", xs: "left" }, maxWidth: 850, my: 4 }}>
              <Typography variant="subTitle4" color="#858585">{index + 1} / 4</Typography>
              <SwipeableViews
                index={index}
                onChangeIndex={val => setIndex(val)}
              >
                {
                  quizGroup.map((item, key) => {
                    const { step, quiz, answer, description, type } = item

                    return (
                      <Box key={key} sx={{ display: step !== index && 'none' }}>
                        <Box sx={{ mb: 5 }}>
                          <Typography fontSize={{ md: 32, xs: 20 }} color="#141414" fontWeight={500} sx={{ mb: 2 }}>{quiz}</Typography>
                          {description && <Typography variant="subTitle" color="#555">{description}</Typography>}
                        </Box>
                        <Grid container spacing={2} sx={{ justifyContent: { md: "center", xs: "left" } }}>
                          {
                            answer.map((answerItem, key) => {
                              const { text } = answerItem

                              return (
                                <Grid item md={index === 0 && 8} xs="auto" key={key}>
                                  <QuizItem
                                    content={text}
                                    type={type}
                                    index={index}
                                  />
                                </Grid>
                              )
                            })
                          }
                        </Grid>

                        <Box sx={{ mt: 10, textAlign: 'center', display: "flex", justifyContent: "center" }}>
                          {
                            index > 0 &&
                            <IconButton sx={{ width: 48, height: 48, mr: 1 }} onClick={handleClickBack}>
                              <ArrowBackRoundedIcon style={{ fontSize: '24px' }} color='inherit' />
                            </IconButton >
                          }

                          {
                            index < 3 &&
                            <MButton
                              color='success'
                              variant='outlined'
                              fullWidth
                              sx={{
                                fontSize: 18,
                                height: 48,
                                width: { md: 160 },
                                px: 2
                              }}
                              endIcon={<ArrowForwardRoundedIcon style={{ fontSize: '24px' }} color='success' />}
                              onClick={handleClickNext}
                            >
                              Next
                            </MButton>
                          }

                          {index === 3 &&
                            <MButton
                              color='success'
                              variant='contained'
                              sx={{
                                px: 4,
                                height: 48,
                                color: "#fff",
                                fontSize: 15,
                                width: { md: 240 },
                              }}
                              fullWidth
                            >
                              Show recommendations
                            </MButton>
                          }

                        </Box>
                      </Box>
                    )
                  })
                }
              </SwipeableViews>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Preference
