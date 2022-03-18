import React from 'react'
import moment from 'moment'
import {
  Box,
  Hidden,
  Typography,
  Stack,
  IconButton,
  Link,
} from '@mui/material'
import { FiFacebook, FiTwitter, FiLink } from "react-icons/fi"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { useHistory } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const SOCIAL_ITEMS = [
  { to: "#", icon: <FiLink style={{ color: "#141414", fontSize: 22 }} /> },
  { to: "#", icon: <FiTwitter style={{ color: "#141414", fontSize: 22 }} /> },
  { to: "#", icon: <FiFacebook style={{ color: "#141414", fontSize: 22 }} /> },
  { to: "#", icon: <BookmarkBorderIcon style={{ color: "#141414", fontSize: 22 }} /> },
]

const ArticleInfo = ({ article, isLoading }) => {
  const history = useHistory()

  const handleClick = (to) => {
    history.push(to)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "column", xs: "column-reverse" },
        minWidth: 200
      }}
    >
      <Box sx={{ height: 40, display: "flex" }}>
        <Box sx={{ display: "flex", width: '100%' }}>
          <Hidden mdDown>
            <Box sx={{ flexGrow: 1 }} />
          </Hidden>

          <Stack spacing={1} direction="row">
            {
              SOCIAL_ITEMS.map((item, index) => {
                const { to, icon } = item
                return (
                  <IconButton
                    key={index}
                    sx={{ width: 40, height: 40, background: '#F8F8F8', borderRadius: '4px' }}
                    onClick={() => handleClick(to)}
                  >
                    {icon}
                  </IconButton>
                )
              })
            }
          </Stack>
        </Box>

        <Hidden mdUp>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ width: 40, height: 40 }}>
            <BookmarkBorderIcon style={{ color: "#4AAF47" }} />
          </IconButton>
        </Hidden>
      </Box>

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
        <Typography
          variant="subTitle"
          sx={{ color: "#858585", mt: { md: 2, xs: 0 } }}>
          2 min read
        </Typography>
      </Box>
    </Box >
  )
}

export default ArticleInfo
