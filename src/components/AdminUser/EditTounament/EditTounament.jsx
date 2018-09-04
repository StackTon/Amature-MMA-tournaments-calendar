import React, { Component } from 'react';
import Input from '../../common/Input';

class EditTounament extends Component {
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
    }
    render() {
        return (
            <div>
                <h1>Edit Tournament</h1>
                <form>
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
                    <button>Edit</button>
                </form>
            </div>
        );
    }
}

export default EditTounament;
