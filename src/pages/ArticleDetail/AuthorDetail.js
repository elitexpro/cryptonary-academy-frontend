import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Skeleton,
  Link,
} from '@mui/material'
import { LazyImage } from 'components/LazyImage'
import ShowMoreText from "react-show-more-text"
import { Link as RouterLink } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const AuthorDetail = ({ authorInfo, isLoading }) => {

  return (
    <Stack spacing={4}>
      <Divider />

      <Stack spacing={2}>
        <Typography variant="subTitle" sx={{ color: "#858585" }}>
          About Author
        </Typography>

        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <Box sx={{ maxWidth: { md: 200, xs: 'unset' }, width: '100%' }}>
            {isLoading ?
              <Skeleton variant="rectangular" animation="wave" width="100%" height="200px" />
              :
              <LazyImage src={authorInfo?.profileImage} height="100%" />
            }
          </Box>
          <Stack
            spacing={1}
            sx={{
              maxWidth: 560,
              width: '100%',
              mt: { xs: 2, sm: 0 }, ml: { xs: 0, sm: 3 }
            }}
          >
            <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
              {isLoading ? <Skeleton animation="wave" width="50%" /> : authorInfo?.name}
            </Typography>

            <Typography variant="subTitle3" sx={{ color: "#555" }}>
              {isLoading ?
                <Skeleton animation="wave" width="60%" />
                :
                <>{"Research Analyst"} <Typography variant="subTitle1" sx={{ color: "#141414" }}>@ Cryptonary</Typography></>
              }
            </Typography>

            <Typography variant="subTitle" sx={{ color: "#555" }}>
              {isLoading ?
                <>
                  <Skeleton animation="wave" width="90%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation="wave" width="60%" />
                </>
                :
                <ShowMoreText lines={3} expandByClick={false} more="">
                  {authorInfo?.bio}
                </ShowMoreText>
              }
            </Typography>

            <Typography variant="subTitle" sx={{ color: "#141414", fontWeight: 500, pt: 2 }}>
              <Link
                component={RouterLink}
                to={`/author/${authorInfo?.id}`}
                underline="hover"
                sx={{ color: "#232A45", display: "flex", alignItems: "center" }}
              >
                View latest articles from {authorInfo?.name}
                <ArrowForwardRoundedIcon />
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Divider />
    </Stack>
  )
}

export default AuthorDetail
