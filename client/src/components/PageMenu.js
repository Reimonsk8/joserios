import React from 'react'
// import './Page.css'
import Photo2 from '../photos/FOTO 002.jpg'
import {Link} from 'react-router-dom'

function PageMenu ({sendtoPage}){

  return(
    <div className= "Menu">
      <div className="topline"></div>
        <div className="Wrap">
          <img alt="menu" src={Photo2} />
          <div className="Inner">
            <span onClick={ ()=> sendtoPage("Home")}>
              <p>INICIO</p>
            </span>
            <span className="Right" onClick={ ()=> sendtoPage("Menu")} >
              <p>FOTOGRAFÍA </p>
            </span>
            <span onClick={ ()=> sendtoPage("Contact")} >
              <p>DISEÑO GRÁFICO </p>
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