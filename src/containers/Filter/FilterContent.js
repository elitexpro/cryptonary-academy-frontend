import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Grid,
  IconButton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { Scrollbar } from 'components/Scrollbar'
import SelectTopics from './SelectTopics'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { setEducationTopicTags } from 'redux/modules/education/actions'
import { educationTopicTagsSelector } from 'redux/modules/education/selectors'

const MEDIA_OPTIONS = [
  { name: "Video", value: 'video' },
  { name: "Text", value: 'text' },
]

const VIDEO_CONTENT = {
  category: "Video Duration",
  data: [
    { name: "15 mins", value: 15 },
    { name: "30 mins", value: 30 },
    { name: "Over 1 hour", value: 60 },
  ]
}

const FilterContent = ({ open, onClick, isLoading }) => {
  const dispatch = useDispatch()
  const topicTags = useSelector(educationTopicTagsSelector)
  const [mediaType, setMediaType] = useState(null)
  const [videoDuration, setVideoDuration] = useState(0)
  const [selectedTags, setSelectedTags] = useState([])

  const handleApply = useCallback(() => {
    dispatch(setEducationTopicTags(topicTags.map((item, index) => {
      return ({
        ...item,
        isSelected: selectedTags.find(x => x === index) >= 0 ? true : false
      })
    })))
    onClick()
  }, [dispatch, topicTags, selectedTags, onClick])

  useEffect(() => {
    if (open) {
      let selected = []
      topicTags.forEach((item, index) => {
        item.isSelected && selected.push(index)
      })
      setSelectedTags(selected)
    }
  }, [open, topicTags])

  return (
    <Box sx={{ width: { xs: "auto", md: 480 } }}>
      <Box sx={{
        color: "#141414",
        p: { xs: 3, md: 5 },
        height: { md: "100vh", xs: "calc(100vh - 100px)" },
        display: "flex",
        flexDirection: "column"
      }}>
        <Stack direction="row" alignItems="center">
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4">Filters</Typography>
          </Box>
          <IconButton onClick={onClick}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ mt: 3, mb: 5 }} />
        <Scrollbar >
          <Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subTitle" sx={{ color: "#555" }}>Preferred Media Type</Typography>
            </Box>
            <Grid container>
              {
                MEDIA_OPTIONS.map((item, key) => {
                  const { value, name } = item

                  return (
                    <Grid item xs="auto" key={key}>
                      <MButton
                        color="inherit"
                        sx={{
                          backgroundColor: mediaType === value ? "#F8FCF8" : undefined,
                          color: mediaType === value ? "#4AAF47" : "#909090",
                          borderRadius: "20px",
                          px: mediaType === value ? 2 : 3.5,
                          py: 0.5,
                        }}
                        onClick={() => setMediaType(value)}
                      >
                        {name}
                        {
                          mediaType === value ?
                            <DoneIcon sx={{ ml: 1, fontSize: 16 }} style={{ color: mediaType === value ? "#4AAF47" : undefined }} /> :
                            null
                        }
                      </MButton>
                    </Grid>
                  )
                })
              }
            </Grid>
            <Divider sx={{ my: 3 }} />

            {mediaType === 'video' &&
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subTitle" sx={{ color: "#555" }}>{VIDEO_CONTENT.category}</Typography>
                </Box>
                <Grid container>
                  {
                    VIDEO_CONTENT.data?.map((item, key) => {
                      const { name, value } = item

                      return (
                        <Grid item xs="auto" key={key}>
                          <MButton
                            color="inherit"
                            sx={{
                              backgroundColor: videoDuration === value ? "#F8FCF8" : undefined,
                              color: videoDuration === value ? "#4AAF47" : "#909090",
                              borderRadius: "20px",
                              px: videoDuration === value ? 2 : 3.5,
                              py: 0.5,
                            }}
                            onClick={() => setVideoDuration(value)}
                          >
                            {name}
                            {
                              videoDuration === value ?
                                <DoneIcon
                                  sx={{ ml: 1, fontSize: 16 }}
                                  style={{ color: videoDuration === value ? "#4AAF47" : undefined }}
                                /> :
                                null
                            }
                          </MButton>
                        </Grid>
                      )
                    })
                  }
                </Grid>
                <Divider sx={{ my: 3 }} />
              </Box>
            }
          </Box>
          <SelectTopics open={open} selectedTags={selectedTags} setSelectedTags={setSelectedTags} isLoading={isLoading} />
        </Scrollbar>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ ml: "auto", width: { xs: "100%", md: "auto" } }}>
          <MButton
            variant="contained"
            color="success"
            sx={{ color: "#FFF", px: 4, py: 1, mt: 3, width: "100%" }}
            onClick={handleApply}
          >Apply Filters</MButton>
        </Box>
      </Box>
    </Box>
  )
}

export default FilterContent
