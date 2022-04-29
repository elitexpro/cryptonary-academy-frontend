import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Typography,
  Skeleton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import DoneIcon from '@mui/icons-material/Done'
import { getAllTags } from 'redux/modules/tag/actions'
import { educationTopicTagsSelector } from 'redux/modules/education/selectors'
import { tagStatusSelector } from 'redux/modules/tag/selectors'

const SelectTopics = ({ open, selectedTags, setSelectedTags, isLoading }) => {
  const dispatch = useDispatch()
  const topicTags = useSelector(educationTopicTagsSelector)
  const tagStatus = useSelector(tagStatusSelector)

  const loadTopicTags = useCallback(() => {
    dispatch(getAllTags())
  }, [dispatch])

  useEffect(() => {
    open && (tagStatus === "INIT" || tagStatus === "FAILED") && loadTopicTags()
  }, [open, tagStatus, loadTopicTags])

  const handleClickTopic = (index) => () => {
    const findIndex = selectedTags.findIndex(x => x === index)
    const copyTopics = [...selectedTags]
    findIndex !== -1 ? copyTopics.splice(findIndex, 1) : copyTopics.push(index)
    setSelectedTags(copyTopics)
  }

  return (
    <Box>
      {isLoading ?
        <>
          <Skeleton />
          <Skeleton width="80%" />
          <Skeleton sx={{ mt: 3 }} />
          <Skeleton width="80%" />
        </>
        :
        <>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subTitle" sx={{ color: "#858585" }}>Select Topics</Typography>
          </Box>
          <Grid container spacing={1} >
            {
              topicTags.map((item, key) => {
                const { name } = item
                const isSelected = selectedTags.findIndex(x => x === key) > -1 ? true : false

                return (
                  <Grid item xs="auto" key={key}>
                    <MButton
                      color="inherit"
                      variant="outlined"
                      sx={{
                        backgroundColor: isSelected ? "#F8FCF8" : undefined,
                        color: isSelected ? "#4AAF47" : "#909090",
                        borderColor: isSelected ? "#FFF" : "#EAEAEA",
                        borderRadius: "20px",
                        px: isSelected ? 2 : 3.5,
                        py: 0.5,
                      }}
                      onClick={handleClickTopic(key)}
                    >
                      {name}
                      {
                        isSelected ?
                          <DoneIcon sx={{ ml: 1, fontSize: 16 }} style={{ color: isSelected ? "#4AAF47" : undefined }} /> :
                          null
                      }
                    </MButton>
                  </Grid>
                )
              })
            }
          </Grid>
        </>
      }
    </Box>
  )
}

export default SelectTopics
