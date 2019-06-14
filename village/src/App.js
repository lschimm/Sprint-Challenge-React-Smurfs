import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],

      // name: '',
      // age: '',
      // height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    console.log('inside');
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
      console.log(res);
      this.setState({ smurfs: res.data })
    })
    .catch( err => {
      console.log('Error', err)
    })
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Route path="/smurf-form" component= {SmurfForm} />
        <Smurfs 
        Route exact path ="/"
        smurfs={this.state.smurfs} />
        
        {/* <Route exact path="/" /> */}
      </div>
    );
  }
}

export default App;
