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
      user: false,
      postData: {}
    }
  }

  componentDidMount() {
    axios.get(`http://${this.api}/users`)
      .then((users) => {
      })
      .catch(err => console.error('ERR', err));
  }

  handleLoginFormChange(event) {
    this.setState({
      postData: { ...this.state.postData, [event.target.name]: event.target.value }
    });
  }

  getUserId() {
    return Number(document.cookie.split('=')[1]);
  }

  handleLogin(event) {
    event.preventDefault();
    axios.post(`http://${this.api}/auth`, this.state.postData)
      .then(response => {
        if (response.status === 200) {
          document.cookie = `id=${response.data.user.id}`;
          this.setState({ postData: {}, user: response.data.user });
        }
      })
      .catch((error) => {
        // console.log('error');
        alert(error.response.data);
      });
  }

  handleRegistration(event) {
    event.preventDefault()
    axios.post(`http://${this.api}/users`, this.state.postData)
      .then(response => {
        if (response.status === 200) {
          document.cookie = `id=${response.data.user[0].id}`;
          this.setState({ postData: {}, user: response.data.user[0] });
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  getUserData(userid) {
    axios.get(`http://${this.api}/users/${userid}`, { headers: { userid } })
      .then((response) => {
        this.setState({ email: null, password: null, user: response.data.user });
      })
      .catch(err => console.error('ERR', err));
  }

  render() {
    const id = this.getUserId()
    if (id) {
      if (!this.state.user) {
        this.getUserData(id);
      }
      return (
        <React.Fragment>
          <Nav user={this.state.user} userId={id} />
          <Content user={this.state.user} />
        </React.Fragment>
      );
    } else {
      return (
        <Login
          loginHandler={this.handleLogin.bind(this)}
          registrationHandler={this.handleRegistration.bind(this)}
          fieldHandler={this.handleLoginFormChange.bind(this)}
        />
      );
    }
  }
}

export default App;
