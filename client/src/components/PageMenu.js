import React from 'react'
import './PageMenu.css'
import Photo2 from '../photos/FOTO 002.jpg'
import {Link} from 'react-router-dom'

{/* <span onClick={ ()=> sendtoPage("Home")}>
<p>INICIO</p>
</span> */}

function PageMenu ({sendtoPage}){

  return(
    <div className= "PageMenu">
      <a className="Exit" onClick={ () => sendtoPage("Home")}><p>⤬‎‎‎‎‎</p></a>
      <div className="topline"></div>
        <div className="Wrap">
          <img alt="menu" src={Photo2} />
          <div className="Inner">
            <span className="Right" onClick={ ()=> sendtoPage("Menu")} >
              <a href="https://www.behance.net/usernamepepe"><p>PORTAFOLIO</p></a>
            </span>
            <span className="Right" onClick={ ()=> sendtoPage("Contact")} >
              <p>CONTACTO</p>
            </span>
          </div>
        </div>
      <div className="botline"></div>
  </div>
  )
}

export default PageMenu;