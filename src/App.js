import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: ''
    }
  }

  handleChange = (e) => {
    const {name, value, type, checked} = e.target

    e.target.value !== '' ? e.target.className += 'inputActive' : e.target.classList += ''

    // check input type to conditionaly determine which state to employ
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
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
            <label htmlFor="firstName"> First Name
              <input
                id="firstName"
                className={`form__element inputInActive `}
                type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder={`First Name`}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="lastName"> Last Name
              <input
                id="lastName"
                className={`form__element inputInActive `}
                type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder={`Last Name`}
                onChange={this.handleChange}
              />
            </label>

            <textarea
              className={`form__element`}
              value={`Some default value`}
              onChange={this.handleChange}
            />
            <br />
            <label>
              <input
                type="checkbox"
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
              /> Is friendly?
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === `male`}
                onChange={this.handleChange}
              /> Male
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === `female`}
                onChange={this.handleChange}
              /> Female
            </label>

            <h2>{this.state.firstName} {this.state.lastName}</h2>
            {
              this.state.gender !== '' ? <h3>You are a {this.state.gender}</h3> : null
            }
          </form>
        </div> {/**End of form__container */}
      </div>
    );
  }
}

export default App;
