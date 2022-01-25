import React, { useState } from 'react'
import {
  Typography,
  Stack,
  Container,
  Tab,
  Tabs,
} from '@mui/material'
import { styled } from '@mui/styles'
import EditProfile from './EditProfile'
import ManageSubscriptions from './ManageSubscriptions'

const CustomTab = styled(Tab)(() => {
  return {
    textTransform: 'none !important',
    borderBottom: '1px solid #EAEAEA',
    fontSize: { md: 16, xs: 14 },
    fontWeight: "normal",
    width: "50%",
    maxWidth: 240
  }
})

const Account = () => {
  const [currentTab, setCurrentTag] = useState('edit')

  const handleChange = (e, value) => {
    setCurrentTag(value)
  }

  return (
    <Container maxWidth="xl">
      <Stack sx={{ pt: 4, pb: 5 }}>
        <Typography variant="h4" color="#141414" sx={{ mb: 2 }}>My Account</Typography>
        <Typography variant="subTitle4" color="#909090" sx={{ mb: 4, textTransform: "capitalize" }}>
          Edit your account details or manage your subscription
        </Typography>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          textColor="inherit"
          variant="standard"
          TabIndicatorProps={{
            style: {
              background: "#4AAF47",
              height: 1
            }
          }}
        >
          <CustomTab label="Edit Profile" value="edit" />
          <CustomTab label="Manage Subscriptions" value="manage" />
        </Tabs>
        {currentTab === 'edit' && <EditProfile />}
        {currentTab === 'manage' && <ManageSubscriptions />}
      </Stack>
    </Container>
  )
}

export default Account
