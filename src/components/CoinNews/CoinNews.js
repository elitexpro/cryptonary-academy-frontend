import React from 'react'
import {
  Grid,
  Stack,
  Hidden,
  Typography,
  Box,
  Divider,
} from '@mui/material'
import NewsSVG from 'assets/image/news.svg'

const NEWS_DATA = [
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  },
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  },
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  },
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  }
]

const CoinNews = () => {
  return (
    <Stack spacing={{ md: 4, xs: 2 }} sx={{ mt: 4 }}>
      {NEWS_DATA.map((item, index) => {
        const { image, title, content } = item

        return (
          <Box key={index}>
            <Grid container spacing={{ md: 3, xs: 1 }}>
              <Grid item xs={4} order={{ md: 1, xs: 2 }}>
                {image}
              </Grid>
              <Grid item xs={8} order={{ md: 2, xs: 1 }}>
                <Stack spacing={1} sx={{ maxWidth: 513 }}>
                  <Hidden mdDown>
                    <Typography variant="subTitle4" color="#4AAF47">Bitcoin BTC</Typography>
                  </Hidden>
                  <Typography variant="subTitle1" color="#232A45">{title}</Typography>
                  <Hidden mdDown>
                    <Typography variant="subTitle4" color="#858585">{content}</Typography>
                  </Hidden>
                </Stack>
              </Grid>
            </Grid>
            <Hidden mdUp>
              <Stack spacing={0.5} direction="row" sx={{ mt: 2 }}>
                <Typography variant="subTitle4" color="#4AAF47">BTC</Typography>
                <Typography variant="subTitle4" color="#909090">/ 3h</Typography>
              </Stack>
              <Divider sx={{ mt: 2 }} />
            </Hidden>
          </Box>
        )
      })}
    </Stack>
  )
}

export default CoinNews
