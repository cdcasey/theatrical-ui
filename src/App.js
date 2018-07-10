import React, { Component } from 'react';
import Nav from './components/navigation';
import Content from './components/content';
import Login from './components/login';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.api = process.env.THEATRICAL_API || 'localhost:8000';
    this.state = {
      user: false
    }
  }


  componentDidMount() {
    axios.get(`http://${this.api}/users`)
      .then((users) => {
        console.log('users api called');
      })
      .catch(err => console.error('ERR', err));
  }

  handleLoginFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getUserId() {
    return Number(document.cookie.split('=')[1]);
  }

  handleLogin(event) {
    event.preventDefault();
    axios.post(`http://${this.api}/auth`, { email: this.state.email, password: this.state.password })
      .then(response => {
        if (response.status === 200) {
          document.cookie = `id=${response.data.user.id}`;
          this.setState({ email: null, password: null, user: response.data.user });
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  render() {
    if (this.getUserId()) {
      return (
        <React.Fragment>
          <Nav />
          <Content />
        </React.Fragment>
      );
    } else {
      return (
        <Login loginHandler={this.handleLogin.bind(this)} fieldHandler={this.handleLoginFormChange.bind(this)} />
      );
    }
  }
}

export default App;
