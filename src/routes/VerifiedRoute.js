import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'


const VerifiedRoute = ({
  component,
  ...props
}) => {
  const currentUser = useSelector(currentUserSelector)

  return <Route
    {...props}
    render={prop => (!currentUser || currentUser?.isEmailVerified)
      ?
      React.createElement(component, prop)
      :
      <Redirect to='/verify' />
    }
  />
}


export default VerifiedRoute
