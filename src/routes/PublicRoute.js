import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'


const PublicRoute = ({
  component,
  ...props
}) => {
  const currentUser = useSelector(currentUserSelector)

  return <Route
    {...props}
    render={prop => currentUser
      ?
      <Redirect to='/' />
      :
      React.createElement(component, prop)
    }
  />
}

export default PublicRoute
