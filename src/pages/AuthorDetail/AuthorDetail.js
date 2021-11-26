import React from 'react'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  Divider,
} from '@mui/material'
import { MBreadcrumbs } from 'components/CustomMaterial'
import ImgAuthorDetail from 'assets/image/author-detail.png'
import { Footer } from 'containers/Footer'
import AUTHOR_DATA from './authorDetailMockup.json'
import LatestArticles from './LatestArticles'

const AuthorDetail = () => {
  const detailRoot = [
    { text: 'Home', to: '#' },
    { text: 'Author', to: '#' },
    { text: 'Research', to: '#' },
    { text: 'Ruben Rosser' },
  ]

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
      </Hidden>

      <Box sx={{ display: { xs: "block", sm: "flex" }, mt: 5 }}>
        <Box sx={{ minWidth: 200 }}>
          <img src={ImgAuthorDetail} alt='author' style={{ width: '100%' }} />
        </Box>
        <Stack spacing={2} sx={{ maxWidth: 560, mt: { xs: 2, sm: 0 }, ml: { xs: 0, sm: 3 } }}>
          <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
            {AUTHOR_DATA.name}
          </Typography>
          <Typography variant="subTitle3" sx={{ color: "#555" }}>
            {AUTHOR_DATA.job} <Typography variant="subTitle1" sx={{ color: "#141414" }}>@ Cryptonary</Typography>
          </Typography>
          <Typography variant="subTitle" sx={{ color: "#555" }}>
            {AUTHOR_DATA.description}
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Box sx={{ maxWidth: { md: 220, xs: "100%" }, mr: { xs: 0, md: 3 } }}>
          <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>
            Latest articles from {AUTHOR_DATA.name}
          </Typography>
          <Hidden mdUp>
            <Divider sx={{ my: 3 }} />
          </Hidden>
        </Box>
        <LatestArticles />
      </Box>
      <Footer />
    </Container >
  )
}

export default AuthorDetail
