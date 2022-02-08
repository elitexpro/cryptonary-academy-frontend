import React, { useEffect, useState, useCallback } from 'react'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  Divider,
  Skeleton,
} from '@mui/material'
import { MBreadcrumbs } from 'components/CustomMaterial'
import { Footer } from 'containers/Footer'
import LatestArticles from './LatestArticles'
import LatestArticleSkeletonItem from './LatestArticleSkeletonItem'
import { useDispatch } from 'react-redux'
import { getAuthorById } from 'redux/modules/author/actions'
import { LazyImage } from 'components/LazyImage'


const AuthorDetail = (props) => {
  const dispatch = useDispatch()
  const [authorInfo, setAuthorInfo] = useState({})
  const [isLoading, setIsloading] = useState(false)


  const detailRoot = [
    { text: 'Home', to: '#' },
    { text: 'Author', to: '#' },
    { text: 'Research', to: '#' },
    { text: 'Ruben Rosser' },
  ]

  const loadAuthor = useCallback((id) => {
    setIsloading(true)
    dispatch(getAuthorById({
      id,
      success: ({ data }) => {
        setAuthorInfo(data?.authors && data?.authors.length > 0 && data?.authors[0])
        setIsloading(false)
      },
      fail: (err) => {
        setIsloading(false)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    loadAuthor(props.match.params.id)
  }, [loadAuthor, props.match.params.id])

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
      </Hidden>

      <Box sx={{ display: { xs: "block", sm: "flex" }, mt: 5 }}>
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
              : authorInfo?.bio}
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Box sx={{ maxWidth: { md: 220, xs: "100%" }, mr: { xs: 0, md: 3 } }}>
          <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>
            Latest articles from {authorInfo?.name}
          </Typography>
          <Hidden mdUp>
            <Divider sx={{ my: 3 }} />
          </Hidden>
        </Box>

        {isLoading ?
          <LatestArticleSkeletonItem />
          :
          <LatestArticles />
        }
      </Box>
      <Footer />
    </Container >
  )
}

export default AuthorDetail
