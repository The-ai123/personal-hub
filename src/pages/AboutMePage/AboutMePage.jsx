import "./AboutMePage.css"
import { FaFilePdf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function AboutMePage(){


    return(
        <>
            <h2>Hello!</h2>
            <p class="aboutmepageparagraph">My name is Ada and I am studying Computer Engineering at RIT.</p>
            <h3>Personal Links</h3>
            <ul class="personalLinks">
                <li class="personalLink">
                    <a  href="./Files/Resume.pdf" download><FaFilePdf /> Resume <FaDownload class="personalLinkHoverIcon"></FaDownload></a>
                </li>
                <li class="personalLink">
                    <a  href="https://github.com/The-ai123" download><FaGithub /> GitHub <FaExternalLinkAlt class="personalLinkHoverIcon"/></a>
                </li>
            </ul>
            
        </>
    );
}

export default AboutMePage