import React from 'react'
import {
  Box,
  Grid,
  Divider,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import resReportImg from 'assets/image/res-report.svg'
import resBookImg from 'assets/image/res-book.svg'
import resLinkImg from 'assets/image/res-link.svg'

const FooterResources = () => {
  const resources = [
    { src: resReportImg, content: 'White-papers/ Reports' },
    { src: resBookImg, content: 'Book Recommendations' },
    { src: resLinkImg, content: 'Useful Links' },
  ]

  return (
    <Box>
      <Divider sx={{ mt: 6 }} />

      <Box sx={{ display: 'flex', mb: 3, mt: 4 }}>
        <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500 }}> Resources </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <MButton color='inherit' size="small">
          View all
        </MButton>
      </Box>

      <Grid container spacing={2}>
        {
          resources.map((resource, index) => (
            <Grid item key={`Resource_${index}`} md={4} xs={12}>
              <MButton
                color='inherit'
                variant='outlined'
                sx={{
                  py: 2.5,
                  pl: 3,
                  color: '#000',
                  borderColor: '#EAEAEA',
                  backgroundColor: '#fff',
                  width: '100%',
                  justifyContent: 'flex-start'
                }}
                startIcon={<img src={resource.src} alt='' style={{ height: '48px' }} />}
              >
                { resource.content }
              </MButton>
            </Grid>
          ))
        }
      </Grid>

      <Divider sx={{ my: 3 }} />
    </Box>
  )
}

export default FooterResources
