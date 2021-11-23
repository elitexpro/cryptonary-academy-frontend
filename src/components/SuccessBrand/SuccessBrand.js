import React from 'react'
import useStyles from './styles.js'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'


const SuccessBrand = () => {
  const classes = useStyles()

  return (
    <CheckRoundedIcon className={classes.root} />
  )

}

export default SuccessBrand