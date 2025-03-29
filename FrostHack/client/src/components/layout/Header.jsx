// import from libraries
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


// import from files
import icon from '../../assets/icon.png'


// header component
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img alt="" className="icon" src={icon}></img>
                <NavLink to="/">Project Name</NavLink>
            </div>
            <div className="header-right">
                <NavLink to="/test" className="test">
                    Test 
                </NavLink>
                <NavLink to="/test" className="test">
                    Test 
                </NavLink>
                <NavLink to="/test" className="test">
                    Test 
                </NavLink>
                <NavLink to="/test" className="test">
                    Test 
                </NavLink>
            </div>
        </header>
    );
};

export default Header;