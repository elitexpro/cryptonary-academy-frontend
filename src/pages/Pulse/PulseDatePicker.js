import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Divider,
  Hidden,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { HiOutlineCalendar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const PulseDatePicker = () => {
  return (
    <Box sx={{ mt: 6, maxWidth: 864 }}>
      <Stack direction="row" spacing={2}>
        <Stack direction="row" sx={{ width: "100%", border: "1px solid #E4E4E4", borderRadius: "4px", minHeight: 48 }}>
          <MButton color="inherit" variant="outlined" sx={{ minWidth: 0, maxWidth: 48, height: "100%", border: "none" }}>
            <HiChevronLeft />
          </MButton>
          <Divider orientation='vertical' />
          <Stack sx={{ flexGrow: 1 }} alignItems="center" justifyContent="center">
            <Typography variant="subTitle4" sx={{ color: "#141414" }}>November 19 2021</Typography>
          </Stack>
          <Divider orientation='vertical' />
          <MButton color="inherit" variant="outlined" sx={{ minWidth: 0, maxWidth: 48, height: "100%", border: "none" }}>
            <HiChevronRight />
          </MButton>
        </Stack>
        <MButton color="inherit" variant="outlined" sx={{ backgroundColor: "#FAFAFA", border: "none", px: {md: 4, xs: 2} }}>
          <HiOutlineCalendar style={{ color: "#4AAF47", fontSize: 20, minWidth: 20 }} />
          <Hidden mdDown>
            <Typography variant="subTitle4" sx={{ color: "#4AAF47", ml: 1, minWidth: 84 }}> Jump to date </Typography>
          </Hidden>
        </MButton>
      </Stack>
    </Box>
  )
}

export default PulseDatePicker
