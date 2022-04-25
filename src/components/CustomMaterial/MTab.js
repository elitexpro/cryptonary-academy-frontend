import React from 'react'
import {
  Tabs,
  Tab,
} from '@mui/material'
import { styled } from '@mui/styles'

const CustomTab = styled(Tab)(({ sx }) => {
  return {
    textTransform: 'none !important',
    fontSize: 18,
    fontWeight: 400,
    width: "100%",
    minWidth: 160,
    maxWidth: 180,
    ...sx
  }
})

const MTab = ({ currentTab, handleChange, items, tabStyle = {}, itemStyle = {}, ...props }) => {

  return (
    <Tabs
      value={currentTab}
      onChange={(e, tab) => handleChange(tab)}
      textColor="inherit"
      variant="scrollable"
      sx={{ borderBottom: '1px solid #EAEAEA', ...tabStyle }}
      TabIndicatorProps={{
        style: {
          background: "#4AAF47",
          height: 1
        }
      }}
      scrollButtons="auto"
    >
      {
        items && items.map((item, index) => (
          <CustomTab key={index} label={item?.label} value={item.value} sx={{ ...itemStyle }} />
        ))
      }
    </Tabs>
  )
}

export default MTab
