import React from "react";

export default (props) => {
    const {imgUrl, name, place, id, onDetailsClicked, onEditClicked, onDeleteClicked} = props;
    return (
        <div>
            <img src={imgUrl} alt="mma" />
            <h2>{name}</h2>
            <div>{place}</div>
            <button onClick={() => onDetailsClicked(id)}>Details</button>
            <button onClick={() => onEditClicked(id)}>Edit</button>
            <button onClick={() => onDeleteClicked(id)}>Delete</button>
        </div>
    )

}