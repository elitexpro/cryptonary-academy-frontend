import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  MButton,
} from 'components/CustomMaterial'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'


const QuizItem = ({ content, type, ...other }) => {
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <MButton
        color={isChecked ? 'success' : 'inherit'}
        className={isChecked ? classes.success : classes.inherit}
        sx={{ px: 2 }}
        endIcon={<CheckRoundedIcon style={{ fontSize: '24px' }} color={isChecked ? 'success' : 'inherit'} />}
        onClick={() => setIsChecked(prev => !prev)}
      >
        {content}
      </MButton>
    </>
  )

}

export default QuizItem