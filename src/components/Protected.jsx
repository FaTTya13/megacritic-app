import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

const Protected = ({ users, children }) => {  
  if (users) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default Protected;
