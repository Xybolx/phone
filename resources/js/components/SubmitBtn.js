import React from 'react';

const SubmitBtn = props => {

    return (
        <button className="btn btn-dark" onClick={props.onClick} type="submit" disabled={props.disabled}>
            {props.icon} {props.text}
        </button>
    );
};

export default SubmitBtn;