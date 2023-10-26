import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import Registration from './components/Registration';
import UserDashboard from './pages/UserDashboard';
import Registration from './components/Registration';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';
import {useAuth} from "./AuthContext";

function App() {
  // Check if the user is authenticated (e.g., by checking cookies or the authentication state)
  const { authenticated } = useAuth();
  console.log(authenticated)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />  
        <Route
          path="/registration"
          element={authenticated ? <Navigate to="/user" /> : <Registration />}
        />        
        {/* <Route path="/user" element={authenticated ? <UserDashboard /> : <Navigate to="/registration"/>} /> */}

        <Route path="/user" element={authenticated ? <UserDashboard />:<Navigate to="/registration" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
