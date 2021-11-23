import React from 'react'
import useStyles from './styles.js'
import {
  Hidden,
  Box,
} from '@mui/material'
import quizImg from 'assets/image/quiz_background.png'
import quizMobImg from 'assets/image/quiz_mob_background.png'
import { MButton } from 'components/CustomMaterial'

const QuizSection = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.quizBox}>
        <Box className={classes.quizArea}>
          <div>
            <div className={classes.quizTitle}>
              Not sure where to start from?
            </div>
            <div className={classes.quizContent}>
              Cold Storage is the term given to digital wallets held offline
              to protect cryptocurrency funds from fraudulent use by others ...
            </div>
            <MButton
              color='success'
              variant='contained'
              sx={{ px: 3, py: 2, mt: 4, color: '#fff' }}
            >
              Take Quiz
            </MButton>
          </div>
        </Box>
        <div style={{ position: 'relative' }}>
          <Hidden mdDown>
            <img src={quizImg} alt='' style={{ width: '100%', position: 'absolute', zIndex: '-1', height: '330px' }} />
          </Hidden>
          <Hidden mdUp>
            <img src={quizMobImg} alt='' style={{ width: '100%', position: 'absolute', zIndex: '-1', height: '380px' }} />
          </Hidden>
        </div>
      </Box>
    </>
  )
}

export default QuizSection
