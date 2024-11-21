import React from "react";
import Image from "next/image";
import "../style/About.css"
const About = () => {
  return (
    <div className="about-page">
    <section className="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
        Hello! My name is Shafique Baloch and I am a passionate Front-End Web Designer. I specialize in creating visually stunning, user-friendly websites that provide the best possible experience across all devices. With expertise in HTML, CSS, JavaScript, and various front-end frameworks, I strive to bring innovative and responsive designs to life.
        My focus is on both aesthetics and functionality, ensuring that the websites I design not only look great but also perform flawlessly. I believe in continuous learning and staying up-to-date with the latest web design trends to deliver high-quality and modern digital experiences. Feel free to explore my work and connect with me for any design projects!
        </p>
        <div className="team">
          
          <div className="team-member">
          <Image src="/Images/pr-2.jpeg" alt="Portrait of team member one" width={500} height={300} />
            <h3 className="team-member-name">Sobia Khan</h3>
            <p className="team-member-role">Senior Designer</p>
          </div>
          <div className="team-member">
          <Image src="/Images/pr-1.jpeg" alt="Portrait of team member one" width={500} height={300} />
        
            <h3 className="team-member-name">Muhammad Shafique</h3>
            <p className="team-member-role">Lead Developer</p>
          </div>
          <div className="team-member">
          <Image src="/Images/pr-3.jpeg" alt="Portrait of team member one" width={500} height={300} />
            <h3 className="team-member-name">Aliza Shah</h3>
            <p className="team-member-role">Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default About;
