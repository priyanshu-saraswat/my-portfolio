import React from 'react';
import HeroImg from '../assets/images/hero-bg.jpg';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg';
import EmailIcon from '../assets/icons/email-icon.svg';
import InstagramIcon from '../assets/icons/instagram-icon.svg';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-image" src={HeroImg} alt="HeroImg" />
        <div className="mask-overlay"></div>
      </div>
      <div className="container">
        <h1>
          PRIYANSHU <span>SARASWAT</span>
        </h1>
        <p>Front End Developer</p>
        <p className='contact-icons'>
          <a href='https://www.linkedin.com/in/priyanshu-saraswat/' className='icon-link' target='_blank' rel='noopener noreferrer'>
            <img src={LinkedInIcon} alt='LinkedIn' className='icon' />
          </a>
          <a href='mailto:priyanshu.saraswat13@gmail.com' className='icon-link'>
            <img src={EmailIcon} alt='Email' className='icon' />
          </a>
          <a href='https://www.instagram.com/priiiyaaanshu__/' className='icon-link' target='_blank' rel='noopener noreferrer'>
            <img src={InstagramIcon} alt='Instagram' className='icon' />
          </a>
        </p>


      </div>
    </div>
  );
};

export default Hero;
