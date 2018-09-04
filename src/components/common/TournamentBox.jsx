import React from 'react';

export default (props) => {
    const { imgUrl, price, name, info, place, date, id, onApprovalClicked, onDetailsClicked, onEditClicked, onDeleteClicked } = props;

    const tournamentForApproval = (
        <div>
            <div> price: {price}$</div>
            <div>date: {date}</div>
            <div>{info}</div>
            <button onClick={() => onApprovalClicked(id, imgUrl, price, name, info, place, date)}>Approval</button>
            <button onClick={() => onDeleteClicked(id)}>Delete</button>
        </div>
    )

    const tournament = (
        <div>
            <button onClick={() => onDetailsClicked(id)}>Details</button>
            <button onClick={() => onEditClicked(id)}>Edit</button>
            <button onClick={() => onDeleteClicked(id)}>Delete</button>
        </div>
    )



    return (
        <div>
            <img src={imgUrl} alt="mma" />
            <h2>{name}</h2>
            <div>{place}</div>

            {onApprovalClicked ? tournamentForApproval : tournament}
        </div>
    )
}