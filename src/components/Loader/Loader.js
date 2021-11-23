import React from 'react'
import { LinearProgress } from '@mui/material'
import useStyles from './styles'

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  )
}

export default Loader
