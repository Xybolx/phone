import React, { useContext } from 'react';
import SuccessContext from '../success_context';

const SuccessAlert = () => {

    const { successInfo, setSuccessInfo } = useContext(SuccessContext);

    const resetSuccess = () => {
        setSuccessInfo({
            isSuccess: false,
            message: "",
            image: ""
        });
    };

    return (
        <div style={successInfo.isSuccess ? { display: "block" } : { display: "none" }} id="success-alert" className="alert alert-success fade show" role="alert">
            <i className="fas fa-check text-success" /> {successInfo.image} {successInfo.message}
            <button onClick={resetSuccess} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};

export default SuccessAlert;