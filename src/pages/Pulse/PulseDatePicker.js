import React, { useState } from 'react'
import {
  Stack,
  Typography,
  Divider,
  Hidden,
  Grid,
  Container,
  Box,
  TextField,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import Sticky from 'react-stickynode'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { pulsePinDateSelector } from 'redux/modules/global/selectors'
import { setPulsePinDate } from 'redux/modules/global/actions'
import moment from 'moment'

const PulseDatePicker = () => {
  const dispatch = useDispatch()
  const [isPinned, setIsPinned] = useState(false)
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const pinDate = useSelector(pulsePinDateSelector)

  const handleStickyStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsPinned(true)
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsPinned(false)
    }
  }

  const handlePickerToggle = (e) => {
    setOpenDatePicker(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  const HandlePrevDate = () => {
    dispatch(setPulsePinDate(moment(pinDate).subtract(1, "day")))
  }

  const HandleNextDate = () => {
    dispatch(setPulsePinDate(moment(pinDate).add(1, "day")))
  }

  return (
    <Sticky innerZ='2' onStateChange={handleStickyStateChange}>
      <Box>
        <Container maxWidth="xl">
          <Grid container sx={{ py: 4.5, background: "white", pr: { md: 2, xs: 0 } }}>
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
                    onClick={HandlePrevDate}
                  >
                    <KeyboardArrowLeftRoundedIcon />
                  </MButton>

                  <Divider orientation='vertical' />

                  <Stack sx={{ flexGrow: 1 }} alignItems="center" justifyContent="center">
                    <Typography variant="subTitle4" sx={{ color: "#141414" }}>
                      {moment(pinDate).format("MMMM DD YYYY")}
                    </Typography>
                  </Stack>

                  <Divider orientation='vertical' />

                  <MButton
                    color="inherit"
                    variant="text"
                    sx={{ width: 48, minWidth: 0, background: "#FAFAFA", borderRadius: "0px 2px 2px 0px" }}
                    onClick={HandleNextDate}
                  >
                    <ChevronRightRoundedIcon />
                  </MButton>
                </Stack>

                <MButton
                  color="inherit"
                  variant="outlined"
                  sx={{ backgroundColor: "#FAFAFA", border: "none", px: { md: 4, xs: 2 } }}
                  onClick={handlePickerToggle}
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

      <Popper
        open={openDatePicker}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom-end'
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper elevation={3} sx={{ p: 1, mt: 0.5 }}>
              <ClickAwayListener onClickAway={() => setOpenDatePicker(false)}>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                      displayStaticWrapperAs="desktop"
                      openTo="day"
                      value={pinDate}
                      onChange={(newValue) => {
                        dispatch(setPulsePinDate(newValue))
                        setOpenDatePicker(false)
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Sticky>
  )
}

export default PulseDatePicker
