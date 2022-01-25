import React from 'react'
import { useSelector } from 'react-redux'
import vidoeItemSvg from 'assets/image/video.svg'
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Link,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import ShowMoreText from "react-show-more-text"
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const defaultString =
  "Cold Storage is the term given to digital wallets held offline to protect cryptocurrency funds from fraudulent use by others ..."

const VideoItem = ({ post }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const isPremium = post?.tags?.find((tag) => tag.slug === "hash-cpro")

  return (
    <Stack>
      <Box sx={{ minHeight: "200px", backgroundColor: "#F5F5F5" }}>
        <LazyLoadImage
          alt=""
          effect="blur"
          width="100%"
          src={post ? post.featureImage : vidoeItemSvg}
        />
      </Box>

      <Typography variant="subTitle3" sx={{ mt: 2, mb: 1 }}>
        <Link
          component={'span'}
          onClick={() => history.push(!currentUser && isPremium ? `/paywall` : `article/${post?.id}`)}
          underline="hover"
          sx={{ color: "#232A45", fontSize: "20px", cursor: "pointer" }}
        >
          <ShowMoreText lines={1} expandByClick={false} more="">
            {post ? post.title : "What is Cold Storage?"}
          </ShowMoreText>
        </Link>
      </Typography>

      <Typography variant="subTitle" sx={{ color: "#858585" }}>
        <ShowMoreText lines={3} expandByClick={false} more="">
          {post ? post.customExcerpt : defaultString}
        </ShowMoreText>
      </Typography>

      <Stack direction="row" sx={{ mt: 3 }}>
        <MButton color='success' variant='outlined'>
          Beginner
        </MButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small">
          <BookmarkBorderRoundedIcon sx={{ fontSize: '24px' }} />
        </IconButton>
      </Stack>
    </Stack>
  )

}

export default VideoItem