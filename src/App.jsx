import { useState } from 'react'
import OpenGLPage from './pages/openGLPage/OpenGLPage.jsx'
import AboutMePage from './pages/AboutMePage/AboutMePage.jsx'
import AboutThisWebsitePage from './pages/AboutThisWebsitePage/AboutThisWebsitePage.jsx'
import IdleGTNHPage from './pages/IdleGTNHPage/IdleGTNHPage.jsx'
import Header from './header/Header.jsx'
import './App.css'

function App() {

  let starterPageElement;
  const queryParameters = new URLSearchParams(window.location.search)
  const urlPage = queryParameters.get("pg");

  function setStarterPage(page){
    if(page == "AboutMePage"){
      starterPageElement = <AboutMePage/>;
    }else if(page == "OpenGLPage"){
      starterPageElement = <OpenGLPage/>;
    }else if(page == "AboutThisWebsitePage"){
      starterPageElement = <AboutThisWebsitePage/>;
    }else if(page == "IdleGTNHPage"){
      starterPageElement = <IdleGTNHPage/>;
    }
  }

  

  setStarterPage(urlPage)
  if(starterPageElement == null){
    setStarterPage(localStorage.getItem("currentPage"))
  }
  if(starterPageElement == null){
    setStarterPage("OpenGLPage")
  }
  
  const [currentPage, setCurrentPage] = useState(starterPageElement);


  function updatePage(page){
    
    localStorage.setItem("currentPage", page)
    
    if(page == "AboutMePage"){
      setCurrentPage(<AboutMePage/>)
    }else if(page == "OpenGLPage"){
      setCurrentPage(<OpenGLPage/>)
    }else if(page == "AboutThisWebsitePage"){
      setCurrentPage(<AboutThisWebsitePage/>)
    }else if(page == "IdleGTNHPage"){
      setCurrentPage(<IdleGTNHPage/>)
    }
  }




  return (
    <>
    <Header setPage={updatePage}/>
    <div class="appBreaks">
    <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
    
    {currentPage}
    </>
  )
}

export default App
