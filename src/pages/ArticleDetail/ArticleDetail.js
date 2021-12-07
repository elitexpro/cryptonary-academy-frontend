import React, { useEffect, useState } from 'react'
import useStyles from './styles.js'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { MBreadcrumbs } from 'components/CustomMaterial'
import { Footer } from 'containers/Footer'
import ArticleInfo from './ArticleInfo'
import { getArticleById } from 'redux/modules/article/actions'

const ArticleDetail = () => {
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
    dispatch(getArticleById({ id: '616f03d5fa5ded07bc75a46a' }))
  }, [dispatch])

  useEffect(() => {
    setCurrentArticle(article)
  }, [article])

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
      </Hidden>

      <Box sx={{ my: 3 }}>
        <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
          {currentArticle?.title}
        </Typography>
        <Box sx={{ mb: 3, mt: 4 }}>
          <img src={currentArticle?.feature_image} alt='article-detail' style={{ width: '100%', maxHeight: 480 }} />
        </Box>
        <Stack spacing={3}>
          <Box sx={{ display: { md: "flex", xs: "block" } }}>
            <Box sx={{ py: 2, px: { xs: 2, md: 5 }, background: "#F8FCF8", borderLeft: "1px solid #4AAF47" }} maxWidth="md">
              <Typography variant="h5" sx={{ color: { md: "#141414", xs: "#4AAF47" }, fontWeight: 500, mb: 2 }}>
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
        </Stack>
        <Box className={classes.root} sx={{ maxWidth: 800 }} dangerouslySetInnerHTML={{ __html: currentArticle?.html }} />
      </Box>
      <Footer />
    </Container >
  )
}

export default ArticleDetail
