import React from 'react'
import { Element } from 'react-scroll';
import TopContent from '../TopContent/TopContent';
import "./TopContainer.css"
export const TopContainer = () => {
  return (
    <div>
     <Element name="about" className="topContainer">
        <TopContent/>
     </Element>
    </div>
  )
}
export default TopContainer;
