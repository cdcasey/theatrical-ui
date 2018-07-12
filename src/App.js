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
      productions: [],
      postData: {}
    }
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
          this.getProductions(response.data.user.id);
          this.setState({ postData: {}, user: response.data.user });
        }
      })
      .catch((error) => {
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

  refreshData() {
    const userid = this.getUserId();
    this.getUserData(userid);
    this.getProductions(userid);
  }

  getUserData(userid) {
    axios.get(`http://${this.api}/users/${userid}`, { headers: { userid } })
      .then((response) => {
        this.setState({ email: null, password: null, user: response.data.user });
      })
      .catch(err => console.error('ERR', err));
  }

  getProductions(userid) {
    axios.get(`http://${this.api}/productions/`, { headers: { userid } })
      .then((response) => {
        const productions = this.state.productions.slice().concat(response.data.productions);
        this.setState({ productions });
      })
      .catch(err => console.error(err));
  }

  render() {
    const cookieId = this.getUserId()
    if (cookieId) {
      if (!this.state.user) {
        this.refreshData(cookieId);
      }
      return (
        <React.Fragment>
          <Nav user={this.state.user} userId={cookieId} productions={this.state.productions} />
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
