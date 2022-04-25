import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Chip,
  Skeleton,
  Box,
  Grid,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { alphaTagsSelector } from 'redux/modules/alpha/selectors'
import CheckIcon from '@mui/icons-material/Check'

const AlphaTags = ({ isLoading, alphaTags, setAlphaTags }) => {
  const tags = useSelector(alphaTagsSelector)

  useEffect(() => {
    setAlphaTags(tags[0] && tags[0].subCategories.map(item => {
      return {
        isSelected: false,
        text: item.subCategory,
        name: item.niceName,
      }
    }))
  }, [tags, setAlphaTags])

  const handleClickTopic = (item) => () => {
    setAlphaTags(prev => prev.map(x => {
      const { isSelected, text, name } = x

      return {
        text,
        name,
        isSelected: text === item.text ? !isSelected : isSelected
      }
    }))
  }

  const handleClearFilter = () => {
    setAlphaTags(prev => prev.map(item => {
      const { text, name } = item

      return {
        text,
        name,
        isSelected: false,
      }
    }))
  }

  return (
    <Box sx={{ mt: 6, display: 'flex', alignItems: 'center' }}>
      {
        (isLoading && alphaTags?.length === 0)
          ?
          <Skeleton width="100%" />
          :
          <Grid container columnSpacing={1} alignItems="center">
            {alphaTags?.map((item, index) => (
              <Grid item md="auto" key={index}>
                <Chip
                  color={item.isSelected ? 'success' : undefined}
                  label={item.name}
                  variant='outlined'
                  onClick={handleClickTopic(item)}
                  icon={
                    item.isSelected ?
                      <CheckIcon
                        style={{ width: 16, height: 16, marginLeft: '-8px', marginRight: '8px' }}
                      /> :
                      undefined
                  }
                  sx={{ flexDirection: 'row-reverse', mb: 1 }}
                />
              </Grid>
            ))}

            <Grid item md="auto">
              <MButton
                variant="inherit"
                onClick={handleClearFilter}
                sx={{ mb: 1 }}
              >Clear filters</MButton>
            </Grid>
          </Grid>
      }
    </Box>
  )
}

export default AlphaTags
