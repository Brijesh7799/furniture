// components/Services.jsx
import React from 'react';
import './Services.scss';

const services = [
  { title: "Modular kitchen", desc: "Pvc,Upvc and also Wooden and WPC" },
  { title: "Wooden/Pvc Doors", desc: " Wooden and WPC" },
  { title: "Wall paneling", desc: "Pvc,Upvc " },
  { title: "Pvc ceiling", desc: "Pop & steps type ceiling" },
  { title: "Wardrobe/T.V units", desc: "Pvc,Upvc and also Wooden and WPC" },
  { title: "Pvc shutters", desc: "Pvc,Upvc" },
  { title: "All type of Hardware", desc: "Pvc&Metal" },
  { title: "Interior Designing", desc: "All type of Interior Designing" },
  { title: "Aluminium Furniture", desc: "All Furniture" },

];

const Services = () => {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <p className="subtitle">Explore our wide range of Furniture varities and Interior Designs</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
