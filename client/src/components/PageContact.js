import React from 'react'
import './PageContact.css'
import Photo3 from '../photos/IMG_1788.jpg'
//import Photo3 from '../photos/HOME2.jpg'

function PageContact({sendtoPage}){
  return(
    <div className="PageContact">
      <span className="Exit" onClick={ () => sendtoPage("Home")}><p>⤬‎‎‎‎‎</p></span>
      <div className="topline"></div>
      <img alt="contact" src={Photo3} />   
      <div className="Wrap"> 
        <div className="Inner">

          <div id="description">
            <div>Diseñador gráfico</div>
            <div>Fotógrafo independiente</div>
            <div>Centrado en la comunicación </div>
            <div>e identidad visual. </div>
          </div>
              
          <div className="Contact">
            <div>
              <a href="mailto:Joserios.xyz@gmail.com?subject = Feedback&body = Services">Joserios.xyz@gmail.com </a> 
            </div>
            <div>
              < a href="https://www.instagram.com/usernamepepe/">Instagram - Usernamepepe </a>
            </div>
          </div>
          
          <div className="Footer">
              <p>©JOSE RIOS 2020. ALL RIGHTS RESERVED</p>
            </div>
        </div>
      </div>

      <div className="botline"></div>
    </div>
  )
}

export default PageContact;