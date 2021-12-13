import React from 'react'
import {
  Grid,
  Chip,
  Box,
} from '@mui/material'

const TopicSelectPaper = ({ topics, setTopics }) => {
  const handleClickTopic = (item) => () => {
    setTopics(prev => {
      const res = prev.map(x => {
        const { isSelected, text } = x
        return {
          text,
          isSelected: text === item.text ? !isSelected : isSelected
        }

      })
      return res
    })
  }

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={2} >
        {
          topics.map((item, key) => (
            <Grid item xs='auto' key={key}>
              <Chip
                color={item.isSelected ? 'success' : undefined}
                label={item.text}
                variant={!item.isSelected ? 'outlined' : undefined}
                onClick={handleClickTopic(item)}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>

  )
}

export default TopicSelectPaper
