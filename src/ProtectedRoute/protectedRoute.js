
import {  useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useEffect } from 'react'





const ProtectedRoute = ({children}) => {
   
  
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log('auth',isAuthenticated);

    const navigate=useNavigate()


    useEffect(() => {
      if (isAuthenticated) {
        navigate("/home");
      }
    }, [isAuthenticated]);


  return children;
    
}

export default ProtectedRoute
