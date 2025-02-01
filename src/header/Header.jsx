import './Header.css';

function Header(props) {
  const sendData = props.setPage;

  return (
    <header className="header">
      <div className="nameBox">adasprojects.net</div>
      <nav className="nav">
        <div onClick={() => sendData("AboutMePage")} className="navButton">About Me</div>
        <div onClick={() => sendData("AboutThisWebsitePage")} className="navButton">About This Website</div>
        <div onClick={() => sendData("OpenGLPage")} className="navButton">OpenGL Projects</div>
      </nav>
    </header>
  );
}

export default Header;
