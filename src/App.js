import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/HomePage/HomePage';
import { connect } from 'react-redux';
import { logoutAction } from './actions/authActions';
import TournamentDetailsPage from './components/AuthorizedUser/TournamentDetailsPage/TournamentDetailsPage';
import RegisterForTournamentPage from './components/AuthorizedUser/RegisterForTournamentPage/RegisterForTournamentPage';
import CreateTournament from './components/AuthorizedUser/CreateTournamentPage/CreateTournament';
import ApprovelTounamets from './components/AdminUser/ApprovelTournametsPage/ApprovelTournaments';
import AdminPage from './components/AdminUser/AdminPanelPage/AdminPage';
import EditTounamentPage from './components/AdminUser/EditTounamentPage/EditTounamentPage';
import PageNotFound from './components/common/PageNotFound';


class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/tournament/:tournament" exact component={TournamentDetailsPage} />
                    <Route path="/tournament/register/:tournament" component={RegisterForTournamentPage} />
                    <Route path="/tournament/edit/:tournament" component={EditTounamentPage} />
                    <Route path="/create/tournament" component={CreateTournament} />
                    <Route path="/approvel/tournamens" component={ApprovelTounamets} />
                    <Route path="/admin/panel" component={AdminPage} />
                    <Route path="" component={PageNotFound} />
                    
                </Switch>
            </div>
        );
    }
}

function mapState(state) {
    return {};
}

function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logoutAction())
    };
}


export default withRouter(connect(mapState, mapDispatch)(App));