import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Hidden,
  Typography,
  Stack,
  IconButton,
  Link,
  Divider,
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { BackLoader } from 'components/Loader'
import { CRYPTONARY_TWITTER, CRYPTONARY_FACEBOOK } from 'helpers/utils'
import { FiFacebook, FiTwitter, FiLink } from "react-icons/fi"
import { setArticleItemBookMark } from 'redux/modules/article/actions'
import { addToFavourites, removeFromFavourites } from 'redux/modules/favourite/actions'

const ArticleInfo = ({ article, isLoading, setIsloading }) => {
  const dispatch = useDispatch()

  const social_items = [
    { to: "#", icon: <FiLink style={{ color: "#141414", fontSize: 22 }} /> },
    { to: CRYPTONARY_TWITTER, icon: <FiTwitter style={{ color: "#141414", fontSize: 22 }} /> },
    { to: CRYPTONARY_FACEBOOK, icon: <FiFacebook style={{ color: "#141414", fontSize: 22 }} /> },
  ]

  const bookMarkIcon = article?.isBookmarked ?
    <BookmarkIcon style={{ color: "#141414", fontSize: 22 }} /> :
    <BookmarkBorderIcon style={{ color: "#141414", fontSize: 22 }} />

  const handleClick = (to) => {
    window.open(to)
  }

  const handleBookMark = () => {
    setIsloading(true)
    article?.isBookmarked ?
      dispatch(removeFromFavourites({
        id: article?.bookmarkId,
        success: () => {
          dispatch(setArticleItemBookMark({ method: 'UNMARKED' }))
          setIsloading(false)
        }
      }))
      :
      dispatch(addToFavourites({
        params: {
          itemId: article?.id,
          type: 'article'
        },
        success: ({ data }) => {
          dispatch(setArticleItemBookMark({ method: 'MARKED', data: data.data }))
          setIsloading(false)
        }
      }))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "column", xs: "column-reverse" },
        minWidth: 200
      }}
    >
      <BackLoader open={isLoading} />
      <Box sx={{ height: 40, display: "flex" }}>
        <Box sx={{ display: "flex", width: '100%' }}>
          <Hidden mdDown>
            <Box sx={{ flexGrow: 1 }} />
          </Hidden>

          <Stack spacing={1} direction="row">
            {
              social_items.map((item, index) => {
                const { to, icon } = item
                return (
                  <IconButton
                    key={index}
                    sx={{ width: 40, height: 40, background: '#F8F8F8', borderRadius: '50%' }}
                    onClick={() => handleClick(to)}
                  >
                    {icon}
                  </IconButton>
                )
              })
            }

            <Hidden mdDown>
              <IconButton
                sx={{ width: 40, height: 40, background: '#F8F8F8', borderRadius: '50%' }}
                onClick={handleBookMark}
              >
                {bookMarkIcon}
              </IconButton>
            </Hidden>
          </Stack>
        </Box>

        <Hidden mdUp>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ width: 40, height: 40 }}>
            <BookmarkBorderIcon style={{ color: "#4AAF47" }} />
          </IconButton>
        </Hidden>
      </Box>

      <Hidden mdUp>
        <Divider sx={{ my: 2 }} />
      </Hidden>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "column", xs: "row" },
          textAlign: { md: "right", xs: "left" },
          mt: { md: 3, xs: 2 }
        }}
      >
        <Typography variant="subTitle" sx={{ color: "#555" }}>
          by <Typography variant="subTitle" sx={{ color: "#141414", fontWeight: 500 }}>
            <Link
              component={RouterLink}
              to={`/author/${article?.primaryAuthor?.id}`}
              underline="hover"
              sx={{ color: "#232A45" }}
            >
              {article?.primaryAuthor?.name}
            </Link>
          </Typography>
        </Typography>
        <Hidden mdUp>
          <Box sx={{ flexGrow: 1 }} />
        </Hidden>
        <Typography
          variant="subTitle"
          sx={{ color: "#858585", mt: { md: 2, xs: 0 } }}>
          {moment(article?.publishedAt).format('DD MMM YYYY : kk:mm')}
        </Typography>
        {article?.publishedAt !== article?.updatedAt &&
          <Typography
            variant="subTitle"
            sx={{ color: "#858585", mt: { md: 2, xs: 0 } }}>
            Updated : {moment(article?.updatedAt).format('DD MMM YYYY : kk:mm')}
          </Typography>
        }
        <Hidden mdDown>
          <Typography
            variant="subTitle"
            sx={{ color: "#858585", mt: { md: 2, xs: 0 } }}>
            2 min read
          </Typography>
        </Hidden>
      </Box>
    </Box >
  )
}

export default ArticleInfo
