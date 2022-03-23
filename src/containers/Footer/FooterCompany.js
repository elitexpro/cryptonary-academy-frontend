import React from 'react'
import {
  Box,
  Typography,
  Link,
  Stack,
  Divider,
  Hidden,
} from '@mui/material'
import { Logo } from 'components/Logo'
import HyphenSVG from 'assets/image/hyphen.svg'

const FooterCompany = () => {

  const RELATIVE_PAGES = [
    { name: "Terms", to: "/terms-conditions" },
    { name: "Privacy", to: "/privacy-policy" },
    { name: "Cookies", to: "/cookie-policy" },
  ]

  return (
    <Box>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ mb: 4, display: { xs: "block", md: "flex" } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{
            mb: { xs: 2, md: 0 }
          }}
        >
          <Logo />
          <Typography variant="subTitle2" sx={{ fontWeight: 500, color: "#777" }}>
            © {new Date().getFullYear()}
          </Typography>
        </Stack>

        <Hidden mdDown>
          <Box sx={{ flexGrow: 1 }} />
        </Hidden>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          divider={<img src={HyphenSVG} alt=""/>}
        >
          {
            RELATIVE_PAGES.map((page, index) => (
              <Link
                href={page.to}
                key={index}
                sx={{ fontWeight: 500, color: "#777" }}
                underline="hover"
              >
                {page.name}
              </Link>
            ))
          }
        </Stack>
      </Box>
    </Box>
  )
}

export default FooterCompany
