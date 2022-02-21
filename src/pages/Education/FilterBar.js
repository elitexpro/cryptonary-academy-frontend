import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
  Hidden,
  Box,
  Divider,
  Stack,
  Grid,
  Chip
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { SearchBox } from 'components/SearchBox'
import { Filter } from 'containers/Filter'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { FiSliders } from 'react-icons/fi'
import SelectTags from './SelectTags'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTags } from 'redux/modules/tag/actions'
import { tagStatusSelector, tagListSelector } from 'redux/modules/tag/selectors'

// const OPTIONS = [
//   { title: "Both", isSelected: true },
//   { title: "Articles", isSelected: false },
//   { title: "Videos", isSelected: false },
// ]

// const CONTENT = [
//   {
//     category: "Video Duration",
//     data: [
//       { name: "15 mins", isSelected: false },
//       { name: "30 mins", isSelected: false },
//       { name: "Over 1 hour", isSelected: false },
//     ]
//   },
//   {
//     category: "Reading Time",
//     data: [
//       { name: "3 mins", isSelected: false },
//       { name: "5 mins", isSelected: false },
//       { name: "10+ mins", isSelected: false },
//     ]
//   },
// ]

const FilterBar = () => {
  const dispatch = useDispatch()
  const [filterDrawer, setFilterDrawer] = useState(false)
  const tagList = useSelector(tagListSelector)
  const tagStatus = useSelector(tagStatusSelector)
  const [isLoading, setIsLoading] = useState(false)
  // const [options, setOptions] = useState(OPTIONS)
  const [openTopic, setOpenTopic] = useState(false)
  const [topics, setTopics] = useState([])

  const selectedTopics = useMemo(() => {
    return topics.filter(item => item.isSelected)
  }, [topics])

  // const handleChangeType = (item) => () => {
  //   setOptions(prev => {
  //     const res = prev.map(option => {
  //       const { title } = option

  //       return {
  //         title,
  //         isSelected: title === item.title ? true : false,
  //       }
  //     })

  //     return res
  //   })
  // }

  useEffect(() => {
    if (tagStatus === "PENDING") {
      setTopics([])
      setIsLoading(true)
    } else {
      setTopics(tagList.map(item => {
        return ({
          name: item.name,
          isSelected: false
        })
      }))
      setIsLoading(false)
    }
  }, [tagStatus, tagList])

  const loadTopicTags = useCallback(() => {
    dispatch(getAllTags())
  }, [dispatch])

  useEffect(() => {
    openTopic && (tagStatus === "INIT" || tagStatus === "FAILED") && loadTopicTags()
  }, [openTopic, tagStatus, loadTopicTags])

  const handleTopicToggle = (e) => {
    setOpenTopic(prev => !prev)
  }


  const handleDelete = (index) => () => {
    const tmp = [...topics]
    tmp[index].isSelected = false
    setTopics(tmp)
  }
  const toggleDrawer = (open) => (event) => {
    setFilterDrawer(open)
  }

  return (
    <Box sx={{ mt: { xs: 4, md: 5 } }}>
      <Stack direction="row">
        <SearchBox />

        <Hidden mdDown>
          <MButton
            color='inherit'
            variant='outlined'
            sx={{ ml: 2, px: 2, color: '#555', borderColor: '#EAEAEA' }}
            endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: '24px' }} />}
          >
            Difficulty Level
          </MButton>
          <MButton
            color='inherit'
            variant='outlined'
            sx={{ ml: 2, px: 2, color: '#555', borderColor: '#EAEAEA' }}
            endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: '24px' }} />}
          >
            Media Type
          </MButton>
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />

        <Box>
          <Hidden mdDown>
            <SelectTags
              tags={topics}
              open={openTopic}
              toggle={handleTopicToggle}
              apply={setTopics}
              isLoading={isLoading}
            />
          </Hidden>
          <Hidden mdUp>
            <MButton
              color='inherit'
              sx={{ ml: 2, px: 2, color: '#000', borderColor: '#EAEAEA', backgroundColor: '#F6F8FE', minWidth: '120px', height: '100%' }}
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
                    onDelete={handleDelete(index)}
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
