import { useAuth } from '../AuthContext'; // Import the useAuth hook
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
//import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const { authenticated } = useAuth();
//  console.log(authenticated)
  //const navigate = useNavigate();
  return (
    <div>
      {authenticated ? (
         <div className="App">
         <Sidebar />
         <div className="main-content">
           <Body />
           <Footer />
         </div>
       </div>
      ) : (
        <div>
          <p>You are not authenticated. Please complete the registration process.</p>
          <a href="/">Go to Registration</a>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
