import React from 'react';

const CancelBtn = props => {

    return (
        <button
            className={props.className}
            onClick={props.onClick}
            data-toggle={props.dataToggle} 
            data-target={props.dataTarget}
            data-dismiss="modal">
            {props.icon} {props.text}
        </button>
    );
};

export default CancelBtn;