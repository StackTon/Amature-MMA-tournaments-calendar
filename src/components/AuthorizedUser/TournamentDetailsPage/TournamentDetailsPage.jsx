import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTournamentByIdAction } from '../../../actions/tournametsActions';

class TournamentDetailsPage extends Component {
    constructor(props) {
        super(props);

        //bind 
        this.onRegisterClicked = this.onRegisterClicked.bind(this);
    }

    componentWillMount() {
        this.props.getTournamentByIdAction(this.props.match.params.id);
    }

    onRegisterClicked(id) {
        this.props.history.push("/tournament/register/" + id)
    }

    render() {
        const { imgUrl, price, name, info, place, date, _id } = this.props.detailsTournament[0] || []
        return (
            <div>
                <img src={imgUrl} alt="mma" />
                <h2>{name}</h2>
                <div>{place}</div>
                <div>price: {price}$</div>
                <div>date: {date}</div>
                <div>{info}</div>
                <button onClick={() => this.onRegisterClicked(_id)}>Register</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detailsTournament: state.detailsTournament
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTournamentByIdAction: id => dispatch(getTournamentByIdAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentDetailsPage);
