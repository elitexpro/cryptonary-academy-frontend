import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { LazyImage } from 'components/LazyImage'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isPremium } from 'helpers'
import { addToFavourites, removeFromFavourites, removeBookMarkFromFavouritesItem } from 'redux/modules/favourite/actions'
import { setFilteredArticlesItemBookMark } from 'redux/modules/article/actions'
import { BackLoader } from 'components/Loader'

const CoinNews = ({ data, isGlobalSearch }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const currentUser = useSelector(currentUserSelector)
  const [isLoading, setIsLoading] = useState(false)

  const handleClickItem = (item) => () => {
    setIsLoading(true)
    item?.isBookmarked ?
      dispatch(removeFromFavourites({
        id: item?.bookmarkId,
        success: () => {
          location.pathname.split('/')[1] === 'my-favourites' ?
            dispatch(removeBookMarkFromFavouritesItem({ data: item })) :
            dispatch(setFilteredArticlesItemBookMark({ method: 'UNMARKED', data: item }))
          setIsLoading(false)
        }
      }))
      :
      dispatch(addToFavourites({
        params: {
          itemId: item?.id,
          type: 'article'
        },
        success: ({ data }) => {
          dispatch(setFilteredArticlesItemBookMark({ method: 'MARKED', data: data.data }))
          setIsLoading(false)
        }
      }))
  }

  return (
    <>
      {isLoading ? <BackLoader open={isLoading} /> :
        <Stack spacing={{ md: 4, xs: 2 }} sx={{ mt: 4, minHeight: `calc(100vh - 705px)` }}>
          {data && data.map((item, index) => {
            const { title, excerpt, content, tagName, updatedAt, featureImage, isBookmarked } = item
            const hours = moment(Date.now()).diff(updatedAt, 'hours')
            const itemLink = tagName === 'Videos' ? `/video/${item.id}` : `/article/${item.id}`
            const url = !currentUser && isPremium(item.tags) ? `/paywall` : itemLink

            return (
              <Box key={index}>
                <Grid container spacing={{ md: 3, xs: 1 }}>
                  <Grid item md={4} xs={4} order={!isGlobalSearch && { md: 1, xs: 2 }}>
                    <Hidden mdDown={isGlobalSearch}>
                      <CardActionArea onClick={() => history.push(url)}>
                        <LazyImage src={featureImage} />
                      </CardActionArea>
                    </Hidden>
                  </Grid>
                  <Grid item md={8} xs={isGlobalSearch ? 12 : 8} order={!isGlobalSearch && { md: 2, xs: 1 }}>
                    <Stack sx={{ maxWidth: 513, height: '100%' }}>
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
                          <ShowMoreText lines={isGlobalSearch ? 3 : 1} expandByClick={false} more="">
                            {isGlobalSearch ? excerpt : content}
                          </ShowMoreText>
                        </Hidden>
                      </Stack>

                      <Box sx={{ flexGrow: 1 }} />

                      {isGlobalSearch &&
                        <Box sx={{ display: 'flex', pt: 2 }}>
                          <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                            {hours < 48 ? `${hours} hours ago` : moment(updatedAt).format('YYYY-MM-DD')}
                          </Typography>
                          <Box sx={{ flexGrow: 1 }} />
                          <IconButton size="small" onClick={handleClickItem(item)}>
                            {isBookmarked ? <BookmarkIcon style={{ color: '#141414' }} /> : <BookmarkBorderRoundedIcon />}
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
      }
    </>
  )
}

export default CoinNews
