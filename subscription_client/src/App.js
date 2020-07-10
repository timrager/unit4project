import React, { Component } from 'react';
import './App.css';


class App extends Component{

  state = {
    subscriptions: []
  }
  
  componentDidMount() {
    this.getSubscriptions()
  }
  
  getSubscriptions = () => {
    fetch('http://localhost:3000/subs')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }




  render(){
    return(
      <div className="App">
        <h1>Subscription Manager</h1>
      </div>
    )
  }
}


export default App;
