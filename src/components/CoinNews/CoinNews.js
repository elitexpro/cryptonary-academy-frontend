import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
  Grid,
  Stack,
  Hidden,
  Typography,
  Box,
  Divider,
  IconButton,
  CardActionArea,
  Link,
} from '@mui/material'
import ShowMoreText from "react-show-more-text"
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { LazyImage } from 'components/LazyImage'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isPremium } from 'helpers'

const CoinNews = ({ data, isGlobalSearch }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)

  return (
    <Stack spacing={{ md: 4, xs: 2 }} sx={{ mt: 4, minHeight: `calc(100vh - 705px)` }}>
      {data && data.map((item, index) => {
        const { title, excerpt, content, tagName, updatedAt, featureImage } = item
        const url = !currentUser && isPremium(item.tags) ? `/paywall` : `article/${item?.id}`

        return (
          <Box key={index}>
            <Grid container spacing={{ md: 3, xs: 1 }}>
              <Grid item md={4} xs={4} order={!isGlobalSearch && { md: 1, xs: 2 }}>
                <Hidden mdDown={isGlobalSearch}>
                  <CardActionArea>
                    <LazyImage src={featureImage} />
                  </CardActionArea>
                </Hidden>
              </Grid>
              <Grid item md={8} xs={isGlobalSearch ? 12 : 8} order={!isGlobalSearch && { md: 2, xs: 1 }}>
                <Stack sx={{ maxWidth: 513 }}>
                  <Stack spacing={1}>
                    <Hidden mdDown={!isGlobalSearch}>
                      <Typography variant="subTitle4" color="#4AAF47">
                        {tagName}
                      </Typography>
                    </Hidden>

                    <Typography variant="subTitle1" color="#232A45">
                      <Link
                        component={'span'}
                        onClick={() => history.push(url)}
                        underline="hover"
                        sx={{ color: "#232A45", fontSize: "20x", cursor: "pointer" }}
                      >
                        <ShowMoreText expandByClick={false} more="">
                          {title}
                        </ShowMoreText>
                      </Link>
                    </Typography>

                    <Hidden mdDown={!isGlobalSearch}>
                      <ShowMoreText lines={1} expandByClick={false} more="">
                        {isGlobalSearch ? excerpt : content}
                      </ShowMoreText>
                    </Hidden>
                  </Stack>

                  {isGlobalSearch &&
                    <Box sx={{ display: 'flex', pt: 2 }}>
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
