import React from 'react'
import {
  Stack,
  Typography,
  Box,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'

const BlackSection = () => {

  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ py: { md: 10, xs: 4 }, background: "#141414" }}
    >
      <Typography variant="headTitle2" sx={{ color: "#fff", maxWidth: 720, textAlign: "center", fontSize: { sm: "40px", xs: "32px" } }} >
        Cryptonary can help whether you’re an industry veteran or a crypto newbie
      </Typography>

      <Typography variant="subTitle1" sx={{ color: "#fff", maxWidth: 600, textAlign: "center" }}>
        Cold Storage is the term given to digital wallets held offline to protect cryptocurrency funds from fraudulent use by others
      </Typography>

      <Box sx={{ pt: 4 }}>
        <MButton
          color='success'
          variant='contained'
          sx={{
            py: 1.5, px: 6,
            color: "#fff",
            fontSize: '18px',
          }}
        >
          Get Started - its free
        </MButton>
      </Box>
    </Stack>
  )
}

export default BlackSection
