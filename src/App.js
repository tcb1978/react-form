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
    e.target.value !== '' ? e.target.className += 'inputActive' : e.target.classList += ''
    this.setState({
      [name]: value
    })
  }

  render() {
    // import { originalName as alias } from 'module'
    return (
      <div className="App">
        <div className="form__container">
          <form className="form">
            {/*
            name is an important attribute because we can use '[e.target.name]: e.target.value' in the handleChange function
            for multiple input elements, in this case using object destructuring 'const {name, value} = e.target', then '[name]: value' in setState to avoid drilling down into the event and any possible bugs from doing so.

            the value attribute 'value={this.state.firstName}' insures that state is the one source of truth and is what is called a 'controled form' perfectly matching up with what is in state.
            */}
            <label htmlFor="firstName">Name</label>
            <input
            id="firstName"
            className={`inputInActive `}
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder={`First Name`}
            onChange={this.handleChange}/>

            <label htmlFor="lastName">Name</label>
            <input
            id="lastName"
            className={`inputInActive `}
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder={`Last Name`}
            onChange={this.handleChange}/>
            <h2>{this.state.firstName} {this.state.lastName}</h2>
          </form>
        </div> {/**End of form__container */}
      </div>
    );
  }
}

export default App;
