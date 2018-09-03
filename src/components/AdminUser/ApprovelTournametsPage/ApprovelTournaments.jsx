import React, { Component } from 'react';
import TournamentForApprovel from './TournamentForApprovel';
import { getTournamentsForApprovelAction } from "../../../actions/tournametActions";
import { connect } from "react-redux";

class ApprovelTounamets extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getTournamentsForApprovel();
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
                            imgUrl={el.imgUrl}
                            name={el.name}
                            place={el.place}
                            price={el.price}
                            info={el.info}
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
        getTournamentsForApprovel: () => dispatch(getTournamentsForApprovelAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovelTounamets);
