import React from 'react';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }

    switchBetweenLoginAndRegister() {
        this.setState({ login: !this.state.login });
    }

    render() {
        if (this.state.login) {
            return (
                <LoginForm
                    loginHandler={this.props.loginHandler}
                    fieldHandler={this.props.fieldHandler}
                    register={this.switchBetweenLoginAndRegister.bind(this)}
                />
            );
        } else {
            return (
                <RegisterForm
                    registrationHandler={this.props.registrationHandler}
                    fieldHandler={this.props.fieldHandler}
                    login={this.switchBetweenLoginAndRegister.bind(this)}
                />
            );
        }
    }
}