import React from "react";
import "./Footer.css"; 
import {Link} from 'react-router-dom';


import log1 from './Images/insta.webp'
import log2 from './Images/you.webp'
import log3 from './Images/twt.webp'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';


const Footer = () => {
  return (
    <footer>

      <div className="footer-container">

        <div className="footer-section">
          <h3>
          <p><a href="#"  style={{color:"white" , textDecoration:"none"}}>Terms</a></p>
          </h3>
          <ul>
          <li><a href="#" style={{color:"white" , textDecoration:"none"}}>Privacy Policy</a></li>
          <li><a href="#" style={{color:"white" , textDecoration:"none"}}>Terms and Conditions</a></li>
          <li><a href="#" style={{color:"white" , textDecoration:"none"}}>Copyright Policy</a></li>
          <li><a href="#" style={{color:"white" , textDecoration:"none"}}>Code of Conduct</a></li>
          <li><a href="#" style={{color:"white" , textDecoration:"none"}}>Fees and Charges</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Freelancer</h3>
          <ul>
            <li><a href="#" style={{color:"white" , textDecoration:"none"}}>Categories</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Projects</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Contests</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Freelancers</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Enterprise</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Membership</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Preferred Freelancer Program</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Project Management</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Local Jobs</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Photo Anywhere</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Showcase</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>API for Developers</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Get Verified</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Desktop App</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#" style={{color:"white", textDecoration:"none"}}>About us</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>How it Works</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Security</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Investor</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Sitemap</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Stories</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>News</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Teams</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Awards</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Press Releases</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Security</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Partners</h3>
          <ul>
            <li><a href="#" style={{color:"white" , textDecoration:"GrayText"}}>Escrow.com</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Loadshift</a></li>
            <li><a href="#"style={{color:"white" , textDecoration:"none"}}>Warrior Forum</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Apps</h3>
          <a href="#" id="icons-material/Instagram">
            
          <img src={log1} alt='' style={{height:'35px'}}></img>
          </a>
          <a href="#" id="icon">
          <img src={log2} alt='' style={{height:'35px'}}></img>
          </a>
          <a href="#"id="icon">
          <img src={log3} alt='' style={{height:'35px'}}></img>
          </a>
          <br/>
        </div>
      </div>
      <Link to ="Main">Main</Link>
    </footer>
  );
};

export default Footer;
