import React from "react";

export default (props) => {

    return (
        <div>
            <img src={props.imgUrl} alt="mma" />
            <h2>{props.name}</h2>
            <div>{props.place}</div>
            <button>Details</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )

}