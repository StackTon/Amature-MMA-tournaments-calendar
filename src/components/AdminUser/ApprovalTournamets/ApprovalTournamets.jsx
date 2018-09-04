import React, { Component } from 'react';
import { createTournametAction } from "../../../actions/tournametsActions";
import { getTournamentsForApprovalAction, deleteTournamentForApprovalAction } from '../../../actions/tournamentsForApprovalActions';
import { connect } from "react-redux";
import TournamentBox from '../../common/TournamentBox';

class ApprovalTournamets extends Component {
    constructor(props) {
        super(props);

        //bind
        this.onApprovalClicked = this.onApprovalClicked.bind(this);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    componentWillMount() {
        this.props.getTournamentsForApproval();
    }

    onApprovalClicked(id, imgUrl, price, name, info, place, date) {
        this.props.deleteTournamentForApproval(id);
        this.props.createTournamet(imgUrl, price, name, info, place, date);

    }

    onDeleteClicked(id) {
        this.props.deleteTournamentForApproval(id);
    }

    render() {
        const tournamentsForApproval = this.props.tournamentsForApproval || [];

        return (
            <div>
                <h1>Approval Tounamets</h1>
                {tournamentsForApproval.map(el => {
                    return (
                        <TournamentBox
                            key={el._id}
                            id={el._id}
                            imgUrl={el.imgUrl}
                            name={el.name}
                            place={el.place}
                            price={el.price}
                            info={el.info}
                            onApprovalClicked={this.onApprovalClicked}
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
        tournamentsForApproval: state.tournamentsForApproval
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTournamentsForApproval: () => dispatch(getTournamentsForApprovalAction()),
        deleteTournamentForApproval: id => dispatch(deleteTournamentForApprovalAction(id)),
        createTournamet: (imgUrl, price, name, info, place, date) => dispatch(createTournametAction(imgUrl, price, name, info, place, date)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovalTournamets);
