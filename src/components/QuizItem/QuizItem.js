import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  MButton,
} from 'components/CustomMaterial'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'


const QuizItem = ({ content, type, index, ...other }) => {
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <MButton
        color={isChecked ? 'success' : 'inherit'}
        className={isChecked ? classes.success : classes.inherit}
        sx={{
          px: isChecked ? 2 : 3.8,
          fontSize: 16,
          height: {md: 56, xs: 48},
          width: "100%",
          display: "flex",
          justifyContent: index === 0 && "space-between"
        }}
        endIcon={isChecked && <CheckRoundedIcon style={{ fontSize: '24px' }} color={isChecked ? 'success' : 'inherit'} />}
        onClick={() => setIsChecked(prev => !prev)}
      >
        {content}
      </MButton>
    </>
  )

}

export default QuizItem