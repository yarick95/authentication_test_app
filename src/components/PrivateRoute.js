import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth/AuthProvider';

function PrivateRoute({children}) {
  const {user} = useContext(AuthContext)
  if (!user) {
    return <Navigate to='/auth' replace />;
  }

  return <>{children}</>;
}

export default PrivateRoute