import React, { Component } from 'react';
import './App.css';


class App extends Component{

  state = {
    users: [],
    formInputs: {
      name: ''
    }
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

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, 
      { [event.target.id]: event.target.value })
      this.setState(updateInput)
  }

  updateUser = (user) => {
    fetch('http://localhost:3000/users/'+user.id, {
      body: JSON.stringify(this.state.formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedUser => updatedUser.json())
    .then(jsonedUser => {
      this.setState({
        formInputs: {
          name: ''
        },
        users: [jsonedUser, ...this.state.users]
      })
    })
  }

  deleteUser = (user) => {
    fetch('http://localhost:3000/users/'+user.id, {
        method: 'DELETE'
      })
      .then(jsonedUser => {
        this.setState({
          formInputs: {
            name: ''
          },
          users: [jsonedUser, ...this.state.users]
        })
      })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/users', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdUser => {
      return createdUser.json()
    })
    .then(jsonedUser => {
      this.setState({
        formInputs: {
          name: ''
        },
        users: [jsonedUser, ...this.state.users]
      })
    })
    .catch(error => console.log(error))
  }


  render(){
    console.log(this.state.users)
    return(
      <div className="App">
        <h1>Subscription Manager</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Add User's Name</label>
            <input type="text" id="name" onChange={this.handleChange}/>
            <input type="submit" className="submit" />
          </form>
        </div>
        <div>
          { this.state.users.map( (user,index) => {
            return(
              <div key={user.id} className="user">
                <h2>{ user.name }</h2>
                <form>
                  <input type="text" id="name" onChange={this.handleChange} />
                  <button onClick={()=> this.updateUser(user)}>Update</button>
                  <button onClick={()=> this.deleteUser(user)}>Delete</button>
                </form>
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
