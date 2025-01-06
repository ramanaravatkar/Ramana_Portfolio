
import React from 'react';

const AboutUs = () => (
  <section id="about">
    <h2>About Us</h2>
    <p>Deepika Art Printers has been serving the community since 1992. Our expertise spans all types of printing and binding works, leveraging advanced machinery and a skilled workforce to meet our clients' requirements. Led by our Owner, Ravatkar Srinivas, we promise quality, reliability, and customer satisfaction.</p>
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3>Our Approach</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '7rem', height: '7rem', borderRadius: '90%', background: '#ccc', marginBottom: '1rem' }}>Customer Interaction</div>
        <div style={{ width: '7rem', height: '7rem', borderRadius: '90%', background: '#ccc', marginBottom: '1rem' }}>Design</div>
        <div style={{ width: '7rem', height: '7rem', borderRadius: '90%', background: '#ccc', marginBottom: '1rem' }}>Build</div>
        <div style={{ width: '7rem', height: '7rem', borderRadius: '90%', background: '#ccc', marginBottom: '1rem' }}>Deliver</div>
      </div>
    </div>
  </section>
);

export default AboutUs;
