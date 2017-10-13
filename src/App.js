import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    request
    .get('https://freegeoip.net/json/')
    //.set('Content-Type', 'application/x-www-form-urlencoded')
    //.send({ username: "username", password: "password" })
    .end(function(err, res){
    console.log(res.body);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <form  onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} name="name"  onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
