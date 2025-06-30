import { Link } from "react-router-dom";
import LinkedInLogo from '../assets/linkedin.svg'
import GitHubLogo from '../assets/github.svg'
import './Footer.module.css'

const Footer = () => {
  return (
    <footer>
        <ul>
            <li><Link to="https://github.com/SrJacoby" target="_blank"><span><img src={GitHubLogo} alt="Github logo" />GitHub</span></Link></li>
            <li><Link to="https://www.linkedin.com/in/luiz-jacoby/" target="_blank"><span><img src={LinkedInLogo} alt="LinkedIn logo" />LinkedIn</span></Link></li>
        </ul>
    </footer>
  );
};

export default Footer