import React, { useState } from 'react'
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

const FilterContent = ({ onClick }) => {

  const CONTENT = [
    {
      category: "Knowledge Level",
      data: [
        { name: "Beginner", isSelected: false },
        { name: "Intermediate", isSelected: false },
        { name: "Advanced", isSelected: false },
      ]
    },
    {
      category: "Preferred Media Type",
      data: [
        { name: "Video", isSelected: false },
        { name: "Text", isSelected: false },
        { name: "Both", isSelected: false },
      ]
    },
    {
      category: "Video Duration",
      data: [
        { name: "15 mins", isSelected: false },
        { name: "30 mins", isSelected: false },
        { name: "Over 1 hour", isSelected: false },
      ]
    },
  ]

  const [content, setContent] = useState(CONTENT)

  const handleClickItem = (item) => () => {
    setContent(prev => {
      const res = prev.map(x => {
        const { category, data } = x

        const datRes = data.map(x => {
          const { name, isSelected } = x

          return {
            name,
            isSelected: name === item.name ? !isSelected : isSelected
          }
        })

        return {
          category,
          data: datRes
        }
      })
      return res
    })
  }

  return (
    <Box sx={{ width: { xs: "auto", md: 480 } }}>
      <Box sx={{
        color: "#141414",
        p: {xs: 3, md: 5},
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
          {
            content.map((item, index) => {
              const { category, data } = item

              return (
                <Box key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subTitle" sx={{ color: "#555" }}>{category}</Typography>
                  </Box>
                  <Grid container>
                    {
                      data.map((item, key) => {
                        const { isSelected, name } = item

                        return (
                          <Grid item xs="auto" key={key}>
                            <MButton
                              color="inherit"
                              sx={{
                                backgroundColor: isSelected ? "#F8FCF8" : undefined,
                                color: isSelected ? "#4AAF47" : "#909090",
                                borderRadius: "20px",
                                px: isSelected ? 2 : 3.5,
                                py: 0.5,
                              }}
                              onClick={handleClickItem(item)}
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
                  <Divider sx={{ my: 3 }} />
                </Box>
              )
            })
          }
          <SelectTopics />
        </Scrollbar>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ ml: "auto", width: { xs: "100%", md: "auto" } }}>
          <MButton
            variant="contained"
            color="success"
            sx={{ color: "#FFF", px: 4, py: 1, mt: 3, width: "100%" }}
          >Apply Filters</MButton>
        </Box>
      </Box>
    </Box>
  )
}

export default FilterContent
