import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavItem = ({ to, label, icon, activeIcon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-item ${isActive ? 'active' : ''}`}>
      <img
        src={isActive && activeIcon ? activeIcon : icon}
        alt={label}
        className="nav-icon"
      />
      <span className="label">{label}</span>
      {isActive && <div className="active-bar" />}
    </Link>
  );
};

export default NavItem;