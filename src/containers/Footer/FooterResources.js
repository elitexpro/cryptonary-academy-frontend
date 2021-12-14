import React from 'react'
import {
  Box,
  Grid,
  Divider,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import SvgResReport from 'assets/image/res-report.svg'
import SvgResBook from 'assets/image/res-book.svg'
import SvgResLink from 'assets/image/res-link.svg'

const FooterResources = () => {
  const resources = [
    { src: SvgResReport, content: 'White-papers/ Reports' },
    { src: SvgResBook, content: 'Book Recommendations' },
    { src: SvgResLink, content: 'Useful Links' },
  ]

  return (
    <Box>
      <Divider sx={{ mt: 6 }} />

      <Box sx={{ display: "flex", mb: 3, mt: 4 }}>
        <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500 }}> Resources </Typography>
      </Box>

      <Grid container spacing={2}>
        {
          resources.map((resource, index) => (
            <Grid item key={index} md={4} xs={12}>
              <MButton
                color="inherit"
                variant="outlined"
                sx={{
                  py: 2.5,
                  pl: 3,
                  color: "#000",
                  borderColor: "#EAEAEA",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  width: "100%",
                  justifyContent: "flex-start",
                  fontSize: {xs: "16px", md: "18px"}
                }}
                startIcon={
                  <Box sx={{ height: {xs: 32, md: 48} }}>
                    <img src={resource.src} alt="" style={{ height: "100%" }}/>
                  </Box>
                }
              >
                { resource.content }
              </MButton>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default FooterResources
