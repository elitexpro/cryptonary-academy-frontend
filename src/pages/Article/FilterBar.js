import React, { useState } from 'react'
import {
  Box,
  Divider,
  Stack,
  Hidden,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  IconButton,
  Typography,
} from '@mui/material'
import { SearchBox } from 'components/SearchBox'
import { MButton, MButtonMenu } from 'components/CustomMaterial'
import TopicSelectPaper from './TopicSelectPaper'
import { FiHash } from 'react-icons/fi'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'

const OPTIONS = [
  { title: "Both", isSelected: true },
  { title: "Articles", isSelected: false },
  { title: "Videos", isSelected: false },
]

const CONTENT = [
  {
    category: "Video Duration",
    data: [
      { name: "15 mins", isSelected: false },
      { name: "30 mins", isSelected: false },
      { name: "Over 1 hour", isSelected: false },
    ]
  },
  {
    category: "Reading Time",
    data: [
      { name: "3 mins", isSelected: false },
      { name: "5 mins", isSelected: false },
      { name: "10+ mins", isSelected: false },
    ]
  },
]

const FilterBar = () => {
  const [options, setOptions] = useState(OPTIONS)
  const [openTopic, setOpenTopic] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleChangeType = (item) => () => {
    setOptions(prev => {
      const res = prev.map(option => {
        const { title } = option

        return {
          title,
          isSelected: title === item.title ? true : false,
        }
      })

      return res
    })
  }

  const handleTopicToggle = (e) => {
    setOpenTopic(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  return (
    <Box>
      <Stack direction="row" sx={{ mt: 5 }} spacing={2}>
        <SearchBox placeholder="Search in Basics" />
        <Hidden mdDown>
          <Stack direction="row" sx={{ p: 0.5, border: "1px solid #E4E4E4", borderRadius: "2px" }} spacing={1}>
            {
              options.map((option, index) => {
                const { isSelected, title } = option

                return (
                  <MButton
                    color={isSelected ? "success" : "inherit"}
                    key={index}
                    variant={isSelected ? "contained" : undefined}
                    fullWidth
                    sx={{
                      px: 3,
                      color: isSelected ? "#FFF" : "#909090",
                    }}
                    onClick={handleChangeType(option)}
                  >
                    {title}
                    {
                      isSelected ?
                        <DoneIcon sx={{ ml: 1, fontSize: 16 }} style={{ color: isSelected ? "#FFF" : undefined }} /> :
                        null
                    }
                  </MButton>
                )
              })
            }
          </Stack>
        </Hidden>
        {
          options.find(option => option.isSelected && (option.title === 'Videos' || option.title === 'Both')) &&
          <Hidden mdDown>
            <MButtonMenu menuData={CONTENT[0]} />
          </Hidden>
        }
        {
          options.find(option => option.isSelected && (option.title === 'Articles' || option.title === 'Both')) &&
          <Hidden mdDown>
            <MButtonMenu menuData={CONTENT[1]} />
          </Hidden>
        }
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <MButton
            color='inherit'
            sx={{ color: '#000', backgroundColor: '#FAFAFA', minWidth: '144px', height: '100%' }}
            startIcon={<FiHash sx={{ fontSize: '24px', color: '#000' }} />}
            onClick={handleTopicToggle}
          >
            Select Topics
          </MButton>
        </Box>
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Popper
        open={openTopic}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom-start'
        style={{
          zIndex: '1102',
          width: '568px',
          mt: 2,
        }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpenTopic(false)}>
                <Box sx={{ mt: 1, py: 4 }}>
                  <Stack direction="row" sx={{ px: 4 }}>
                    <Typography variant="subTitle3" sx={{ color: "#141414" }}>Select Topics</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton onClick={() => setOpenTopic(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                  <TopicSelectPaper />
                  <Stack direction="row" spacing={2} sx={{ px: 4 }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <MButton color="inherit" sx={{ width: 108, height: 48 }}>Clear all</MButton>
                    <MButton color="success" variant="outlined" sx={{ width: 108, height: 48 }}>Apply</MButton>
                  </Stack>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}

export default FilterBar
