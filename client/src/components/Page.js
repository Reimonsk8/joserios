import React from 'react'
import './Page.css'

class Page extends React.Component{
  state = {
    showContent: "Start"
  }
  nextPage = (value) => {
    this.setState({showContent: value});
  }
  componentDidMount() {
    console.log("mounted ", this.state.showContent)
    if(this.state.showContent == "Start"){
      this.setState({showContent: "Home"});
    }
  }
  render(){
    const content = this.state.showContent;
    let showComponent;//this is the conditional render
    if(content == "Home") {
      showComponent = 
      <div className="Page"onClick={ () => this.nextPage("Menu")}>  
      {showComponent}
       <div className="Wrap">
           <div className="Inner">
             <span><p>JOSE RIOS XYZ</p></span>
           </div>
         </div>
         
         <div className="Footer">
           <p>
             JOSE RIOS 2020. ALL RIGHTS RESERVED
           </p>
         </div>
     </div>

    } else if(content == "Menu") {
        showComponent = 
          <div className="Menu">
            <div className="Wrap">
              <div className="Inner">
                
                <span onClick={ () => this.nextPage("Home")}>
                  <p>HOME</p>
                </span>

                <span className="Right">
                  <p>PORTAFOLIO</p>
                </span>

                <span>
                  <p>ABOUT</p>
                </span>

                <span className="Right">
                  <p>CONTACT</p>
                </span>

              </div>
            </div>
        </div>
    }else{
      showComponent = <div></div>
    }

    return(
      <div id="Background">
        {showComponent}
      </div>
    )
  }
}

export default Page;