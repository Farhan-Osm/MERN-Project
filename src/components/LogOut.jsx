import { useContext } from 'react'
import { AuthContext } from '../contact/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {

    const {logOut} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';  

    const handleLogout = () => {
       logOut().then(() => {
        // Sign-out successful.
        navigate(from, {replace: true});
        alert('Are you sure you want to log out?');
      }).catch((error) => {
        // An error happened.
        alert('Log-out successful!');
      });
    };
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Log-Out</button>
    </div>
  )
}

export default LogOut