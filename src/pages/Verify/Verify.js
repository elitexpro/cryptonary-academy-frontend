import React from 'react'
import {
  Container,
  Box,
  Stack,
  Link,
  Typography,
} from '@mui/material'
import { SuccessBrand } from 'components/SuccessBrand'

const Verify = () => {

  return (
    <Container maxWidth="xl">
      <Stack justifyContent="center" alignItems="center" sx={{ height: "calc(100vh - 80px)" }}>
        <Box sx={{ maxWidth: '448px', my: 3, textAlign: "center" }}>
          <SuccessBrand />
          <Box sx={{ mb: 5 }}>
            <Typography variant="subTitle3" sx={{ color: "#141414" }}>Verfiy your email address</Typography>
          </Box>
          <Typography variant="subTitle" sx={{ color: "#555" }}>Please check your email for a link to verify your email address.
            Be patient, this may take few minutes. </Typography>
          <Box sx={{ my: 5 }}>
            <Typography variant="subTitle" sx={{ color: "#858585" }}>Haven't received yet ?
              <Link underline="hover" color="#62BE5F" sx={{ cursor: "pointer" }}>Resend Email</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default Verify
