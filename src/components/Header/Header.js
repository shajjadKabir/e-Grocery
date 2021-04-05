import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
// import logo from '../../images/logo.PNG';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    return (
      <>
         <Navbar expand="lg">
                <Link to="/" className='header-title navbar-brand'>e-Grocery</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto header-nav">
                        <Link to="/home" className="nav-link">Home </Link>
                        <Link to="/orders" className="nav-link">Orders </Link>
                        {
                            loggedInUser.email ?
                           <p className="nav-link sign-out" onClick={()=> setLoggedInUser({})}>{loggedInUser.displayName} (sign out)</p>
                           :
                           <Link to="/login" className="nav-link">Login</Link>
                        } 
                        <Link to="/admin" className="nav-link">Admin </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </>
    );
};

export default Header;