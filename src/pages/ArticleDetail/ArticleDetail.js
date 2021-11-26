import React from 'react'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  IconButton,
} from '@mui/material'
import { MBreadcrumbs } from 'components/CustomMaterial'
import ImgDetailArticle from 'assets/image/article-detail.png'
import { Footer } from 'containers/Footer'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ARTICLE_DATA from './atricleDetailMockup.json'
import AdditionalContent from './AdditionalContent'
import RelatedArticles from './RelatedArticles'
import ArticleInfo from './ArticleInfo'

const ArticleDetail = () => {
  const detailRoot = [
    { text: 'Crypto School', to: '#' },
    { text: 'Basics', to: '#' },
    { text: 'Knowledge', to: '#' },
    { text: 'How to mine bitcoin?' },
  ]

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <MBreadcrumbs data={detailRoot} sx={{ mt: 5 }} />
      </Hidden>

      <Stack direction="row" alignItems="center" sx={{ my: 3 }}>
        <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
          How to Mine Bitcoin
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />
        <Hidden mdDown>
          <IconButton size="small" sx={{ ml: 2 }}>
            <BookmarkBorderIcon />
          </IconButton>
        </Hidden>
      </Stack>

      <Box sx={{ mb: 3 }}>
        <img src={ImgDetailArticle} alt='article-detail' style={{ width: '100%' }} />
      </Box>

      <Stack spacing={3}>
        <Box sx={{ display: { md: "flex", xs: "block" } }}>
          <Box sx={{ py: 2, px: { xs: 2, md: 5 }, background: "#F8FCF8", borderLeft: "1px solid #4AAF47" }} maxWidth="md">
            <Typography variant="h5" sx={{ color: { md: "#141414", xs: "#4AAF47" }, fontWeight: 500, mb: 2 }}>
              {ARTICLE_DATA.shortDetail.title}
            </Typography>

            <Typography variant="subTitle1" sx={{ color: "#141414", fontWeight: 500 }}>
              {ARTICLE_DATA.shortDetail.description}
            </Typography>
          </Box>
          <Hidden mdDown>
            <Box sx={{ flexGrow: 1 }} />
          </Hidden>
          <ArticleInfo />
        </Box>
        {
          ARTICLE_DATA.content.map((item, key) => (
            <Box maxWidth="md" key={key}>
              <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500, mb: 2 }}>
                {item.title}
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555" }}>
                {item.description}
              </Typography>

              {item.additionalContent &&
                <AdditionalContent info={item.additionalContent} />
              }

              {item.subContent &&
                <Stack spacing={3} sx={{ mt: 3 }}>
                  {
                    item.subContent.map((subItem, ind) => (
                      <Stack key={ind} spacing={2}>
                        <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>
                          {subItem.title}
                        </Typography>

                        <Typography variant="subTitle1" sx={{ color: "#555" }}>
                          {subItem.description}
                        </Typography>
                      </Stack>
                    ))
                  }
                </Stack>
              }
            </Box>
          ))
        }
      </Stack>

      <RelatedArticles />
      <Footer />
    </Container >
  )
}

export default ArticleDetail
