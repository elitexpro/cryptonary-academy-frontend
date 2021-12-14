import React, { useRef, useState } from 'react'
import {
  Container,
  Grid,
  Box,
  Hidden,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import { MBreadcrumbs } from 'components/CustomMaterial'
import RelatedVideoSection from './RelatedVideoSection'
import ImgDetailVideo from 'assets/image/detail_video.png'
import useDimension from 'helpers/useDimension'
import VideoTitle from './VideoTitle'
import OverView from './OverView'
import Resource from './Resource'
import { Footer } from 'containers/Footer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const VideoDetail = () => {
  const videoRef = useRef(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [tabIndex, setTabIndex] = useState("1")
  const { height } = useDimension(videoRef)
  const detailRoot = [
    { text: 'Crypto School', to: '#' },
    { text: 'Basics', to: '#' },
    { text: 'Knowledge', to: '#' },
    { text: 'How to mine bitcoin?' },
  ]

  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <MBreadcrumbs data={detailRoot} sx={{ mt: 6, mb: 3 }} />
      </Hidden>

      <Hidden mdUp>
        <VideoTitle />
      </Hidden>

      <Grid container spacing={2.5} >
        <Grid item xs={12} md={8}>
          <img src={ImgDetailVideo} alt="video" style={{ width: '100%' }} ref={videoRef} />

          <Hidden mdDown>
            <VideoTitle />
          </Hidden>

          <Hidden mdDown>
            <TabContext value={tabIndex}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  variant="fullWidth"
                  textColor="inherit"
                  TabIndicatorProps={{ sx: { background: "#141414" } }}
                >
                  <Tab label="Overview" value="1" sx={{ textTransform: "none" }} />
                  <Tab label="Resources" value="2" sx={{ textTransform: "none" }} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <OverView />
              </TabPanel>
              <TabPanel value="2">
                <Resource />
              </TabPanel>
            </TabContext>
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
          <RelatedVideoSection height={isMobile ? 360 : height - 48} />
        </Grid>
      </Grid>

      <Footer />
    </Container >
  )
}

export default VideoDetail
