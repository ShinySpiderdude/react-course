import React from "react";

const UserInput = (props) => {
    return (
        <div>
            <input onChange={props.onChange} value={props.username}/>
        </div>
    )
};

export default UserInput