import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from './actions/authActions';

// components
import Header from './components/common/Header';
import Register from './components/UnauthorizedUser/Register';
import Login from './components/UnauthorizedUser/Login';
import Home from './components/AuthorizedUser/Home/Home';
import CreateTournament from './components/AuthorizedUser/CreateTournament/CreateTournament';
import AdminPanel from './components/AdminUser/AdminPanel/AdminPanel';
import PageNotFound from './components/common/PageNotFound';
import UnauthHome from "./components/UnauthorizedUser/UnauthHome";
import Details from './components/AuthorizedUser/Details/Details';
import RegisterForTournament from './components/AuthorizedUser/RegisterForTournament/RegisterForTournament';
import ApprovalTournamets from './components/AdminUser/ApprovalTournamets/ApprovalTournamets';
import EditTounament from './components/AdminUser/EditTounament/EditTounament';



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
                    <Route exact path="/" component={localStorage.getItem('authToken') === null ? UnauthHome : Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/tournament/:id" exact component={Details} />
                    <Route path="/tournament/register/:id" component={RegisterForTournament} />
                    <Route path="/tournament/edit/:id" component={EditTounament} />
                    <Route path="/create/tournament" component={CreateTournament} />
                    <Route path="/approvel/tournamens" component={ApprovalTournamets} />
                    <Route path="/admin/panel" component={AdminPanel} />
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