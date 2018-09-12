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
            currentProduction: {},
            cast: [],
            mode: null,
            postData: {}
        };
    }

    handleLoginFormChange(event) {
        this.setState({
            postData: {
                ...this.state.postData,
                [event.target.name]: event.target.value
            }
        });
    }

    handleNavClick(event) {
        event.preventDefault();
        // If there's not an active production, the side links shouldn't do anything
        if (!this.state.currentProduction.id) return;
        const eventParent =
            event.target.tagName === 'A'
                ? event.target.parentElement
                : event.target.parentElement.parentElement;
        this.setState({
            mode: eventParent.id
        });
    }

    getUserId() {
        return Number(document.cookie.split('=')[1]);
    }

    handleLogin(event) {
        event.preventDefault();
        axios
            .post(`http://${this.api}/auth`, this.state.postData)
            .then(response => {
                if (response.status === 200) {
                    document.cookie = `id=${response.data.user.id}`;
                    this.getProductions(response.data.user.id);
                    this.setState({ postData: {}, user: response.data.user });
                }
            })
            .catch(error => {
                alert(error.response.data);
            });
    }

    handleRegistration(event) {
        event.preventDefault();
        axios
            .post(`http://${this.api}/users`, this.state.postData)
            .then(response => {
                if (response.status === 200) {
                    document.cookie = `id=${response.data.user[0].id}`;
                    this.setState({
                        postData: {},
                        user: response.data.user[0]
                    });
                }
            })
            .catch(error => {
                alert(error.response.data);
            });
    }

    refreshData() {
        const userid = this.getUserId();
        this.getUserData(userid);
        this.getProductions(userid);
    }

    getUserData(userid) {
        axios
            .get(`http://${this.api}/users/${userid}`, { headers: { userid } })
            .then(response => {
                this.setState({
                    email: null,
                    password: null,
                    user: response.data.user
                });
            })
            .catch(err => console.error('ERR', err));
    }

    getProductions(userid) {
        axios
            .get(`http://${this.api}/productions/`, { headers: { userid } })
            .then(response => {
                const productions = this.state.productions
                    .slice()
                    .concat(response.data.productions);
                this.setState({ productions });
            })
            .catch(err => console.error(err));
    }

    selectProduction(event) {
        const selectedProductionId = this.state.productions.filter(
            production => production.id === Number(event.target.id)
        )[0];

        axios
            .get(
                `http://${this.api}/productions/${
                    selectedProductionId.id
                }/cast`,
                { headers: { userid: this.getUserId() } }
            )
            .then(response => {
                this.setState({ cast: response.data.cast });
            })
            .catch(err => console.error(err));

        this.setState({
            currentProduction: selectedProductionId
        });
    }

    render() {
        const cookieId = this.getUserId();
        if (cookieId) {
            if (!this.state.user) {
                this.refreshData(cookieId);
            }
            return (
                <React.Fragment>
                    <Nav
                        user={this.state.user}
                        userId={cookieId}
                        productions={this.state.productions}
                        selectProduction={this.selectProduction.bind(this)}
                        handleNavClick={this.handleNavClick.bind(this)}
                    />
                    <Content
                        mode={this.state.mode}
                        productions={this.state.productions}
                        userId={cookieId}
                        selectedProduction={this.state.currentProduction}
                        cast={this.state.cast}
                        selectProduction={this.selectProduction.bind(this)}
                    />
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
