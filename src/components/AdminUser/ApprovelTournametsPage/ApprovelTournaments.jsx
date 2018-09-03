import React, { Component } from 'react';
import TournamentForApprovel from './TournamentForApprovel';
import { getTournamentsForApprovelAction, deleteTournamentForApprovalAction, createTournametAction } from "../../../actions/tournametActions";
import { connect } from "react-redux";

class ApprovelTounamets extends Component {
    constructor(props) {
        super(props);

        //bind
        this.onApprovelClicked = this.onApprovelClicked.bind(this);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    componentWillMount() {
        this.props.getTournamentsForApprovel();
    }

    onApprovelClicked(id, imgUrl, price, name, info, place, date) {
        this.props.deleteTournamentForApproval(id);
        this.props.createTournamet(imgUrl, price, name, info, place, date);
        
    }

    onDeleteClicked(id) {
        this.props.deleteTournamentForApproval(id);
    }

    render() {
        const tournamentsForApprovel = this.props.tournamentsForApprovel;

        return (
            <div>
                <h1>Approvel Tounamets</h1>
                {tournamentsForApprovel.map(el => {
                    return (
                        <TournamentForApprovel
                            key={el._id}
                            id={el._id}
                            imgUrl={el.imgUrl}
                            name={el.name}
                            place={el.place}
                            price={el.price}
                            info={el.info}
                            onApprovelClicked={this.onApprovelClicked}
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
        tournamentsForApprovel: state.tournamentsForApprovel
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTournamentsForApprovel: () => dispatch(getTournamentsForApprovelAction()),
        deleteTournamentForApproval: id => dispatch(deleteTournamentForApprovalAction(id)),
        createTournamet: (imgUrl, price, name, info, place, date) => dispatch(createTournametAction(imgUrl, price, name, info, place, date)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovelTounamets);
