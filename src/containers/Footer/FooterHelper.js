import React from 'react'
import {
  Typography,
  Link,
  Stack,
} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const FooterHelper = () => {
  return (
    <Stack sx={{ mt: 4, py: 4, px: 2, backgroundColor: "#F8F8F8" }} alignItems="center" spacing={2}>
      <Typography variant="h3" sx={{ color: "#141414", fontWeight: 500 }} align="center">
        Didn’t find what you were looking for?
      </Typography>

      <Typography variant="subTitle" sx={{ color: "#858585" }} align="center">
        Need help? Found a bug? Have an idea? Contact our friendly Support Team! We’d be happy to help.
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          py: 3,
          backgroundColor: "#FFF",
          borderColor: "#EAEAEA",
          borderRadius: "4px",
          maxWidth: 480,
          width: "100%"
        }}
      >
        <EmailOutlinedIcon sx={{ fill: "#62BE5F", mr: 2 }} />
        <Link href="#" underline="hover" color="#555">support@cryptonary.com</Link>
      </Stack>
    </Stack>
  )
}

export default FooterHelper
