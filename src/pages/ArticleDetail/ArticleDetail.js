import React, { useEffect, useState } from 'react'
import useStyles from './styles.js'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  IconButton,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { MBreadcrumbs } from 'components/CustomMaterial'
import { Footer } from 'containers/Footer'
import ArticleInfo from './ArticleInfo'
import { getArticleById } from 'redux/modules/article/actions'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Paywall } from 'containers/Paywall'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ArticleDetail = (props) => {
  const classes = useStyles()
  const detailRoot = [
    { text: 'Crypto School', to: '#' },
    { text: 'Basics', to: '#' },
    { text: 'Knowledge', to: '#' },
    { text: 'How to mine bitcoin?' },
  ]
  const dispatch = useDispatch()
  const article = useSelector((state) => state.article.article)
  const [currentArticle, setCurrentArticle] = useState(article)

  useEffect(() => {
    dispatch(getArticleById({ id: props.match.params.id }))
  }, [dispatch, props])

  useEffect(() => {
    setCurrentArticle(article)
  }, [article])

  return (
    <>
      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <Hidden mdDown>
          <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
        </Hidden>

        <Box sx={{ my: 3 }}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h1" sx={{ color: "#141414", fontWeight: 500 }}>
              {currentArticle?.title}
              <IconButton size="small" sx={{ ml: 3 }}>
                <BookmarkBorderIcon />
              </IconButton>
            </Typography>
          </Stack>

          <Box sx={{ mb: 3, mt: 4, height: "100%" }}>
            <LazyLoadImage
              alt="article-detail-featured-image"
              effect="blur"
              width="100%"
              height="100%"
              src={currentArticle?.featureImage}
            />
          </Box>
          <Box sx={{ display: { md: "flex", xs: "block" }, mb: 5 }}>
            <Box
              sx={{
                py: 2,
                px: { xs: 2, md: 5 },
                background: "#F8FCF8",
                borderLeft: "1px solid #4AAF47"
              }}
              maxWidth="md"
            >
              <Typography
                variant="h5"
                sx={{
                  color: { md: "#141414", xs: "#4AAF47" },
                  fontWeight: 500, mb: 2
                }}
              >
                {currentArticle?.title}
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#141414", fontWeight: 500 }}>
                {currentArticle?.excerpt}
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box sx={{ flexGrow: 1 }} />
            </Hidden>
            <ArticleInfo article={currentArticle} />
          </Box>
          <Box className={classes.root} sx={{ maxWidth: 800 }} dangerouslySetInnerHTML={{ __html: currentArticle?.html }} />
        </Box>
      </Container >

      <Paywall />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default ArticleDetail
