import React, { useState } from 'react'
import {
  Stack,
  Typography,
  Divider,
  Hidden,
  Grid,
  Container,
  Box,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import Sticky from 'react-stickynode'

const PulseDatePicker = () => {
  const [isPinned, setIsPinned] = useState(false)

  const handleStickyStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsPinned(true)
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsPinned(false)
    }
  }

  return (
    <Sticky innerZ='2' onStateChange={handleStickyStateChange}>
      <Box>
        <Container maxWidth="xl">
          <Grid container sx={{ py: 4.5, background: "white" }} spacing={4}>
            <Grid item xs={12} md={8}  >
              <Stack
                direction="row"
                spacing={2}
              >
                <Stack
                  direction="row"
                  sx={{
                    width: "100%",
                    border: "1px solid #E4E4E4",
                    borderRadius: "4px",
                    height: 48
                  }}
                >
                  <MButton
                    color="inherit"
                    variant="text"
                    sx={{ width: 48, minWidth: 0, background: "#FAFAFA", borderRadius: "2px 0px 0px 2px" }}
                  >
                    <KeyboardArrowLeftRoundedIcon />
                  </MButton>

                  <Divider orientation='vertical' />

                  <Stack sx={{ flexGrow: 1 }} alignItems="center" justifyContent="center">
                    <Typography variant="subTitle4" sx={{ color: "#141414" }}>November 19 2021</Typography>
                  </Stack>

                  <Divider orientation='vertical' />

                  <MButton
                    color="inherit"
                    variant="text"
                    sx={{ width: 48, minWidth: 0, background: "#FAFAFA", borderRadius: "0px 2px 2px 0px" }}
                  >
                    <ChevronRightRoundedIcon />
                  </MButton>
                </Stack>

                <MButton
                  color="inherit"
                  variant="outlined"
                  sx={{ backgroundColor: "#FAFAFA", border: "none", px: { md: 4, xs: 2 } }}
                >
                  <EventNoteRoundedIcon style={{ color: "#4AAF47", minWidth: 20 }} />
                  <Hidden mdDown>
                    <Typography variant="subTitle4" sx={{ color: "#4AAF47", ml: 1, minWidth: 84 }}> Jump to date </Typography>
                  </Hidden>
                </MButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Hidden mdDown>
          {isPinned && <Divider />}
        </Hidden>
      </Box>
    </Sticky>
  )
}

export default PulseDatePicker
