import React from "react";

export default (props) => {
    const { imgUrl, price, name, info, place, date, id, onApprovalClicked, onDeleteClicked } = props
    return (
        <div>
            <img src={imgUrl} alt="mma" />
            <h2>{name}</h2>
            <div>{place}</div>
            <div>price: {price}$</div>
            <div>date: {date}</div>
            <div>{info}</div>
            <button onClick={() => onApprovalClicked(id, imgUrl, price, name, info, place, date)}>Approval</button>
            <button onClick={() => onDeleteClicked(id)}>Delete</button>
        </div>
    )
}