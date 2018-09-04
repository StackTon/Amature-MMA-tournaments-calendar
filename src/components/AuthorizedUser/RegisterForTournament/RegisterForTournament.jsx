import React, { Component } from 'react';
import Input from '../../common/Input';

class RegisterForTournament extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 0,
            kilograms: "",
            gender: ""
        }
    }
    render() {
        return (
            <div>
                <h1>Register For Tournament</h1>
                <form>
                    <Input
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler}
                        label="Age"
                        type="number"
                    />
                    <Input
                        name="kilograms"
                        value={this.state.kilograms}
                        onChange={this.onChangeHandler}
                        label="Kilograms"
                    />
                    <Input
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChangeHandler}
                        label="Gender"
                    />
                    <button>Create</button>
                </form>
            </div>
        );
    }
}

export default RegisterForTournament;
