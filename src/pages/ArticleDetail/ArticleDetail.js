import React, { useEffect, useState, useCallback } from 'react'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  Skeleton,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { MBreadcrumbs } from 'components/CustomMaterial'
import { Footer } from 'containers/Footer'
import ArticleInfo from './ArticleInfo'
import AuthorDetail from './AuthorDetail'
import RelatedNews from './RelatedNews'
import { getArticleById } from 'redux/modules/article/actions'
import { LazyImage } from 'components/LazyImage'

const detailRoot = [
  { text: 'Crypto School', to: '#' },
  { text: 'Basics', to: '#' },
  { text: 'Knowledge', to: '#' },
  { text: 'How to mine bitcoin?' },
]

const ArticleDetail = (props) => {
  const dispatch = useDispatch()
  const [currentArticle, setCurrentArticle] = useState({})
  const [isLoading, setIsloading] = useState(false)

  const loadArticle = useCallback((id) => {
    setIsloading(true)
    dispatch(getArticleById({
      id,
      success: ({ data }) => {
        setCurrentArticle(data?.posts && data?.posts.length > 0 && data?.posts[0])
        setIsloading(false)
      },
      fail: (err) => {
        setIsloading(false)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    loadArticle(props.match.params.id)
  }, [loadArticle, props.match.params.id])

  return (
    <>
      <Container maxWidth="xl" sx={{ mb: 8, width: { md: '60%' } }} >
        <Hidden mdDown >
          {
            isLoading
              ? <Skeleton animation="wave" width="50%" sx={{ mt: 5 }} />
              : <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
          }
        </Hidden>

        <Box sx={{ my: 3 }}>
          <Stack direction="row" alignItems="center">
            {
              isLoading
                ? <Skeleton animation="wave" width="80%" />
                :
                <Typography variant="h1" sx={{ color: "#141414", fontSize: { md: "38px", xs: "24px" }, fontWeight: 500 }}>
                  {currentArticle?.title}
                </Typography>
            }
          </Stack>

          <Box sx={{ mb: 3, mt: 4, height: "100%" }}>
            {
              isLoading
                ? <Skeleton variant="rectangular" animation="wave" width="100%" height="300px" />
                : <LazyImage src={currentArticle.featureImage} />
            }
          </Box>
          <Box sx={{
            display: { md: "flex", xs: "block" },
            mb: 5,
            position: 'relative'
          }}>
            <Hidden mdUp>
              <ArticleInfo article={currentArticle} isLoading={isLoading} />
            </Hidden>
            <Box >
              {
                isLoading
                  ? <>
                    <Skeleton animation="wave" width="80%" />
                    <Skeleton animation="wave" width="100%" />
                    <Skeleton animation="wave" width="60%" />
                    <Skeleton animation="wave" width="40%" />
                  </>
                  : <section className="gh-content gh-canvas" dangerouslySetInnerHTML={{ __html: currentArticle?.html }} />
              }
            </Box>

            {!isLoading && <Box sx={{ position: 'absolute', top: 0, left: '-250px', pt: 2 }}>
              <Hidden mdDown>
                <Box sx={{ flexGrow: 1 }} />
                <ArticleInfo article={currentArticle} />
              </Hidden>
            </Box>
            }
          </Box>
        </Box>

        <AuthorDetail authorInfo={currentArticle?.primaryAuthor} isLoading={isLoading} />
      </Container >

      <Container maxWidth="xl">
        <RelatedNews tag={currentArticle?.primaryTag?.slug} />
        <Footer minimal={true} />
      </Container >
    </>
  )
}

export default ArticleDetail
