import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ element, ...props }) {
  const { authenticated } = useAuth();

  return (
    <Route
      {...props}
      element={authenticated ? element : <Navigate to="/registration" />}
    />
  );
}

export default PrivateRoute;
