import React from 'react'
import './Page.css'
import Photo1 from '../photos/HOME.jpg'
import Photo2 from '../photos/FOTO 002.jpg'
import Photo3 from '../photos/IMG_1788.jpg'


class Page extends React.Component{
  state = {
    showContent: "Home"
  }
  nextPage = (value) => {
    this.setState({showContent: value});
  }
  componentDidMount() {
    console.log("mounted ", this.state.showContent)
  }
  render(){
    const content = this.state.showContent;
    let showComponent;//this is the conditional render
    if(content === "Home") {
      showComponent = 
      <div className="Page">
        <div className="Wrap">
          <img alt="home" src={Photo1} />
          <div className="Inner">
            <span onClick={ () => this.nextPage("Menu")}>
              <p>JOSÉ RÍOS XYZ</p>
            </span>
            <div className="Footer">
              <p>©JOSE RIOS 2020. ALL RIGHTS RESERVED</p>
            </div>
        </div>
        </div>
        <div className="midline"></div>
     </div>

    }else if(content === "Menu") {
      showComponent = 
        <div className= "Menu">
          <div className="topline"></div>
          <div className="Wrap">
          <img alt="menu" src={Photo2} />
            <div className="Inner">
              <span onClick={ () => this.nextPage("Home")}>
                  <p>INICIO</p>
                </span>
              <span className="Right" onClick={ () => this.nextPage("Contact")} >
                <p>FOTOGRAFÍA </p>
              </span>
              <span onClick={ () => this.nextPage("Contact")} >
                <p>DISEÑO GRÁFICO </p>
              </span>

              <span className="Right" onClick={ () => this.nextPage("Contact")} >
                <p>CONTACTO</p>
              </span>

            </div>
          </div>
          <div className="botline"></div>
        </div>
    }else if (content === "Contact"){
      showComponent = 
      <div className="Page">
        <div className="topline"></div>
        <div className="Wrap">
        <img alt="contact" src={Photo3} />    
            <div className="Inner">
              <div className="Contact">
                <span onClick={ () => this.nextPage("Home")}>
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
                  <a href="https://www.instagram.com/usernamepepe/">Joserios.xyz@gmail.com</a> 
                </div>
                <div>
                  < a href="https://www.instagram.com/usernamepepe/">Instagram - Usernamepepe</a>
                </div>
              </div>
            </div>
        </div>
        <div className="botline"></div>
      </div>
    }

    return(
      <div id="Background">
        {showComponent}
      </div>
    )
  }
}

export default Page;