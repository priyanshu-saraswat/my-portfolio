import React, { useEffect, useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import htmlLogo from '../assets/icons/html.svg';
import cssLogo from '../assets/icons/css.svg';
import jsLogo from '../assets/icons/js.svg';
import awsLogo from '../assets/icons/aws.svg';
import reactLogo from '../assets/icons/react.svg';
import gitLogo from '../assets/icons/git.svg';  // Add Git logo
import vitlogo from '../assets/icons/vit.svg';
import bsssLogo from '../assets/icons/bsss.svg';
import expenseTrackerLogo from '../assets/icons/expenseTrackerLogo.png';
import movieRecommendationLogo from '../assets/icons/movieRecommendationLogo.png';
import miniProjectsLogo from '../assets/icons/miniProjectsLogo.png';

const Portfolio = () => {
  const [htmlSkill, setHtmlSkill] = useState(0);
  const [cssSkill, setCssSkill] = useState(0);
  const [jsSkill, setJsSkill] = useState(0);
  const [awsSkill, setAwsSkill] = useState(0);
  const [reactSkill, setReactSkill] = useState(0);
  const [gitSkill, setGitSkill] = useState(0);  // Add state for Git skill

  useEffect(() => {
    const animateSlider = (targetSkill, setSkill) => {
      let currentSkill = 0;
      const animationDuration = 1000;
      const frameRate = 10;

      const frames = animationDuration / frameRate;
      const increment = targetSkill / frames;

      const intervalId = setInterval(() => {
        currentSkill += increment;
        setSkill(Math.min(currentSkill, targetSkill));

        if (currentSkill >= targetSkill) {
          clearInterval(intervalId);
        }
      }, frameRate);

      return () => clearInterval(intervalId);
    };

    animateSlider(90, setHtmlSkill);
    animateSlider(90, setCssSkill);
    animateSlider(90, setJsSkill);
    animateSlider(70, setAwsSkill);
    animateSlider(50, setReactSkill);
    animateSlider(80, setGitSkill);  // Animate Git skill
  }, []);

  return (
    <div>
      <Navbar />
      <div className="portfolio-container">

        {/* Experience Section */}
        <div className="experience-section">
          <div className="section-heading">
            <h2>Experience</h2>
            <div className="blue-underline"></div>
          </div>
          <div className="experience-info">
            <h3>Front-End Development Internship</h3>
            <p>During my front-end development internship, I worked on building responsive and dynamic websites using HTML, CSS, and JavaScript. I gained hands-on experience in UI/UX design, improving my ability to create intuitive and visually appealing interfaces. I collaborated with the team to develop and deploy real-world projects, further honing my skills in web development.</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <div className="section-heading">
            <h2>Education</h2>
            <div className="blue-underline"></div>
          </div>

          {/* Master's Education */}
          <div className="education-item">
            <div className="education-logo">
              <img src={vitlogo} alt="VIT Bhopal Logo" className="logo" />
            </div>
            <div className="education-info">
              <p>VIT Bhopal</p>
              <p>Masters of Computer Application (MCA)</p>
              <p>2022 - 2024</p>
              <p>CGPA: 8.59</p>
            </div>
          </div>

          {/* Bachelor's Education */}
          <div className="education-item">
            <div className="education-logo">
              <img src={bsssLogo} alt="BSSS Logo" className="logo" />
            </div>
            <div className="education-info">
              <p>The Bhopal School of Social Sciences</p>
              <p>Bachelor of Computer Application (BCA)</p>
              <p>2019 - 2022</p>
              <p>CGPA: 8.18</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
          <div className="section-heading">
            <h2>Projects</h2>
            <div className="blue-underline"></div>
          </div>

          <div className="projects-cards">
            {/* Project 1 - Expense Tracker */}
            <div className="project-card">
              <img src={expenseTrackerLogo} alt="Expense Tracker" className="project-logo" />
              <h3>Expense Tracker</h3>
              <p>This is an Expense Tracker web application that helps users track their income and expenses. You can access it <a href="https://priyanshu-saraswat.github.io/expense-tracker/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>

            {/* Project 2 - Movie Recommendation System */}
            <div className="project-card">
              <img src={movieRecommendationLogo} alt="Movie Recommendation System" className="project-logo" />
              <h3>Movie Recommendation System</h3>
              <p>This system recommends movies based on user preferences. Check out the source code on <a href="https://github.com/priyanshu-saraswat/movie-recommendation-system" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            </div>

            {/* Project 3 - Mini Projects Website */}
            <div className="project-card">
              <img src={miniProjectsLogo} alt="Mini Projects Website" className="project-logo" />
              <h3>Mini Projects Website</h3>
              <p>This website showcases all my mini projects. You can view the collection <a href="https://priyanshu-saraswat.github.io/WebDevExploration/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          </div>
        </div>



        {/* Skills Section */}
        <div className="skills-section">
          <div className="section-heading">
            <h2>Skills</h2>
            <div className="blue-underline"></div>
          </div>

          <div className="skills-grid">
            {/* HTML Skill */}
            <div className="skill">
              <img src={htmlLogo} alt="HTML Logo" className="logo" />
              <label>HTML</label>
              <input type="range" min="0" max="100" value={htmlSkill} disabled />
            </div>

            {/* CSS Skill */}
            <div className="skill">
              <img src={cssLogo} alt="CSS Logo" className="logo" />
              <label>CSS</label>
              <input type="range" min="0" max="100" value={cssSkill} disabled />
            </div>

            {/* JavaScript Skill */}
            <div className="skill">
              <img src={jsLogo} alt="JavaScript Logo" className="logo" />
              <label>JavaScript</label>
              <input type="range" min="0" max="100" value={jsSkill} disabled />
            </div>

            {/* AWS Skill */}
            <div className="skill">
              <img src={awsLogo} alt="AWS Logo" className="logo" />
              <label>AWS</label>
              <input type="range" min="0" max="100" value={awsSkill} disabled />
            </div>

            {/* React Skill */}
            <div className="skill">
              <img src={reactLogo} alt="React Logo" className="logo" />
              <label>React</label>
              <input type="range" min="0" max="100" value={reactSkill} disabled />
            </div>

            {/* Git Skill */}
            <div className="skill">
              <img src={gitLogo} alt="Git Logo" className="logo" />
              <label>Git</label>
              <input type="range" min="0" max="100" value={gitSkill} disabled />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
