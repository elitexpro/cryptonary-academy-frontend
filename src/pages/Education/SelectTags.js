import React, { useState, useMemo, useEffect, useCallback } from 'react'
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
import { tagStatusSelector, tagListSelector } from 'redux/modules/tag/selectors'
import { getAllTags } from 'redux/modules/tag/actions'
import { setEducationTopicTags } from 'redux/modules/education/actions'
import { educationTopicTagsSelector } from 'redux/modules/education/selectors'
import { useDispatch, useSelector } from 'react-redux'

const SelectTags = () => {
  const dispatch = useDispatch()
  const tagList = useSelector(tagListSelector)
  const tagStatus = useSelector(tagStatusSelector)
  const topicTags = useSelector(educationTopicTagsSelector)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (tagStatus === "PENDING") {
      dispatch(setEducationTopicTags([]))
      setIsLoading(true)
    } else {
      tagList.length > 0 && dispatch(setEducationTopicTags(tagList.map((item, index) => {
        return ({
          ...item,
          value: index,
          isSelected: false
        })
      })))
      setIsLoading(false)
    }
  }, [dispatch, tagStatus, tagList])

  useEffect(() => {
    if (open) {
      let selected = []
      topicTags.forEach((item, index) => {
        item.isSelected && selected.push(index)
      })
      setSelectedTags(selected)
    }
  }, [open, topicTags])

  const loadTopicTags = useCallback(() => {
    dispatch(getAllTags())
  }, [dispatch])

  useEffect(() => {
    open && (tagStatus === "INIT" || tagStatus === "FAILED") && loadTopicTags()
  }, [open, tagStatus, loadTopicTags])

  const selectedCount = useMemo(() => topicTags.filter(item => item.isSelected).length, [topicTags])

  const toggle = () => setOpen(prev => !prev)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    toggle()
  }

  const handleClear = useCallback(() => {
    dispatch(setEducationTopicTags(topicTags.map(item => {
      return ({
        ...item,
        isSelected: false
      })
    })))
    setOpen(false)
  }, [dispatch, topicTags])

  const handleApply = useCallback(() => {
    dispatch(setEducationTopicTags(topicTags.map((item, index) => {
      return ({
        ...item,
        isSelected: !!selectedTags.find(x => x === index)
      })
    })))
    setOpen(false)
  }, [dispatch, topicTags, selectedTags])

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
            <Paper elevation={3} sx={{ mt: 2 }}>
              {isLoading && <LinearProgress sx={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }} />}
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <Box sx={{ py: 3 }}>
                  <Stack direction="row" sx={{ px: 3 }}>
                    <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>Select Topics</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>

                  <TopicSelectPaper topics={topicTags} selectedTopics={selectedTags} selectTopics={setSelectedTags} />

                  <Stack direction="row" spacing={2} sx={{ px: 3 }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <MButton color="inherit" onClick={handleClear}>Clear all</MButton>
                    <MButton
                      color="success"
                      variant="outlined"
                      onClick={handleApply}
                    >
                      Apply
                    </MButton>
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
