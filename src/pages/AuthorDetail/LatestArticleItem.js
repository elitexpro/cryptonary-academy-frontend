import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  IconButton
} from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import ImgAuthorArticle from 'assets/image/author-article.png'

const LatestArticleItem = () => {

  return (
    <Box maxWidth="md" >
      <Grid container spacing={2} sx={{ display: "flex", flexDirection: { md: "row", xs: "row-reverse" } }}>
        <Grid item xs={4}>
          <Box sx={{ maxWidth: 320 }}>
            <img src={ImgAuthorArticle} alt="" style={{ width: "100%" }} />
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Stack spacing={1}>
            <Typography variant="subTitle1" sx={{ color: "#232A45", fontWeight: 500 }}>
              Enjin launched a $100M fund to support Metaverse projects
            </Typography>
            <Typography variant="subTitle" sx={{ color: "#858585" }}>
              Cold Storage is the term given to digital wallets held offline
              to protect cryptocurrency funds from fraudulent use by others ...
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex" }}>
            <Typography variant='subTitle' sx={{ color: "#858585" }}>
              04 Dec 2020 : 15:20
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="small">
              <BookmarkBorderRoundedIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LatestArticleItem
