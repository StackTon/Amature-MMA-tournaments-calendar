import React, { Component } from 'react';
import Input from '../../common/Input';
import { connect } from 'react-redux';
import { redirect } from '../../../actions/tournametsActions';
import { createTournametForApprovalAction } from '../../../actions/tournamentsForApprovalActions';


class CreateTournament extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: "",
            price: 0,
            name: "",
            info: "",
            place: "",
            date: ""
        }

        //bind

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.createTournametForApprovelSuccess) {
            this.props.redirect();
            this.props.history.push('/');
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.createTournametForApproval(
            this.state.imgUrl,
            this.state.price,
            this.state.name,
            this.state.info,
            this.state.place,
            this.state.date
        );
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>Create Tournament</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="imgUrl"
                        value={this.state.imgUrl}
                        onChange={this.onChangeHandler}
                        label="ImgUrl"
                    />
                    <Input
                        name="price"
                        value={this.state.price}
                        onChange={this.onChangeHandler}
                        label="price"
                        type="number"
                    />
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
                    <Input
                        name="info"
                        value={this.state.info}
                        onChange={this.onChangeHandler}
                        label="Info"
                    />
                    <Input
                        name="place"
                        value={this.state.place}
                        onChange={this.onChangeHandler}
                        label="Place"
                    />
                    <Input
                        name="date"
                        value={this.state.date}
                        onChange={this.onChangeHandler}
                        label="Date"
                    />
                    <button>Create</button>
                </form>
            </div>
        );
    }
}

function mapDispatch(dispatch) {
    return {
        createTournametForApproval: (imgUrl, price, name, info, place, date) => dispatch(createTournametForApprovalAction(imgUrl, price, name, info, place, date)),
        redirect: () => dispatch(redirect())
    };
}

export default connect(null, mapDispatch)(CreateTournament);
