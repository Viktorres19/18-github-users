/* const PrivateRoute = () => {
  return (
    <div>
      PrivateRoute
    </div>
  )
}

export default PrivateRoute */

import { Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user
  console.log(isAuthenticated)
  console.log(user)
  if (!isUser) {
    return <Navigate to='/login' />
  }
  return children
}

export default PrivateRoute

/* import { Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// Dashboard will be a child of private route - other collecting values
const PrivateRoute = ({children, ...rest}) => {
  const isUser = true
  return (
    <Route
      {...rest}
      render={()=>{
        return isUser ? children : <Navigate to='/login' />
      }}
    ></Route>
  )
}

export default PrivateRoute */