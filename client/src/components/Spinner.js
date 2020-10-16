import React from 'react'
import './Spinner.css'
import PageMenu from './PageMenu.js'
import PageContact from './PageContact.js'
import PageHome from './PageHome.js'
import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom'

class Spinner extends React.Component{
  state = {
    showContent: "Home"
  }

  componentDidMount() {
    console.log("mounted ", this.state.showContent)
  }

  nextPage = (value) => {
    var item = document.getElementById('SpinnerWrap');
    item.style.animation = "start 1s linear";
    setTimeout(function(){
      item.style.animation = "end 1s linear";
      this.setState({showContent: value});
    }.bind(this),1000);
    //console.log("route = " ,this.props.match.url)
  }

  render(){
    // let routerWay =
    // <Router>
    //   <Switch>
    //     <Route exact path="/" render={props => <PageHome sendtoPage={(value) => this.nextPage(value)}/>}></Route>
    //     <Route exact path="/Home" render={props => <PageHome sendtoPage={(value) => this.nextPage(value)}/>}></Route>
    //     <Route exact path="/Menu" render={props => <PageMenu sendtoPage={(value) => this.nextPage(value)}/>}> </Route>  
    //     <Route exact path="/Contact" render={props => <PageContact sendtoPage={(value) => this.nextPage(value)}/>}></Route>
    //   </Switch>
    // </Router>

    //this is the conditional render//
    const content = this.state.showContent;
    let showComponent = <p> if failed </p>;
    if(content === "Home") {
      showComponent = <PageHome sendtoPage={(value) => this.nextPage(value)}/>
    }else if(content === "Menu") {
      showComponent = <PageMenu sendtoPage={(value) => this.nextPage(value)}/>
    }else if (content === "Contact"){
      showComponent = <PageContact sendtoPage={(value) => this.nextPage(value)}/>
    }

    return(
      <div id="SpinnerWrap">
        <div id="SpinnerInner">
          {showComponent}
        </div>
      </div>
    )
  }
}

export default Spinner;
