// src/App.jsx
import React from 'react';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  const services = [
    "Wedding Invitation Cards",
    "Visiting Cards",
    "Pamphlets",
    "Bill Books",
    "Parking Slips",
    "Hotel Menu Cards",
    "Book Bindings",
    "Spiral Bindings",
    "Xerox",
    "Wall Posters",
    "DTP",
    "Design",
    "Corel Draw",
    "Flex Printing",
    "Flex Design"
  ];

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1>Deepika Art Printers</h1>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/1976261429/display_1500/stock-vector--dap-initial-letter-logo-design-1976261429.jpg"
            alt="Logo"
            style={{ width: "15%", height: "15%" }}
          />
        </div>
        <div className="image-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/032/943/739/non_2x/modern-printing-press-creates-colorful-documents-indoors-free-photo.jpg"
            alt="Modern Printing Press"
            style={{ width: "40%", height: "60%" }}
          />
          <img
            src="https://media.istockphoto.com/id/519913201/photo/printing-at-high-speed.jpg?s=612x612&w=is&k=20&c=_JMFDLqmut7yvRWg1FUuUQAz6Tp-ntG4t02OdJn_qq4="
            alt="Printing Speed"
            style={{ width: "40%", height: "18%" }}
          />
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <main>
        <Home scrollToServices={scrollToServices} />
        <Services services={services} />
        <AboutUs />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
