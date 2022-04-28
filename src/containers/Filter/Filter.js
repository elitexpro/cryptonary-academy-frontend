import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Drawer,
  Modal,
  Hidden,
  Box,
} from '@mui/material'
import FilterContent from './FilterContent'
import { setEducationTopicTags } from 'redux/modules/education/actions'
import { tagStatusSelector, tagListSelector } from 'redux/modules/tag/selectors'

const Filter = ({ open, onClose }) => {
  const dispatch = useDispatch()
  const tagList = useSelector(tagListSelector)
  const tagStatus = useSelector(tagStatusSelector)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (tagStatus === "PENDING") {
      dispatch(setEducationTopicTags([]))
      setIsLoading(true)
    } else {
      tagList.length > 0 && dispatch(setEducationTopicTags(tagList.map((item, index) => {
        return ({
          ...item,
          value: index,
          isSelected: false
        })
      })))
      setIsLoading(false)
    }
  }, [dispatch, tagStatus, tagList])

  return (
    <Box>
      <Hidden mdUp>
        <Modal open={open}>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -100%)',
              width: '100%',
              border: 'none',
            }}
          >
            <FilterContent open={open} onClick={onClose} isLoading={isLoading} />
          </Box>
        </Modal>
      </Hidden>

      <Hidden mdDown>
        <Drawer anchor="right" open={open} onClose={onClose}>
          <FilterContent open={open} onClick={onClose} isLoading={isLoading} />
        </Drawer>
      </Hidden>
    </Box>
  )
}

export default Filter
