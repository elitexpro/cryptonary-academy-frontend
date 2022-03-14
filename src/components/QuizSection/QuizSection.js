import React from 'react'
import {
  Box,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import quizImg from 'assets/image/quiz_background.png'

const QuizSection = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundImage: `url(${quizImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          height: { md: 330, xs: 380 }
        }}>
        <Stack sx={{ py: 8, px: 4 }} alignItems="center" justifyContent="center">
          <Typography variant="headTitle2" sx={{ color: "#FFF", mb: 2, fontWeight: 400 }} align="center">
            Not sure where to start from?
          </Typography>
          <Typography variant="subTitle" sx={{ color: "#FFF", maxWidth: 540 }} align="center">
            Cold Storage is the term given to digital wallets held offline
            to protect cryptocurrency funds from fraudulent use by others ...
          </Typography>
          <MButton
            color='success'
            variant='contained'
            sx={{ px: 3, py: 2, mt: 4, color: '#fff', height: 48 }}
          >
            Take Quiz
          </MButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default QuizSection
