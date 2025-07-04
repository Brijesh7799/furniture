import React, { useState, useRef, useEffect } from "react";
import Login from "./Login";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const drawerRef = useRef(null);

  const services = [
    'Modular kitchen',
    'Wooden/Pvc Doors',
    'Wall paneling',
    'Wardrobe/T.V units',
    'Pvc ceiling',
    'Interior Furniture',
    'Aluminium windows',
    'S.S furniture'
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [drawerOpen]);

  const handleServiceClick = (service) => {
    setDrawerOpen(false);
    setShowLogin(false); // hide login on drawer navigation
    const slug = service.toLowerCase().replace(/\s|\/|\./g, '-');
    navigate(`/services/${slug}`);
  };

  return (
    <>
      <header className="main-header">
        <div>
          <img className="left" onClick={() => { setShowLogin(false); navigate('/'); }} src="/Logo.jpg" alt="Parmar Furniture Logo" />
        </div>
        <nav className="center">
          <ul>
            <li onClick={() => { setShowLogin(false); navigate('/'); }}>Home</li>
            <li onClick={() => { setShowLogin(false); navigate('/service'); }}>Service</li>
            <li onClick={() => { setShowLogin(false); navigate('/about'); }}>About</li>
            <li onClick={() => { setShowLogin(false); navigate('/product'); }}>Products</li>
            <li onClick={() => { setShowLogin(false); navigate('/contact'); }}>Contact</li>
          </ul>
        </nav>
        <div className="right">
          <li onClick={() => setShowLogin(true)}>Login</li>
          <span className="menu-icon" onClick={() => setDrawerOpen(true)}>☰</span>
        </div>
      </header>

      {drawerOpen && (
        <div className="drawer" ref={drawerRef}>
          <div className="drawer-header">
            <span className="close-icon" onClick={() => setDrawerOpen(false)}>✖</span>
            <h3>Services</h3>
          </div>
          <ul className="drawer-list">
            {services.map((service, index) => (
              <li key={index} onClick={() => handleServiceClick(service)}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showLogin && (
        <div className="login-popup-overlay" onClick={() => setShowLogin(false)}>
          <div className="login-popup" onClick={(e) => e.stopPropagation()}>
            <Login onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
