import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <form className="form">
          {/*
          name is an important attribute because we can use '[e.target.name]: e.target.value' in the handleChange function
          for multiple input elements, in this case using object destructuring 'const {name, value} = e.target', then '[name]: value' in setState to avoid drilling down into the event and any possible bugs from doing so.

          the value attribute 'value={this.state.firstName}' insures that state is the one source of truth and is what is called a 'controled form' perfectly matching up with what is in state.
          */}
          <input
          className="input"
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}/>
          <input
          className="input"
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}/>
          <h2>{this.state.firstName} {this.state.lastName}</h2>
        </form>
      </div>
    );
  }
}

export default App;
