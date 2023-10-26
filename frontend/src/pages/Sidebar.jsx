// src/components/Sidebar.js
import '../components/Styles/Sidebar.css';
import {useAuth} from '../AuthContext'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { authenticated, logout  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logic to clear user authentication (e.g., remove cookies or clear state)
    logout();
    // Redirect to the registration page after logout
    navigate('/'); // Use navigate from react-router-dom
  };
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Assets</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Notifications</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
