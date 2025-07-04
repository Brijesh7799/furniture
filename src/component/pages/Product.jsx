import React from 'react';
import './Product.scss';

const services = [
  {
    title: "Modular kitchen",
    desc: "Pvc,Upvc and also Wooden and WPC",
    image: "/pvc33.jpeg",
    // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
  },
  {
    title: "Wooden/Pvc Doors",
    desc: "Wooden and WPC",
    image: "/pvc22.jpeg",
    // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="

  },
  {
    title: "Pvc Folding shutter",
    desc: "Pvc,Upvc",
    image: "/pvc11.jpeg",
    // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="

  },
  {
    title: "Pvc ceiling",
    desc: "Pop & steps type ceiling",
    image: "/pvc33.jpeg",
    // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="

  },
  {
    title: "Wardrobe",
    desc: "Wooden and WPC",
    image: "/download1.jpeg",
    // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="

  },
  {
    title: "Pvc wall paneling",
    desc: "Toatl Pvc sheets",
    image: "/pvcwall.jpeg",
        // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="

  },
];

const Product = () => {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <p className="subtitle">Explore our wide range of Furniture varieties and Interior Designs</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
