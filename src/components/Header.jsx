import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './images/planet.png'

const Header = () => {
  
  return(
    <>
      <div className="headContainer">
        <div name="logo">
          <img src={ planet } alt="Planet" />
          <h1>Space Travelers' Hub</h1>
        </div>
        <div name="links">
          <ul>
            <li><NavLink to="/" className={({ isActive }) =>
                isActive ? 'active' : 'reactLink'
              }>Rockets</NavLink></li>
            <li><NavLink to="/missions" className={({ isActive }) =>
                isActive ? 'active' : 'reactLink'
              }>Missions</NavLink></li>
            <li>|</li>
            <li><NavLink to="/myProfile" className={({ isActive }) =>
                isActive ? 'active' : 'reactLink'
              }>My Profile</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
