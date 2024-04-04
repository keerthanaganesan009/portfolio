import { IconButton } from '@material-ui/core'
import {Element} from "react-scroll";
import { Twitter , Facebook, Instagram, LinkedIn} from "@material-ui/icons";
import "./Contact.css"
const Contact = () => {
  return (
   <Element className="contact" id="contact">
    <h1>Contact</h1>
    <div className="contact__container">
    <p>
    Email : <span>keerthanaganesan000@gmail.com</span>
    </p>
    <p>
    Mobile Number : <span>86103 01342</span></p>
    <p>
    Github Username :{" "}
    <a href="https://github.com/keerthanaganesan009" target="_blank" rel="noopener noreferrer">
    <span>keerthanaganesan009</span>
    </a>
    </p>
    <div className="contact__icons">
        <a href="https://www.linkedin.com/in/keerthana-ganesan-49ab90239/">
        <IconButton>
         <LinkedIn/>
        </IconButton>
    </a>
    <a href="https://www.facebook.com/share/TwNnz57wTBokZXN7/?mibextid=qi2Omg">
        <IconButton>
         <Facebook/>
        </IconButton>
    </a>
    <a href="https://www.instagram.com/__.little_keerthy.__/">
        <IconButton>
         <Instagram/>
        </IconButton>
    </a>
    <a href="https://x.com/i_keerthana009?t=FElO_XlHW0-YIQTkALRFTQ&s=09">
        <IconButton>
         <Twitter/>
        </IconButton>
    </a>
    </div>
    </div>
   </Element>
  )
}

export default Contact