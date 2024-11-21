import React from "react";
import "../style/Hero.css";
import Image from "next/image";
import myImg from "../../../Public/Images/banner.webp";

const Hero = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="container">
          <div className="hero-section">
            <div className="text-section">
              <h2 className="home-title">Lets Create Something Beautiful Together✨</h2>
              <p className="home-description">
                I specialize in designing modern, user-friendly websites that not only look great but also perform seamlessly across all devices. Whether you're building a brand-new website or revamping an existing one, I bring your ideas to life with cutting-edge design and clean code.
              </p>
            </div>
            <div className="image-section">
              <Image src={myImg} alt="Portrait of team member one" width={500} height={300} />
            </div>
          </div>
          <div className="button-section space-x-3">
            <button type="button" className="home-button">Learn More..</button>
            <button type="button" className="home-button">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
