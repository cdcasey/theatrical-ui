import React from 'react';
import LoginForm from './loginForm';

export default class Login extends React.Component {
    render() {
        return (
            <LoginForm loginHandler={this.props.loginHandler} fieldHandler={this.props.fieldHandler} />
        );
    }
}