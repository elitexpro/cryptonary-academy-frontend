import React, { useState } from 'react'
import {
  Typography,
  Stack,
  Tabs,
  Tab,
  Box,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { styled } from '@mui/styles'
import { useHistory } from 'react-router-dom'
import { MButton } from 'components/CustomMaterial'
import ResearchReports from './ResearchReports'
import RatingsGuide from './RatingsGuide'
import CryptoCourses from './CryptoCourses'
import MakeFriends from './MakeFriends'
import { FiChevronDown } from 'react-icons/fi'

const CustomTab = styled(Tab)(() => {
  return {
    textTransform: 'none !important',
    fontSize: 18,
    fontWeight: "normal",
    color: '#FFF !important'
  }
})

const TabPanel = ({ value }) => {
  switch (value) {
    case 1:
      return <ResearchReports />
    case 2:
      return <RatingsGuide />
    case 3:
      return <CryptoCourses />
    case 4:
      return <MakeFriends />
    default:
      return <ResearchReports />
  }
}

const TITLE = [
  'Journals & Research reports',
  'Ratings Guide',
  'Crypto Courses',
  'Make Friends',
]

const CryptoPro = () => {
  const history = useHistory()
  const [currentTab, setCurrentTab] = useState(1)

  const handleChange = (value) => (e, newValue) => {
    if (value === currentTab) {
      setCurrentTab(null)
    } else {
      setCurrentTab(value ? value : newValue)
    }
  }

  return (
    <Stack sx={{ py: 6, px: { md: 6, xs: 2 }, backgroundColor: "#141414" }} alignItems="center">
      <Typography color="#FFF" sx={{ maxWidth: 786, fontSize: { xs: 20, md: 32 } }} textAlign="center">
        Join Cryptonary Pro to get full access to our basics to advance crypto courses, exclusive insights, research & analysis.
      </Typography>
      <Box sx={{ px: { md: 4 }, mt: 4, width: "100%" }}>
        <Hidden mdDown>
          <Tabs
            value={currentTab}
            onChange={handleChange()}
            variant="fullWidth"
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                background: "#4AAF47",
                height: 1
              }
            }}
          >
            <CustomTab label="Research reports" value={1} />
            <CustomTab label="Ratings Guide" value={2} />
            <CustomTab label="Crypto Courses" value={3} />
            <CustomTab label="Make Friends" value={4} />
          </Tabs>
          <Stack alignItems="center" sx={{ mt: 8 }}>
            <TabPanel value={currentTab} />
          </Stack>
        </Hidden>
        <Hidden mdUp>
          {TITLE.map((item, index) => {
            return (
              <Accordion
                key={index}
                sx={{ backgroundColor: "#141414" }}
                expanded={currentTab === index + 1}
                onChange={handleChange(index + 1)}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={<FiChevronDown style={{ fontSize: 20, color: "#FFF" }} />}
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: currentTab === index + 1 ? "#7BE05D" : "#E4E4E4",
                    color: currentTab === index + 1 ? "#FFF !important" : "#909090 !important",
                    background: currentTab === index + 1 ? "#1D1D1D" : "#141414",
                    mb: 3,
                    py: 1
                  }}
                >
                  <Typography variant="subTitle">{item}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0 }}>
                  <TabPanel value={index + 1} sx={{ mb: 3 }} />
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Hidden>
      </Box>
      <Hidden mdDown>
        <MButton
          variant="contained"
          color="success"
          sx={{
            color: "#FFF",
            mt: 5,
            width: 320,
            height: 48
          }}
          onClick={() => history.push('/app')}
        >
          Learn more
        </MButton>
      </Hidden>
    </Stack>
  )
}

export default CryptoPro
