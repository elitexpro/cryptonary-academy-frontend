import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Link,
  CardActionArea,
} from '@mui/material'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router'
import ShowMoreText from "react-show-more-text"
import moment from 'moment'
import { LazyImage } from 'components/LazyImage'
import PremiumImg from 'assets/image/premium-icon.png'
import { BsPersonCircle, BsCalendarFill } from 'react-icons/bs'
import { addToFavourites, removeFromFavourites, removeBookMarkFromFavouritesItem } from 'redux/modules/favourite/actions'
import { setAlphaItemBookMark } from 'redux/modules/alpha/actions'
import { setNewsItemBookMark } from 'redux/modules/news/actions'
import { setEducationItemBookMark } from 'redux/modules/education/actions'
import { setFilteredArticlesItemBookMark } from 'redux/modules/article/actions'
import { BackLoader } from 'components/Loader'

const ArticleItem = ({ data, showPrimaryTag = true, blog, blogTo, tag, relatedTitle }) => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const [isLoading, setIsLoading] = useState(false)

  const url = useMemo(() => {
    let articleUrl = `/article/${data?.id}`
    if (blog && blogTo) {
      articleUrl += `?blog=${blog}&blogTo=${blogTo}`
    }
    if (tag) {
      articleUrl += `&tag=${tag}`
    }
    if (relatedTitle) {
      articleUrl += `&relatedTitle=${relatedTitle}`
    }
    return articleUrl
  }, [data, blog, blogTo, tag, relatedTitle])

  const hours = useMemo(() => {
    return moment(Date.now()).diff(data.updatedAt, 'hours')
  }, [data])

  const handleBookMark = (data) => {
    switch (location.pathname.split('/')[1]) {
      case 'news':
        dispatch(setNewsItemBookMark(data))
        break
      case 'education':
        dispatch(setEducationItemBookMark(data))
        break
      case '':
        dispatch(setFilteredArticlesItemBookMark(data))
        break
      default:
        dispatch(setAlphaItemBookMark(data))
        break
    }
  }

  const handleClickItem = () => {
    setIsLoading(true)
    data?.isBookmarked ?
      dispatch(removeFromFavourites({
        id: data?.bookmarkId,
        success: () => {
          location.pathname.split('/')[1] === 'my-favourites' ?
            dispatch(removeBookMarkFromFavouritesItem({ data })) :
            handleBookMark({ method: 'UNMARKED', data })
          setIsLoading(false)
        }
      }))
      :
      dispatch(addToFavourites({
        params: {
          itemId: data?.id,
          type: 'article'
        },
        success: ({ data }) => {
          handleBookMark({ method: 'MARKED', data: data.data })
          setIsLoading(false)
        }
      }))
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <BackLoader open={isLoading} />
      <Stack spacing={1}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={data.featureImage} borderRadius="4px" />
        </CardActionArea>

        {showPrimaryTag &&
          <Typography variant="subTitle4" sx={{ color: "#4AAF47", pt: 1 }}>
            {data?.primaryTag.name}
          </Typography>
        }

        <Typography variant="subTitle3" >
          <Link
            component={'span'}
            onClick={() => history.push(url)}
            underline="hover"
            sx={{ color: "#232A45", fontSize: "20px", cursor: "pointer" }}
          >
            <ShowMoreText lines={1} expandByClick={false} more="">
              {data?.title}
            </ShowMoreText>
          </Link>
        </Typography>

        <Typography variant="subTitle" sx={{ color: "#858585", height: '40px' }}>
          <ShowMoreText lines={2} expandByClick={false} more="">
            {data?.excerpt}
          </ShowMoreText>
        </Typography>

        <Box sx={{ display: 'flex', pt: 2, alignItems: 'center' }}>
          {currentUser ?
            <Typography variant="subTitle4" sx={{ color: "#858585" }}>
              {hours < 48 ? `${hours} hours ago` : moment(data.updatedAt).format('YYYY-MM-DD')}
            </Typography>
            :
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BsCalendarFill color='#141414' />

              <Typography variant="subTitle4" sx={{ color: "#858585", ml: 0.5 }}>
                {moment(data.updatedAt).format('DD MM YYYY hh:mm')}
              </Typography>
            </Box>
          }
          <Box sx={{ flexGrow: 1 }} />
          {currentUser ?
            <IconButton size="small" onClick={handleClickItem}>
              {data.isBookmarked ? <BookmarkIcon style={{ color: '#141414' }} /> : <BookmarkBorderRoundedIcon />}
            </IconButton>
            :
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BsPersonCircle color='#141414' />

              <Typography variant="subTitle4" sx={{ color: "#858585", ml: 0.5 }}>
                {data.primaryAuthor.name}
              </Typography>
            </Box>
          }
        </Box>
      </Stack>

      {data.isPremium &&
        <img
          src={PremiumImg}
          alt=""
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            zIndex: 1001,
          }}
        />
      }
    </Box>
  )

}

export default ArticleItem