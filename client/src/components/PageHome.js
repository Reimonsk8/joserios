import React from 'react'
// import './Page.css'
import Photo1 from '../photos/HOME.jpg'
import {Link} from 'react-router-dom'

const PageHome = ({sendtoPage}) => {
  return(
    <div className="Page">
      <div className="Wrap">
        <img alt="home" src={Photo1} />
        <div className="Inner">
          <span onClick={ () => sendtoPage("Menu")}>
            <p>JOSÉ RIOS</p>
          </span>
          <div className="Footer">
            <div className="move">
              <p>©JOSÉ RIOS 2020. ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}
// / <div className="midline"></div>
export default PageHome;