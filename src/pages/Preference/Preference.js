import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  Box,
  Grid,
  IconButton,
} from '@mui/material'
import {
  MButton,
} from 'components/CustomMaterial'
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
    quiz: 'Select your prefered media type ?',
    type: 'single',
    fullWidth: false,
    answer: [
      { value: 0, text: 'Video Only' },
      { value: 1, text: 'Text Only' },
      { value: 2, text: 'Both' },
    ]
  },
]

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

const Preference = () => {
  const classes = useStyles()
  const [index, setIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)

  const handleClickNext = () => {
    setIsNext(true)
    setIndex(index + 1)
  }

  const handleClickBack = () => {
    setIsNext(false)
    setIndex(index - 1)
  }

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={12} xs={12}>
            <div className={classes.center}>
              <div className={classes.fieldArea}>
                <p className={classes.steper}>{index + 1} / 4</p>
                <SwipeableViews
                  axis={isNext ? 'x' : 'x-reverse'}
                  index={index}
                  sx={{ p: 0 }}
                  onChangeIndex={val => setIndex(val)}
                >
                  {
                    quizGroup.map((item, key) => {
                      const { step, quiz, answer, description, fullWidth } = item

                      return (
                        <TabPanel value={index} index={step} key={key}>
                          <p className={classes.title}>{quiz}</p>
                          {description && <p className={classes.description}>{description}</p>}
                          <Grid container spacing={2} className={classes.gridArea}>
                            {
                              answer.map((answerItem, ind) => {
                                const { text } = answerItem

                                return (
                                  <Grid item xs='auto' key={ind}>
                                    <QuizItem
                                      content={text}
                                      type={fullWidth ? 'big' : 'small'}
                                    />
                                  </Grid>
                                )
                              })
                            }
                          </Grid>

                          <Box sx={{ mt: 10, textAlign: 'center' }}>
                            {
                              index > 0 &&
                              <IconButton className={classes.backBtn} onClick={handleClickBack}>
                                <ArrowBackRoundedIcon style={{ fontSize: '24px' }} color='inherit' />
                              </IconButton >
                            }

                            {
                              index < 3 &&
                              <MButton
                                color='success'
                                variant='outlined'
                                className={classes.nextBtn}
                                sx={{ px: 2 }}
                                endIcon={<ArrowForwardRoundedIcon style={{ fontSize: '24px' }} color='success' />}
                                onClick={handleClickNext}
                              >
                                Next
                              </MButton>
                            }

                          </Box>
                        </TabPanel>
                      )
                    })
                  }
                </SwipeableViews>
              </div>
            </div>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Preference
