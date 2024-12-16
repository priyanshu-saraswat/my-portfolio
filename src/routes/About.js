import React from 'react';
import Priyanshu from '../assets/images/priyanshu.png';
import Navbar from '../components/Navbar';
import '../App.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-heading">
            About
            <div className="blue-underline"></div>
            <span className="underline"></span>
          </h1>
          <p>
            Hello, I'm Priyanshu Saraswat, a Computer Science graduate with a passion for Web Development.
          </p>

          <p>
          I have a deep interest in front-end development, particularly in creating intuitive and visually appealing user interfaces. Through my front-end internship, I gained hands-on experience in working with HTML, CSS, and JavaScript to build responsive and dynamic websites. I’ve had the opportunity to collaborate with teams to develop real-world projects and refine my skills in web design, layout, and interactivity
          </p>
          <p>
          I am eager to continue expanding my expertise in front-end technologies and am excited to contribute to creating seamless web experience.
          </p>
        </div>
        <div className="about-image">
          <img src={Priyanshu} alt="Priyanshu" />
        </div>
      </div>
    </div>
  );
};

export default About;
