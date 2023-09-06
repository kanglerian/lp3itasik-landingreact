import React from 'react'
import { Navigate } from "react-router-dom";

const Redirect = () => {
  return (
    <div>
      <Navigate to="/suggestion" replace={true}/>
    </div>
  )
}

export default Redirect