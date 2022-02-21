import React, { useState, useMemo, useEffect } from 'react'
import {
  Box,
  Stack,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  IconButton,
  Typography,
  LinearProgress
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { FiHash } from 'react-icons/fi'
import TopicSelectPaper from './TopicSelectPaper'
import CloseIcon from '@mui/icons-material/Close'

const SelectTags = ({
  tags,
  open,
  toggle,
  apply,
  isLoading,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    setSelectedTags(tags)
  }, [tags])

  const selectedCount = useMemo(() => {
    return selectedTags.filter(item => item.isSelected).length
  }, [selectedTags])

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    toggle()
  }

  const handleClear = () => {
    apply(tags.map(item => {
      const { name } = item
      return ({
        name,
        isSelected: false
      })
    }))

    toggle()
  }

  const handleApply = () => {
    apply(selectedTags)
    toggle()
  }

  const handleClose = () => {
    console.log(tags, selectedTags, 'ere')
    apply(tags)
    toggle()
  }

  return (
    <>
      <MButton
        color='inherit'
        sx={{ color: '#000', backgroundColor: '#FAFAFA', minWidth: '176px', height: '100%' }}
        startIcon={<FiHash sx={{ fontSize: '24px', color: '#000' }} />}
        endIcon={
          selectedCount > 0 &&
          <Stack sx={{ backgroundColor: "#4AAF47", borderRadius: "16px", width: 24, height: 24, textAlign: "center" }}>
            <Typography variant="subTitle4" sx={{ color: "#FFF" }}>{selectedCount}</Typography>
          </Stack>
        }
        onClick={handleClick}
      >
        Select Topics
      </MButton>

      <Popper
        open={open}
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
              {isLoading && <LinearProgress sx={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }} />}
              <ClickAwayListener onClickAway={toggle}>
                <Box sx={{ mt: 2, py: 4 }}>

                  <Stack direction="row" sx={{ px: 4 }}>
                    <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>Select Topics</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>

                  <TopicSelectPaper topics={selectedTags} setTopics={setSelectedTags} />

                  <Stack direction="row" spacing={2} sx={{ px: 4 }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <MButton color="inherit" sx={{ width: 108, height: 48 }} onClick={handleClear}>Clear all</MButton>
                    <MButton
                      color="success"
                      variant="outlined"
                      sx={{ width: 108, height: 48 }}
                      onClick={handleApply}
                    >Apply</MButton>
                  </Stack>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SelectTags
