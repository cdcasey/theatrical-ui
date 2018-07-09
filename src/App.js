import React, { Component } from 'react';
import Nav from './components/navigation';
import Content from './components/content';
import axios from 'axios';

class App extends Component {


  componentDidMount() {
    const api = process.env.THEATRICAL_API || 'localhost:8000';
    axios.get(`http://${api}/users`)
      .then((users) => {
        console.log('users api called');
      })
      .catch(err => console.err)
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
