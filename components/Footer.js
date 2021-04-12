import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedin, faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

function Footer(){
    return (
        <div className="social-icons">
            <a href="https://github.com/CoderChirag" target="_blank" rel='noopener'><FontAwesomeIcon icon={faGithub} className="icon"/></a>
            <a href="https://www.linkedin.com/in/chirag-jain-9614481b6/" target="_blank" rel='noopener'><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
            <a href="https://www.instagram.com/coder_chirag_jain/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
            <a href="https://www.facebook.com/profile.php?id=100014606834040" target="_blank" rel='noopener'><FontAwesomeIcon icon={faFacebookF} className="icon"/></a>
            <a href="https://twitter.com/Chirag_Jain847" target="_blank" rel='noopener'><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
        </div>
    );
}

export default Footer;