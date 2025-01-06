import React from 'react';
import './Services.css'; 

const Services = ({ services }) => (
  <section id="services">
    <h2>Services</h2>
    <p>Explore our wide range of services tailored to your needs.</p>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-box">
          {service}
        </div>
      ))}
    </div>
  </section>
);

export default Services;
