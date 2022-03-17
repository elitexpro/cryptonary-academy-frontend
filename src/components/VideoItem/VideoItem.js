import React from 'react'
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

const VideoItem = ({ data }) => {
  const { id, attributes } = data
  const history = useHistory()

  return (
    <Box>
      <Stack spacing={1}>
        <CardActionArea onClick={() => history.push(`video-detail/${id}`)}>
          <LazyImage src={attributes?.thumbnail.url} />
        </CardActionArea>

        <Typography variant="subTitle3" >
          <Link
            component={'span'}
            onClick={() => history.push(`video-detail/${id}`)}
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