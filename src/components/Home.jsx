
import React from 'react';

const Home = ({ scrollToServices }) => (
  <section id="home">
    <h2>Home</h2>
    <p>Welcome to our website! We provide top-notch printing services.</p>
    <img
      src="https://img.freepik.com/free-vector/organic-printing-industry-illustration_23-2148899175.jpg?semt=ais_hybrid"
      alt="Printing Speed"
      style={{ width: "50%", height: "40%" }}
    />
   <p> </p>
    <button onClick={scrollToServices} style={{ padding: '0.5rem 1rem', fontSize: '1rem', marginTop: '1rem' }}>
      Click Here for Services
    </button>
  </section>
);

export default Home;
