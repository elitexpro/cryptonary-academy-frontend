import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  Grid,
  Chip,
} from '@mui/material'

const topicItems = [
  { text: 'Blockchain', isSelected: false },
  { text: 'NFT', isSelected: false },
  { text: 'Bitcoin', isSelected: false },
  { text: 'FUD', isSelected: false },
  { text: 'DeFi', isSelected: false },
  { text: 'Centralized', isSelected: false },
  { text: 'Bullish', isSelected: false },
  { text: 'Mining', isSelected: false },
  { text: 'Fiat', isSelected: false },
  { text: 'Altcoins', isSelected: false },
  { text: 'Wallet', isSelected: false },
  { text: 'JOMO', isSelected: false },
  { text: 'FOMO', isSelected: false },
]

const TopicSelectPaper = () => {
  const classes = useStyles()
  const [topics, setTopcis] = useState(topicItems)

  const handleClickTopic = (item) => () => {
    setTopcis(prev => {
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
    <div className={classes.topicSelectPaper}>
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
    </div>

  )
}

export default TopicSelectPaper
