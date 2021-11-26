import React from 'react'
import {
  Box,
  Typography,
  Divider,
  Stack,
} from '@mui/material'
import SvgQuizMark from 'assets/image/quiz-mark.svg'
import SvgIdeaMark from 'assets/image/idea-mark.svg'

const AdditionalContent = ({ info }) => {
  const { type, title, description } = info
  const tagImg = type === "quiz" ? SvgQuizMark : SvgIdeaMark

  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
      maxWidth="md"
      sx={{ background: "#F8FCF8", p: 2, mt: 3 }}
    >
      <Box>
        <img src={tagImg} alt='img' />
      </Box>
      <Box>
        <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500, mb: 2 }}>
          {title}
        </Typography>

        <Typography variant="subTitle1" sx={{ color: "#555" }}>
          {description}
        </Typography>
      </Box>
    </Stack>
  )
}

export default AdditionalContent
