import React from "react";

export default (props) => {
    return (
        <div>
            <img src={props.imgUrl} alt="mma" />
            <h2>{props.name}</h2>
            <div>{props.place}</div>
            <div>price: {props.price}$</div>
            <div>date: {props.date}</div>
            <div>{props.info}</div>
            <button>Approvel</button>
            <button>Cancel</button>
        </div>
    )
}