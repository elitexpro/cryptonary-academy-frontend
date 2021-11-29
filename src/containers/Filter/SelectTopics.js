import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import DoneIcon from '@mui/icons-material/Done'

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

const SelectTopics = () => {
  const [topics, setTopcis] = useState(topicItems)

  const handleClickItem = (item) => () => {
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
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subTitle" sx={{ color: "#858585" }}>Select Topics</Typography>
      </Box>
      <Grid container spacing={1} >
        {
          topics.map((item, key) => {
            const { isSelected, text } = item

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
                  onClick={handleClickItem(item)}
                >
                  {text}
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
    </Box>
  )
}

export default SelectTopics
