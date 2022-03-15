import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Stack,
  Chip,
  Skeleton,
  Box,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { getFormattedText } from 'helpers'
import { alphaTagsSelector } from 'redux/modules/alpha/selectors'

const AlphaTags = ({ isLoading, alphaTags, setAlphaTags }) => {
  const tags = useSelector(alphaTagsSelector)

  useEffect(() => {
    setAlphaTags(tags[0] && tags[0].subCategories.map(item => {
      return {
        isSelected: false,
        text: item
      }
    }))
  }, [tags, setAlphaTags])

  const handleClickTopic = (item) => () => {
    setAlphaTags(prev => prev.map(x => {
      const { isSelected, text } = x

      return {
        text,
        isSelected: text === item.text ? !isSelected : isSelected
      }
    }))
  }

  const handleClearFilter = () => {
    setAlphaTags(prev => prev.map(item => {
      const { text } = item

      return {
        text,
        isSelected: false,
      }
    }))
  }

  return (
    <Box sx={{ mt: 6 }}>
      {
        (isLoading && tags?.length === 0)
          ?
          <Skeleton width="100%" />
          :
          <Stack direction="row" spacing={1} alignItems="center">
            {alphaTags?.map((item, index) => (
              <Chip
                key={index}
                color={item.isSelected ? 'success' : undefined}
                label={getFormattedText(item.text)}
                variant={!item.isSelected ? 'outlined' : undefined}
                onClick={handleClickTopic(item)}
              />
            ))}

            <MButton
              variant="inherit"
              onClick={handleClearFilter}
            >Clear filters</MButton>
          </Stack>
      }
    </Box>
  )
}

export default AlphaTags
