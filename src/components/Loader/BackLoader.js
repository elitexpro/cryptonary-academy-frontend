import React from 'react'
import { CircularProgress } from '@mui/material'
import useStyles from './styles'


const BackLoader = () => {
  const classes = useStyles()
  return (
    <div className={classes.backdrop}>
      <CircularProgress color="inherit" />
    </div>
  )
}

export default BackLoader
