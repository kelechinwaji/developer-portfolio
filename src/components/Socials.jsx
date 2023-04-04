import {FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'

export default function Socials()
{
    return (
        <nav>
            <h1 className="logo">KelechukwuNwaji</h1>
            <div className="socials">
                <a href="https://github.com/kelechinwaji" className="social-item"><FaGithub /></a>
    
                <a href="https://www.linkedin.com/in/kelechukwu-nwaji/" className="social-item"><FaLinkedin /></a>
                <a href="https://twitter.com/kelechinwaji" className="social-item"><FaTwitter /></a>
            </div>
        </nav>
    )
}