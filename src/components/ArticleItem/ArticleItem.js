import React, { useMemo } from 'react'
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Link,
  CardActionArea,
} from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { useHistory } from 'react-router-dom'
import ShowMoreText from "react-show-more-text"
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { isPremium } from 'helpers'
import moment from 'moment'
import { LazyImage } from 'components/LazyImage'

const ArticleItem = ({ data, showPrimaryTag = true }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const url = useMemo(() => {
    return !currentUser && isPremium(data.tags) ? `/paywall` : `/article/${data?.id}`
  }, [currentUser, data])

  return (
    <Box>
      <Stack spacing={1}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={data.featureImage} />
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
              {data.title}
            </ShowMoreText>
          </Link>
        </Typography>

        <Typography variant="subTitle" sx={{ color: "#858585", height: '40px' }}>
          <ShowMoreText lines={2} expandByClick={false} more="">
            {data.excerpt}
          </ShowMoreText>
        </Typography>

        <Box sx={{ display: 'flex', pt: 2 }}>
          <Typography variant="subTitle4" sx={{ color: "#858585" }}>
            {moment(Date.now()).diff(data.updatedAt, 'hours')} hours ago
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="small">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  )

}

export default ArticleItem