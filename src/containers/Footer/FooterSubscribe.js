import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack,
  Link,
  InputBase,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'

const FooterSubscribe = () => {

  const CONTENT = [
    {
      category: "Company",
      data: [
        { to: "#", description: "About Us" },
        { to: "#", description: "Affiliate Program" },
        { to: "#", description: "Careers" },
        { to: "#", description: "Contact Us" },
      ]
    },
    {
      category: "Useful Links",
      data: [
        { to: "#", description: "Portfolio" },
        { to: "#", description: "Position Calculator" },
        { to: "#", description: "Crypto School" },
        { to: "#", description: "Membership Plans" },
      ]
    }
  ]
  
  return (
    <Box>
      <Grid container>
        {
          CONTENT.map((item, index) => {
            const { category, data } = item

            return (
              <Grid item key={index} xs={6}>
                <Box sx={{ my: 3 }}>
                  <Typography variant="subTitle" sx={{ color: "#232A45", fontWeight: 500 }}>{category}</Typography>
                </Box>
                <Stack spacing={2}>
                  {
                    data.map((item, index) => {
                      const { to, description } = item

                      return (
                        <Link href={to} key={index} sx={{ color: "#777" }} underline="hover">{description}</Link>
                      )
                    })
                  }
                </Stack>
              </Grid>
            )
          })
        }
      </Grid>

      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="subTitle" sx={{ color: "#232A45", fontWeight: 500 }}>Subscribe</Typography>
      </Box>
      <Stack direction="row" sx={{ p: 0.5, border: "1px solid #E4E4E4", borderRadius: "2px", maxHeight: 48 }}>
        <InputBase fullWidth placeholder="Enter your email address" sx={{ mx: 1 }} />
        <MButton
          color="success"
          variant="contained"
          sx={{
            px: 3,
            color: "#FFF",
          }}
        >
          Submit
        </MButton>
      </Stack>
    </Box>
  )
}

export default FooterSubscribe
