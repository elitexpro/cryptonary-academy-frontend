import React from 'react'
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Link,
} from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { useHistory } from 'react-router-dom'
import ShowMoreText from "react-show-more-text"
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { isPremium } from 'helpers'
import moment from 'moment'
import { LazyImage } from 'components/LazyImage'

const ArticleItem = ({ data }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)

  return (
    <Box>
      <Stack spacing={1}>
        <LazyImage src={data.featureImage} height={220} />

        <Typography variant="subTitle4" sx={{ color: "#4AAF47", pt: 1 }}>{data?.primaryTag.name}</Typography>

        <Typography variant="subTitle3" >
          <Link
            component={'span'}
            onClick={() => history.push(!currentUser && isPremium(data.tags) ? `/paywall` : `article/${data?.id}`)}
            underline="hover"
            sx={{ color: "#232A45", fontSize: "20x", cursor: "pointer" }}
          >
            <ShowMoreText lines={1} expandByClick={false} more="">
              {data.title}
            </ShowMoreText>
          </Link>
        </Typography>

        <Typography variant="subTitle" sx={{ color: "#858585" }}>
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