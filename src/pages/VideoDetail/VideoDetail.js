import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import {
  Container,
  Grid,
  Box,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  useMediaQuery,
  Skeleton,
} from '@mui/material'
import { Player, BigPlayButton } from 'video-react'
import { useTheme } from '@mui/material/styles'
import { MBreadcrumbs } from 'components/CustomMaterial'
import RelatedVideoSection from './RelatedVideoSection'
import useDimension from 'helpers/useDimension'
import VideoTitle from './VideoTitle'
import OverView from './OverView'
import Resource from './Resource'
import { Footer } from 'containers/Footer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { getVideoById, getRelatedVideos } from 'redux/modules/video/actions'

const TAB_CONTENT = [
  { label: 'Tutorial', value: 'tutorial', to: '/education/tutorial' },
  { label: 'Guide', value: 'guide', to: '/education/guide' },
  { label: 'Course', value: 'course', to: '/education/course' },
  { label: 'Simply Explained', value: 'simply-explained', to: '/education/simply-explained' },
  { label: 'Crypto School', value: 'all', to: '/education/all' },
]

const VideoDetail = (props) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const videoRef = useRef(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isLoading, setIsLoading] = useState(false)
  const [relatedVideoLoading, setRelatedVideoLoading] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({})
  const { height } = useDimension(videoRef)

  const crumbs = useMemo(() => {
    return location.search.split('&')
  }, [location])

  const currentTabData = useMemo(() => {
    const currentTab = TAB_CONTENT.find(item => item.value === crumbs[2]?.split('=')[1])
    return {
      label: currentTab ? currentTab.label : 'Crypto School',
      to: currentTab ? currentTab.to : '/education/all'
    }
  }, [crumbs])

  const detailRoot = [
    { text: 'Home', to: '/' },
    { text: crumbs[0].split('=')[1], to: crumbs[1].split('=')[1] },
    { text: currentTabData.label, to: currentTabData.to },
    { text: currentVideo?.title },
  ]

  const loadVideo = useCallback((id) => {
    setIsLoading(true)
    dispatch(getVideoById({
      id,
      success: ({ data }) => {
        setCurrentVideo(data?.data && data?.data.attributes)
        setIsLoading(false)
      },
      fail: (err) => {
        setIsLoading(false)
      }
    }))
  }, [dispatch])

  useEffect(() => {
    loadVideo(props.match.params.id)
  }, [loadVideo, props.match.params.id])

  useEffect(() => {
    setRelatedVideoLoading(true)
    !!currentVideo?.category && dispatch(getRelatedVideos({
      params: {
        category: currentVideo?.category.length > 0 ? currentVideo?.category[0] : '',
      },
      success: () => {
        setRelatedVideoLoading(false)
      }
    }))
  }, [currentVideo, dispatch])

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <MBreadcrumbs data={detailRoot} sx={{ mt: 6, mb: 3 }} />
      </Hidden>

      <Hidden mdUp>
        <VideoTitle video={currentVideo} isLoading={!currentVideo && isLoading} />
      </Hidden>

      <Grid container spacing={2.5} >
        <Grid item xs={12} md={8}>
          <Box ref={videoRef}>
            {currentVideo?.video?.ver720p && !isLoading ?
              <Player
                style={{ width: '100%' }}
                src={currentVideo?.video?.ver720p}
                poster={currentVideo?.thumbnail?.url}
              >
                <BigPlayButton position="center" />
              </Player>
              :
              <Skeleton variant="rectangular" width="100%" height={500} />
            }
          </Box>

          <Hidden mdDown>
            <VideoTitle video={currentVideo} isLoading={!currentVideo && isLoading} />
          </Hidden>

          <Hidden mdUp>
            <Divider sx={{ mt: 2 }} />
            <Accordion sx={{ boxShadow: 'unset' }} >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500 }}>
                  Overview and Resources
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <OverView />
                <Resource sx={{ mt: 4 }} />
              </AccordionDetails>
            </Accordion>
            <Divider />
          </Hidden>
        </Grid>

        <Grid item xs={12} md={4}>
          <RelatedVideoSection height={isMobile ? 360 : height - 48} relatedVideoLoading={relatedVideoLoading} />
        </Grid>
      </Grid>

      <Footer />
    </Container >
  )
}

export default VideoDetail
