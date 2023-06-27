import React from 'react';
import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav className='navBar'>
        <ul>
          <li className="Logo"><Image />CITY HOSPITAL</li>
          <div className="navList">
            <li><a href='/'>Home</a></li>
            <li><a href="/ourdoctors">Our Doctors</a></li>
          {/*<li><a href="/uploadrec">Upload Records</a></li>*/}
            <li><a href="/aboutus">About us</a></li>
            <li>{isAuthenticated && <p> {user.name}</p>}</li>
            {isAuthenticated ? (
              <li>
                <a id='login' onClick={() => logout({logoutParams: {returnTo: window.location.origin} },
                  Swal.fire({
                    icon: 'success',
                    title: 'Log Out',
                    text: 'SuccessFully Log Out',
                    showConfirmButton: true,
                    timer: 3700
                  }))}>Log Out</a>
              </li>
            ) : (
              <li><a id='login' onClick={() => loginWithRedirect()}>Login</a></li>
              
            )}
          </div>
        </ul>
      </nav>
      <hr style={{ color: 'white', position: 'relative', top: '-15px' }} />
      </>
  );
}
const Image = () => {
  return (
    <img
      src='./images/logo.png'
      alt="error load"
    />
  );
};
export default Navbar;
