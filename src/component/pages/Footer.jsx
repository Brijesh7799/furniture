// components/Footer.jsx
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="newsletter">
        <h2>SIGN UP FOR LATEST UPDATES</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <p>Will be used in accordance with our Privacy Policy</p>
        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-github"></i>
          <i className="fas fa-globe"></i>
        </div>
      </div> */}

      <div className="footer-content">
        <div className="footer-section about">
          <h3>About</h3>
          <p>Parmar Wooden & Fiber Gallery exhibited its 
            sincere commitment to quality by being the most reliable
             manufacturer of high performing PVC Door, Wooden Door, 
             Interior Furniture, Modular Kitchen and much more.</p>
          <ul>
            <li>Shop No. GF-7, Saishila Complex,
              Near Manubhai Gathiya</li>
            <li>📞 +91 7777990719</li>
            <li>📧 brijeshparmar5074@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Branch</h3>
          <ul>
            <li>Near Dsp office, Bhavnagar. </li>
            <li>Near steel cast, Bhavnagar.</li>
          
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Modular kitchen</li>
            <li>Wooden/Pvc Doors</li>
            <li>Pvc ceiling</li>
            <li> Wardrobe/T.V units</li>
            <li>Pvc shutters</li>
            <li>interior</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Tools</li>
            <li>Code Editor</li>
            <li>Verify Certificate</li>
            <li>Student Registration</li>
            <li>Internship-report</li>
            <li>Components</li>
            <li>Terms And Condition</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Parmar Wooden & Fiber Gallery All rights reserved. | Developed by Tozzu Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
