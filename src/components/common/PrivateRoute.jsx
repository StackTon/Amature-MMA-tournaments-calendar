import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class PrivateRoute extends Component {
    render() {
        if (localStorage.getItem('authToken') === null) {
            return <Redirect to="/login" />;
        };

        if(this.props.isAdmin !== true) {
            return <Redirect to="/" />;
        }

        return (
            <Route {...this.props}>
                this.props.children
            </Route>
        );
    }
}