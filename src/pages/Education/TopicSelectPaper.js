import React, { useCallback } from 'react'
import {
  Grid,
  Chip,
  Box,
} from '@mui/material'

const TopicSelectPaper = ({ topics, selectedTopics, selectTopics }) => {

  const handleClickTopic = useCallback((index) => () => {
    const findIndex = selectedTopics.findIndex(item => item === index)
    const copyTopics = [...selectedTopics]
    findIndex !== -1 ? copyTopics.splice(findIndex, 1) : copyTopics.push(index)
    selectTopics(copyTopics)
  }, [selectedTopics, selectTopics])

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2} >
        {
          topics.map((item, index) => {
            const isSelected = selectedTopics.findIndex(x => x === index) > -1 ? true :false

            return (
              <Grid item xs='auto' key={index}>
                <Chip
                  color={isSelected ? 'success' : undefined}
                  label={item.name}
                  variant={!isSelected ? 'outlined' : undefined}
                  onClick={handleClickTopic(index)}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>

  )
}

export default TopicSelectPaper
