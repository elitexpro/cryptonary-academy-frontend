import React from 'react'
import moment from 'moment'
import {
  Grid,
  Stack,
  Hidden,
  Typography,
  Box,
  Divider,
  IconButton,
} from '@mui/material'
import ShowMoreText from "react-show-more-text"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import NewsSVG from 'assets/image/news.svg'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'

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

const CoinNews = ({ data, isGlobalSearch }) => {
  return (
    <Stack spacing={{ md: 4, xs: 2 }} sx={{ mt: 4 }}>
      {(data ? data : NEWS_DATA).map((item, index) => {
        const { image, title, excerpt, content, type, primaryTag, updatedAt } = item

        return (
          <Box key={index}>
            <Grid container spacing={{ md: 3, xs: 1 }}>
              <Grid item md={4} xs={4} order={!isGlobalSearch && { md: 1, xs: 2 }}>
                <Box sx={{ display: !isGlobalSearch && 'none' }}>
                  {image ? image :
                    <LazyLoadImage
                      effect="blur"
                      src={type ? item.attributes.thumbnail.url : item.featureImage}
                      alt=""
                      width="100%"
                    />
                  }
                </Box>
              </Grid>
              <Grid item md={8} xs={isGlobalSearch ? 12 : 8} order={!isGlobalSearch && { md: 2, xs: 1 }}>
                <Stack sx={{ maxWidth: 513, height: '100%' }}>
                  <Stack spacing={1}>
                    <Box sx={{ display: !isGlobalSearch && 'none' }}>
                      <Typography variant="subTitle4" color="#4AAF47">
                        {primaryTag ? primaryTag.name : 'Bitcoin BTC'}
                      </Typography>
                    </Box>

                    <Typography variant="subTitle1" color="#232A45">
                      {type === 'videos' ? item.attributes.title : title}
                    </Typography>

                    <Box sx={{ display: !isGlobalSearch && 'none' }}>
                      <ShowMoreText lines={3} expandByClick={false} more="">
                        {content ? content : type === 'videos' ? item.attributes.description : excerpt}
                      </ShowMoreText>
                    </Box>
                  </Stack>

                  {isGlobalSearch &&
                    <Box sx={{ display: 'flex', pt: 2, alignItems: 'flex-end', height: '100%' }}>
                      <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                        {moment(Date.now()).diff(updatedAt, 'hours')} hours ago
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <IconButton size="small">
                        <BookmarkBorderRoundedIcon />
                      </IconButton>
                    </Box>
                  }
                </Stack>
              </Grid>
            </Grid>
            {!isGlobalSearch &&
              <Hidden mdUp>
                <Stack spacing={0.5} direction="row" sx={{ mt: 2 }}>
                  <Typography variant="subTitle4" color="#4AAF47">BTC</Typography>
                  <Typography variant="subTitle4" color="#909090">/ 3h</Typography>
                </Stack>
                <Divider sx={{ mt: 2 }} />
              </Hidden>
            }
          </Box>
        )
      })}
    </Stack>
  )
}

export default CoinNews
