import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf ={ name: this.state.smurfs }
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        this.setState(obj => ({...this.state.smurfs, newSmurf }))
      })
      .catch(err => {
        console.log('Error', err)
      })
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <div>
          <button type="submit" className="button">Add to the village</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
