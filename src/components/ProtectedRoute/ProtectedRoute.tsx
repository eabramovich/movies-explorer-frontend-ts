import React, { ComponentType }from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface ProtectedRouteElementProps {
  element: ComponentType<any>;
  [key: string]: any
}

const ProtectedRouteElement: React.FC<ProtectedRouteElementProps> = ({ element: Component, ...props}) => {
  const { isLoggedIn } = useTypedSelector(state => state.user)

  return isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRouteElement;
