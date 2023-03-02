import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function PrivateRoute({children}) {

    const auth = useSelector((state) => state.auth.isAuth)

    const navigate = useNavigate();
    useEffect(() => {
        if(!auth) {
            navigate('/login')
        }
    }, [auth]);
    
  return children
}

export default PrivateRoute