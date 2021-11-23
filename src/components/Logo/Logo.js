import React from 'react'
import useStyles from './styles.js'
import logo from 'assets/logo/logo.svg'
import { useHistory } from 'react-router-dom'

const Logo = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <img className={classes.root} src={logo} alt='logo' onClick={e => history.push('/')} />
  )

}

export default Logo