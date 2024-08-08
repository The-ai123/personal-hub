import "./AboutMePage.css"
import { FaFilePdf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function AboutMePage(){


    return(
        <>
            <h2>Hello!</h2>
            <p>My name is Ada and I am studying Computer Engineering at RIT.</p>
            <h3>Personal Links</h3>
            <ul>
                <li class="personalLink">
                    <a  href="./Files/Resume.pdf" download><FaFilePdf />Resume</a>
                </li>
                <li class="personalLink">
                    <a  href="https://github.com/The-ai123" download><FaGithub />GitHub</a>
                </li>
            </ul>
            
        </>
    );
}

export default AboutMePage