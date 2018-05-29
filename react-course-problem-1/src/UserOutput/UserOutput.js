import React from "react";

const UserOutput = (props) => {
    return (
        <div>
            <p>Username is: {props.username}</p>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    )
}

export default UserOutput