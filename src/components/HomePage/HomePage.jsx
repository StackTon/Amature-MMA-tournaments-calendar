import React, { Component } from 'react';
import Tournament from "./Tournament";
import { connect } from 'react-redux';
import { getTournamentsAction } from "../../actions/tournametActions";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getTournaments();
    }

    render() {
        let tounamets = this.props.tournaments || [[]];

        return (
            <div className="container">
                <h1>Welecom to amature MMA tounamets calendar</h1>
                {tounamets[0].map(el => {
                    console.log(el)
                    return (
                        <Tournament
                            key={el._id}
                            imgUrl={el.imgUrl}
                            name={el.name}
                            place={el.place}
                        />
                    )
                })}

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.tournaments.tournaments);

    return {
        tournaments: state.tournaments.tournaments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTournaments: () => dispatch(getTournamentsAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);