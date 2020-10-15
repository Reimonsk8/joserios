import React from 'react'
// import './Page.css'
import Photo3 from '../photos/IMG_1788.jpg'

function PageContact({sendtoPage}){
  return(
    <div className="Page">
      <div className="topline"></div>

      <div className="Wrap">
        <img alt="contact" src={Photo3} />    
        <div className="Inner">
          <div className="Contact">
            <span onClick={ () => sendtoPage("Home")}>
              <p>INICIO</p>
            </span>
            <div>
              Diseñador gráfico - Fotógrafo independiente
            </div>
            <div>
              centrado en la comunicación y la identidad visual.
            </div>
            <div className="Footer">
              <p>©JOSE RIOS 2020. ALL RIGHTS RESERVED</p>
            </div>
            <div>
              <a href="mailto:Joserios.xyz@gmail.com?subject = Feedback&body = Services">Joserios.xyz@gmail.com</a> 
            </div>
            <div>
              < a href="https://www.instagram.com/usernamepepe/">Instagram - Usernamepepe</a>
            </div>
            <div>
              < a href="https://www.behance.net/usernamepepe">Behance - Portafolio</a>
            </div>
          </div>
        </div>
      </div>

      <div className="botline"></div>
    </div>
  )
}

export default PageContact;