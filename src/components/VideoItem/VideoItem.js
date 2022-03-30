import React, { useMemo } from 'react'
import moment from 'moment'
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Link,
  CardActionArea,
} from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'
import { LazyImage } from 'components/LazyImage'

const VideoItem = ({ data, blog, blogTo, tag }) => {
  const { id, attributes } = data
  const history = useHistory()

  const hours = useMemo(() => {
    return moment(Date.now()).diff(data.attributes.updatedAt, 'hours')
  }, [data])

  const url = useMemo(() => {
    let videoUrl = `/video/${id}`
    if (blog && blogTo) {
      videoUrl += `?blog=${blog}&blogTo=${blogTo}`
    }
    if (tag) {
      videoUrl += `&tag=${tag}`
    }
    return videoUrl
  }, [id, blog, blogTo, tag])

  return (
    <Box>
      <Stack spacing={1}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={attributes?.thumbnail.url} />
        </CardActionArea>

        <Typography variant="subTitle3" >
          <Link
            component={'span'}
            onClick={() => history.push(url)}
            underline="hover"
            sx={{ color: "#232A45", fontSize: "20x", cursor: "pointer" }}
          >
            <ShowMoreText lines={1} expandByClick={false} more="">
              {attributes.title}
            </ShowMoreText>
          </Link>
        </Typography>

        <Typography variant="subTitle" sx={{ color: "#858585", height: '40px' }} >
          <ShowMoreText lines={2} expandByClick={false} more="">
            {attributes.description}
          </ShowMoreText>
        </Typography>

        <Box sx={{ display: 'flex', pt: 2 }}>
          <Typography variant="subTitle4" sx={{ color: "#858585" }}>
            {hours < 48 ? `${hours} hours ago` : moment(attributes.updatedAt).format('YYYY-MM-DD')}
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

export default VideoItem