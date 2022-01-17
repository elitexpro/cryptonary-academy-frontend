import React, { useState } from 'react'
import {
  Typography,
  Stack,
  Tabs,
  Tab,
  Box,
} from '@mui/material'
import { styled } from '@mui/styles'
import { MButton } from 'components/CustomMaterial'
import ResearchReports from './ResearchReports'
import RatingsGuide from './RatingsGuide'
import CryptoCourses from './CryptoCourses'
import MakeFriends from './MakeFriends'

const CustomTab = styled(Tab)(() => {
  return {
    textTransform: 'none !important',
    fontSize: 18,
    fontWeight: "normal",
    color: '#FFF'
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

const CryptoPro = () => {
  const [currentTab, setCurrentTab] = useState(1)

  const handleChange = (e, value) => {
    setCurrentTab(value)
  }

  return (
    <Stack sx={{ p: 6, backgroundColor: "#141414" }} alignItems="center">
      <Typography variant="h2" color="#FFF" sx={{ width: 786 }} textAlign="center">
        Join Cryptonary Pro to get full access to our basics to advance crypto courses, exclusive insights, research & analysis.
      </Typography>
      <Box sx={{ px: 4, mt: 4, width: "100%" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
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
      </Box>
      <MButton
        variant="contained"
        color="success"
        sx={{
          color: "#FFF",
          mt: 5,
          width: 320,
          height: 48
        }}
      >
        Learn more
      </MButton>
    </Stack>
  )
}

export default CryptoPro
