import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <header>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {!loggedIn && <NavLink to="/login" activeClassName="active">Login</NavLink>}
                {!loggedIn && <NavLink to="/register" activeClassName="active">Register</NavLink>}
                {loggedIn && <NavLink to="/create/tournament" activeClassName="active">Create Tounamet</NavLink>}
                {!loggedIn && <NavLink to="/approvel/tournamens" activeClassName="active">Approvel Tounamets</NavLink>}
                {!loggedIn && <NavLink to="/admin/panel" activeClassName="active">Admin Panel</NavLink>}
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
            </header>
        );
    }
}