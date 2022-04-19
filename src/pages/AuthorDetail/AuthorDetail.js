import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  Divider,
  Skeleton,
  Pagination,
} from '@mui/material'
import { MBreadcrumbs } from 'components/CustomMaterial'
import { Footer } from 'containers/Footer'
import LatestArticles from './LatestArticles'
import LatestArticleSkeletonItem from './LatestArticleSkeletonItem'
import { useDispatch } from 'react-redux'
import { getAuthorById, getLatestArticlesOfAuthor } from 'redux/modules/author/actions'
import { totalPageSelector } from 'redux/modules/author/selectors'
import { LazyImage } from 'components/LazyImage'

const AuthorDetail = (props) => {
  const dispatch = useDispatch()
  const total = useSelector(totalPageSelector)
  const [authorInfo, setAuthorInfo] = useState({})
  const [isLoading, setIsloading] = useState(false)
  const [latestArticleLoding, setLatestArticleLoading] = useState(false)
  const [page, setPage] = useState(1)

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
        setAuthorInfo(data?.users && data?.users.length > 0 && data?.users[0])
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

  useEffect(() => {
    setLatestArticleLoading(true)
    authorInfo?.slug && dispatch(getLatestArticlesOfAuthor({
      slug: authorInfo?.slug,
      params: {
        page,
      },
      success: () => {
        setLatestArticleLoading(false)
      }
    }))
  }, [dispatch, authorInfo, page])

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
            <LazyImage src={authorInfo?.profileImage} height="100%" borderRadius="4px" />
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

      <Box>
        <Box sx={{ my: 3 }}>
          <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>
            Latest articles from {authorInfo?.name}
          </Typography>
          <Hidden mdUp>
            <Divider sx={{ my: 3 }} />
          </Hidden>
        </Box>

        {isLoading || latestArticleLoding ?
          <LatestArticleSkeletonItem />
          :
          <LatestArticles page={page} setPage={setPage} />
        }
      </Box>
      <Hidden mdDown>
        <Stack sx={{ mt: 4 }} direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="subTitle" color="#909090">
              Showing {page * 15 > total ? total : page * 15}
              &nbsp;of {total}
            </Typography>
          </Box>
          <Pagination
            count={parseInt(total % 15 > 0 ? total / 15 + 1 : total / 15)}
            shape="rounded"
            defaultPage={page}
            onChange={(e, page) => setPage(page)}
          />
        </Stack>
      </Hidden>
      <Footer />
    </Container >
  )
}

export default AuthorDetail
