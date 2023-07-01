import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {
    const { user,logout } = useContext(AuthContext) 
    console.log(user);

    const handlelogout = () => {
        logout()
            .then(result => { })
            .catch(error => console.error(error));


    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>

                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {user && <span className='text-white'> <span className='wel'> Welcome_</span> {user.email}

                    <button className='text-xyz' onClick={handlelogout}>Log out</button></span>}
            </div>
        </nav>
    );
};

export default Header;