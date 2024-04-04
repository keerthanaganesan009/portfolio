import "./TopContent.css";
import { Link } from 'react-scroll'
const TopContent = () => {
  return (
    <div className="topContent">
     <div className="topContent__container">
        <h1>Ms.Keerthana Ganesan</h1>
        <p>A Professional Web Developer</p>
        <a href="https://drive.google.com/file/d/1XRG4u4s9UC9VTOOZP8LP08bdjdbjOebE/view?usp=sharingm">
            <button className="topContent__downloadButton">
                Download resume
            </button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
        <button className="topContent__workButton">My Work</button>
        </Link>
     </div>
    </div>
  )
}

export default TopContent;