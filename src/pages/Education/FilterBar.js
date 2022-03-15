import React, { useState, useMemo, useCallback } from 'react'
import {
  Hidden,
  Box,
  Divider,
  Stack,
  Grid,
  Chip
} from '@mui/material'
import { MButton, MDropdown } from 'components/CustomMaterial'
import { SearchBox } from 'components/SearchBox'
import { Filter } from 'containers/Filter'
import { FiSliders } from 'react-icons/fi'
import SelectTags from './SelectTags'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEducationMediaType,
  setEducationSearchValue,
  setEducationTopicTags,
  setEducationReadingTime,
  setEducationDuration,
} from 'redux/modules/education/actions'
import {
  educationMediaTypeSelector,
  educationSearchValueSelector,
  educationTopicTagsSelector,
  educationReadingTimeSelector,
  educationDurationSelector,
} from 'redux/modules/education/selectors'
import DoneIcon from '@mui/icons-material/Done'

const MEDIA_OPTIONS = [
  { text: "Articles", value: "article" },
  { text: "Videos", value: "video" },
]

const DETAIL_OPTION = [
  {
    category: "Video Duration",
    data: [
      { text: "15 mins", value: '15 mins' },
      { text: "30 mins", value: '30 mins' },
      { text: "Over 1 hour", value: 'Over 1 hour' },
    ]
  },
  {
    category: "Reading Time",
    data: [
      { text: "3 mins", value: '3 mins' },
      { text: "5 mins", value: '5 mins' },
      { text: "10+ mins", value: '10+ mins' },
    ]
  },
]

const FilterBar = () => {
  const dispatch = useDispatch()
  const [filterDrawer, setFilterDrawer] = useState(false)
  const mediaType = useSelector(educationMediaTypeSelector)
  const searchValue = useSelector(educationSearchValueSelector)
  const topicTags = useSelector(educationTopicTagsSelector)
  const readingTime = useSelector(educationReadingTimeSelector)
  const duration = useSelector(educationDurationSelector)

  const selectedTopics = useMemo(() => {
    return topicTags.filter(item => item.isSelected)
  }, [topicTags])


  const handleRemoveSelectedTag = useCallback((index) => () => {
    const compyTopics = [...topicTags]
    compyTopics[index].isSelected = false
    dispatch(setEducationTopicTags(compyTopics))
  }, [dispatch, topicTags])

  const toggleDrawer = (open) => (event) => {
    setFilterDrawer(open)
  }

  return (
    <Box sx={{ mt: { xs: 4, md: 5 } }}>
      <Stack direction="row">
        <SearchBox
          placeholder="Search Crypto School"
          value={searchValue}
          onChange={val => dispatch(setEducationSearchValue(val))}
        />

        <Hidden mdDown>
          <Stack direction="row" sx={{ p: 0.5, border: "1px solid #E4E4E4", borderRadius: "2px", ml: 2 }} spacing={1}>
            {
              MEDIA_OPTIONS.map((option, index) => {
                const { value, text } = option
                const isSelected = mediaType === value
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
                    onClick={() => dispatch(setEducationMediaType(value))}
                  >
                    {text}
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

          {mediaType === 'video' &&
            <MDropdown
              items={DETAIL_OPTION[0].data}
              label={readingTime ?? DETAIL_OPTION[0].category}
              buttonStyle={{ width: '100px' }}
              dropboxStyle={{ width: '135px' }}
              onChange={val => dispatch(setEducationReadingTime(val))}
            />
          }

          {mediaType === 'article' &&
            <MDropdown
              items={DETAIL_OPTION[1].data}
              label={duration ?? DETAIL_OPTION[1].category}
              buttonStyle={{ width: '100px' }}
              dropboxStyle={{ width: '135px' }}
              onChange={val => dispatch(setEducationDuration(val))}
            />
          }
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />

        <Box>
          <Hidden mdDown>
            <SelectTags />
          </Hidden>

          <Hidden mdUp>
            {/* need to update on detail level sectin filter */}
            <MButton
              color='inherit'
              sx={{
                ml: 2,
                px: 2,
                color: '#000',
                borderColor: '#EAEAEA',
                backgroundColor: '#F6F8FE',
                minWidth: '120px',
                height: '100%'
              }}
              startIcon={<FiSliders sx={{ fontSize: '24px', color: '#000' }} />}
              onClick={toggleDrawer(true)}
            >
              All Filters
            </MButton>

            <Filter open={filterDrawer} onClose={toggleDrawer(false)} />
          </Hidden>
        </Box>
      </Stack>

      {selectedTopics.length > 0 &&
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} >
            {
              selectedTopics.map((item, index) => (
                <Grid item xs='auto' key={index}>
                  <Chip
                    color="success"
                    label={item.name}
                    variant="outlined"
                    onDelete={handleRemoveSelectedTag(item.value)}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      }

      <Divider sx={{ my: 3 }} />
    </Box>
  )
}

export default FilterBar
