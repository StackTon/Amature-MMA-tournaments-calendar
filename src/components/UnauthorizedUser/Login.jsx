import React, { Component } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { loginAction, redirect } from '../../actions/authActions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '' 
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loginSuccess) {
            this.props.redirect();
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                        label="Username"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

function mapState(state) {
    return {
        loginSuccess: state.login.success
    };
}

function mapDispatch(dispatch) {
    return {
        login: (username, password) => dispatch(loginAction(username, password)),
        redirect: () => dispatch(redirect())
    };
}

export default connect(mapState, mapDispatch)(Login);