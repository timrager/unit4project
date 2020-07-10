import React, { Component } from 'react';
import './App.css';


class App extends Component{

  state = {
    users: []
  }
  
  componentDidMount() {
    this.getUsers()
  }
  
  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => this.setState({ users: json }))
    .catch(error => console.log(error))
  }




  render(){
    console.log(this.state.users)
    return(
      <div className="App">
        <h1>Subscription Manager</h1>
        <div>
          {this.state.users.map( user => {
            return(
              <div key={user.id} className="user">
                <h2>{ user.name }</h2>
                { user.subs.map( sub => {
                  return(
                    <div>
                      <p>{sub.name}</p>
                      <p>{sub.price}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


export default App;
