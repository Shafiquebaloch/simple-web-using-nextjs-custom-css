import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobile,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "../style/Services.css"
const Services = () => {
  return (
    <div className="services-page">
  <section className="services">
    <div className="container">
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
      <div className="service-card">
          <FaDatabase className="service-icon" />
          <h3 className="service-heading">Database Management</h3>
          <p className="service-description">Designing and maintaining databases.</p>
        </div>
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3 className="service-heading">Web Development</h3>
          <p className="service-description">Creating responsive and modern websites.</p>
        </div>

        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3 className="service-heading">UI/UX Design</h3>
          <p className="service-description">Designing user-friendly interfaces.</p>
        </div>

        <div className="service-card">
          <FaMobile className="service-icon" />
          <h3 className="service-heading">Mobile Development</h3>
          <p className="service-description">Building mobile applications for iOS and Android.</p>
        </div>

        <div className="service-card">
          <FaMagnifyingGlass className="service-icon" />
          <h3 className="service-heading">SEO Optimization</h3>
          <p className="service-description">Improving website visibility on search engines.</p>
        </div>

        <div className="service-card">
          <FaCloud className="service-icon" />
          <h3 className="service-heading">Cloud Services</h3>
          <p className="service-description">Deploying and managing cloud infrastructure.</p>
        </div>

        
      </div>
    </div>
  </section>
</div>

  );
};

export default Services;
