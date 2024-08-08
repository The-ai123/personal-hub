//import NavigationButton from "./NavigationButton"

import './Header.css'


function Header(props) {

  const sendData = props.setPage;


    return (
      <>
      <div class="bar">
        <div class="nameBox">adasprojects.net</div>
        <div onClick={() => sendData("AboutMePage")} class="button">About Me</div>
        <div class="button">About This Website</div>
        <div onClick={() => sendData("OpenGLPage")} class="button">OpenGL Projects</div>
      </div>
      <br></br>
      </>
    )
  }
  
  export default Header
  