import React, { useEffect, useState, useCallback } from 'react'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  IconButton,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { MBreadcrumbs } from 'components/CustomMaterial'
import { Footer } from 'containers/Footer'
import ArticleInfo from './ArticleInfo'
import AuthorDetail from './AuthorDetail'
import { getArticleById } from 'redux/modules/article/actions'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { LazyImage } from 'components/LazyImage'
import './GhostStyles/screen.css'

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
      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <Hidden mdDown>
          <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
        </Hidden>

        <Box sx={{ my: 3 }}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h1" sx={{ color: "#141414", fontSize: "40px", fontWeight: 500 }}>
              {currentArticle?.title}
              <IconButton size="small" sx={{ ml: 3 }}>
                <BookmarkBorderIcon />
              </IconButton>
            </Typography>
          </Stack>

          <Box sx={{ mb: 3, mt: 4, height: "100%" }}>
            <LazyImage src={currentArticle.featureImage} height="100%" minHeight="300px" />
          </Box>
          <Box sx={{
            display: { md: "flex", xs: "block" },
            mb: 5
          }}>
            <Hidden mdUp>
              <ArticleInfo article={currentArticle} />
            </Hidden>
            <Box >
              <section className="gh-content gh-canvas" dangerouslySetInnerHTML={{ __html: currentArticle?.html }}/>
            </Box>
            <Hidden mdDown>
              <Box sx={{ flexGrow: 1 }} />
              <ArticleInfo article={currentArticle} />
            </Hidden>
          </Box>
        </Box>

        <AuthorDetail authorInfo={currentArticle?.primaryAuthor} isLoading={isLoading} />
      </Container >

      <Container maxWidth="xl">
        <Footer minimal={true} />
      </Container >
    </>
  )
}

export default ArticleDetail
