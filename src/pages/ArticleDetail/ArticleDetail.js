import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  Container,
  Box,
  Hidden,
  Typography,
  Stack,
  Skeleton,
} from '@mui/material'
import ShowMoreText from "react-show-more-text"
import { MBreadcrumbs } from 'components/CustomMaterial'
import AuthorDetail from 'components/AuthorDetail'
import { LazyImage } from 'components/LazyImage'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'
import ArticleInfo from './ArticleInfo'
import RelatedNews from './RelatedNews'
import { getArticleById } from 'redux/modules/article/actions'
import { currentCoinSelector } from 'redux/modules/coin/selectors'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { currentArticleSelector } from 'redux/modules/article/selectors'

const ArticleDetail = (props) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const currentCoin = useSelector(currentCoinSelector)
  const currentUser = useSelector(currentUserSelector)
  const article = useSelector(currentArticleSelector)
  const [currentArticle, setCurrentArticle] = useState({})
  const [isLoading, setIsloading] = useState(false)
  const [isBookMarkLoading, setIsBookMarkLoading] = useState(false)

  const TAB_CONTENT = [
    { label: 'All', value: 'all', to: '/news/all' },
    { label: 'Bitcoin', value: 'bitcoin-btc-news', to: '/news/bitcoin-btc-news' },
    { label: 'Ethereum', value: 'ethereum-eth-news', to: '/news/ethereum-eth-news' },
    { label: 'Alt', value: 'altcoin-news', to: '/news/altcoin-news' },
    { label: 'Defi', value: 'defi', to: '/news/defi' },
    { label: 'Blockchain', value: 'blockchain-news', to: '/news/blockchain-news' },
    { label: 'Technical Analysis', value: 'technical-analysis', to: '/analysis/technical-analysis' },
    { label: 'On-Chain Forensics', value: 'on-chain-forensics', to: '/analysis/on-chain-forensics' },
    { label: 'Tutorial', value: 'tutorial', to: '/education/tutorial' },
    { label: 'Guide', value: 'guide', to: '/education/guide' },
    { label: 'Course', value: 'course', to: '/education/course' },
    { label: 'Simply Explained', value: 'simply-explained', to: '/education/simply-explained' },
    { label: 'Bitcoin News', value: 'news', to: `/rating-guide/${currentCoin?.coinSymbol}/news` },
  ]

  const crumbs = useMemo(() => {
    return location.search.split('&')
  }, [location])

  const currentTabData = useMemo(() => {
    const currentTab = TAB_CONTENT.find(item => item.value === crumbs[2]?.split('=')[1])
    return {
      label: currentTab ? currentTab.label : 'All News',
      to: currentTab ? currentTab.to : '/news/all'
    }
  }, [crumbs, TAB_CONTENT])

  const detailRoot = [
    { text: 'Home', to: '/' },
    { text: crumbs[0]?.split('=')[1], to: crumbs[1]?.split('=')[1] },
    { text: currentTabData.label, to: currentTabData.to },
    { text: currentArticle?.title },
  ]

  crumbs.length === 2 && detailRoot.splice(2, 1)

  useEffect(() => {
    setCurrentArticle(article)
  }, [article])

  const loadArticle = useCallback((id) => {
    setIsloading(true)
    dispatch(getArticleById({
      id,
      success: ({ data }) => {
        // setCurrentArticle(data?.posts && data?.posts.length > 0 && data?.posts[0])
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
            {!isLoading && !(currentUser?.role !== 'pro' && currentArticle?.isPremium) &&
              <Hidden mdUp>
                <ArticleInfo article={currentArticle} isLoading={isBookMarkLoading} setIsloading={setIsBookMarkLoading} />
              </Hidden>
            }

            {currentUser?.role !== 'pro' && currentArticle?.isPremium &&
              <Box
                sx={{
                  position: 'absolute',
                  background: "linear-gradient(to bottom, transparent 50%, white)",
                  width: '100%',
                  height: '500px',
                  bottom: 0,
                  left: 0
                }}
              ></Box>
            }

            <Box className="gh-content gh-canvas" sx={{ width: '100%' }}>
              {
                isLoading
                  ? <>
                    <Skeleton animation="wave" width="80%" />
                    <Skeleton animation="wave" width="100%" />
                    <Skeleton animation="wave" width="60%" />
                    <Skeleton animation="wave" width="40%" />
                  </>
                  :
                  currentUser?.role !== 'pro' && currentArticle?.isPremium ?
                    <ShowMoreText lines={10} expandByClick={false} more="">
                      {currentArticle?.excerpt}
                    </ShowMoreText>
                    :
                    <section dangerouslySetInnerHTML={{ __html: currentArticle?.html }} />
              }
            </Box>

            {!isLoading && !(currentUser?.role !== 'pro' && currentArticle?.isPremium) &&
              <Box sx={{ position: 'absolute', top: 0, left: '-250px', pt: 2 }}>
                <Hidden mdDown>
                  <Box sx={{ flexGrow: 1 }} />
                  <ArticleInfo article={currentArticle} setIsloading={setIsBookMarkLoading} isLoading={isBookMarkLoading} />
                </Hidden>
              </Box>
            }
          </Box>
        </Box>

        {!(currentUser?.role !== 'pro' && currentArticle?.isPremium) &&
          <AuthorDetail authorInfo={currentArticle?.primaryAuthor} isLoading={isLoading} showComments />
        }
      </Container >

      <Container maxWidth="xl">
        {currentUser?.role !== 'pro' && currentArticle?.isPremium &&
          <Box sx={{ mb: 5 }}>
            <Paywall />
          </Box>
        }
        <RelatedNews
          tag={currentArticle?.primaryTag?.slug}
          id={currentArticle?.id}
          title={crumbs[3] ? crumbs[3]?.split('=')[1] === 'analysis' ? 'Market Analysis' : 'Research' : 'News'}
        />
        <Footer minimal={true} />
      </Container >
    </>
  )
}

export default ArticleDetail
