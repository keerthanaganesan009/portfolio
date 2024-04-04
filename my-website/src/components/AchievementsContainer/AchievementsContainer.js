// AchievementsContainer.js

import React from 'react';
import { Element } from 'react-scroll';
import './AchievementsContainer.css';

const AchievementsContainer = () => {
  return (
    <div className="container">
      <div className="headingContainer">
        <h1 className="achievementHeading">Achievements</h1>
      </div>
      <div className="achievementsContainer">
        <Element className="listContainer" id="ach">
          <ul className="achievementsList">
            <li>Secured third place with a cooperative team effort in the CTS Digital Nurture Technoverse 2023 Hackathon</li>
            <li>Solved 200+ problems in Leetcode and 600+ challenges on Skillrack and earning multiple certificates</li>
          </ul>
        </Element>
      </div>
      <div className="headingContainer">
        <h1 className="certificationHeading">Certifications</h1>
      </div>
      <div className="certificationsContainer">
        <Element className="listContainer">
          <ul className="certificationsList">
            <li>Full Stack Web Development on GUVI</li>
            <li>Javascript Essential Training on Linkedin Learning</li>
            <li>Advanced Node.js on Linkedin Learning</li>
            <li>MongoDB Cloud Essential Training on Linkedin Learning</li>
            {/* Add more certifications as needed */}
          </ul>
        </Element>
      </div>
    </div>
  );
};

export default AchievementsContainer;
