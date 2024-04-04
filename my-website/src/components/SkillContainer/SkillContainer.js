import React from 'react'
import "./SkillContainer.css"
import skill from "../image/skills.jpg"
import { Element } from 'react-scroll'
import LinearProgress from "@material-ui/core/LinearProgress";
const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
        <img src={skill} alt=""/>
        </div>
        <div className="skillContainer__text">
            <h2>SKILLSET</h2>
            <div className="skillContainer__skillSet">
            <h5>Java</h5>
            <div className="skilContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
          </div>
          <div className="skillContainer__skillSet ">
            <h5>React</h5>
            <div className="skilContainer__slider1 skillContainer__slider2">
            <LinearProgress variant="determinate" value={75} />
          </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Nodejs</h5>
            <div className="skilContainer__slider1 skillContainer__slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>MongoDB</h5>
            <div className="skilContainer__slider1 skillContainer__slider4">
            <LinearProgress variant="determinate" value={85} />
          </div>
          </div>
        </div>
    </Element>
  )
}

export default SkillContainer;