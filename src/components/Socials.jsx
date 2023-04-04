import {FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'

export default function Socials()
{
    return (
        <nav>
            <h1 className="logo">emmanuelMilord</h1>
            <div className="socials">
                <a href="https://github.com/GuyNamedEJ" className="social-item"><FaGithub /></a>
                <a href="https://www.frontendmentor.io/profile/GuyNamedEJ" className="social-item"><SiFrontendmentor /></a>
                <a href="https://www.linkedin.com/in/emmanuel-milord/" className="social-item"><FaLinkedin /></a>
                <a href="https://twitter.com/GuyNamedEJ" className="social-item"><FaTwitter /></a>
            </div>
        </nav>
    )
}