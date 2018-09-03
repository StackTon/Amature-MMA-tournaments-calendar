import React, { Component } from 'react';
import Tournament from "./Tournament";
import { connect } from 'react-redux';
import { getTournamentsAction, deleteTournamentAction } from "../../../actions/tournametActions";

class HomePage extends Component {
    constructor(props) {
        super(props);

        //bind
        this.onDetailsClicked = this.onDetailsClicked.bind(this);
        this.onEditClicked = this.onEditClicked.bind(this);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    componentWillMount() {
        this.props.getTournaments();
    }

    onDetailsClicked(id) {
        this.props.history.push('/tournament/' + id);
    }

    onEditClicked(id) {
        this.props.history.push('/tournament/edit/' + id);
    }

    onDeleteClicked(id) {
        this.props.deleteTournament(id);
    }

    render() {
        const tounamets = this.props.tournaments;

        return (
            <div className="container">
                <h1>Welecom to amature MMA tounamets calendar</h1>
                {tounamets.map(el => {
                    return (
                        <Tournament
                            key={el._id}
                            id={el._id}
                            imgUrl={el.imgUrl}
                            name={el.name}
                            place={el.place}
                            onDetailsClicked={this.onDetailsClicked}
                            onEditClicked={this.onEditClicked}
                            onDeleteClicked={this.onDeleteClicked}
                        />
                    )
                })}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tournaments: state.tournaments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTournaments: () => dispatch(getTournamentsAction()),
        deleteTournament: id => dispatch(deleteTournamentAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);