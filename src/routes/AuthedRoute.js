import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'


const AuthedRoute = ({
  component,
  ...props
}) => {
  const currentUser = useSelector(currentUserSelector)

  return <Route
    {...props}
    render={prop => currentUser
      ?
      React.createElement(component, prop)
      :
      <Redirect to='/login' />
    }
  />
}


export default AuthedRoute
