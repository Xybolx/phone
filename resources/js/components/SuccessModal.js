import React from 'react';
import CancelBtn from './CancelBtn';

const SuccessModal = props => {

    return (
        <div className="modal fade" id="successModalCenter" tabIndex="-1" role="dialog" aria-labelledby="successModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-light">
                        <h5 className="modal-title" id="successModalCenterTitle"><i className="fas fa-check text-success" /> Contact Created!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="text-danger" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-center font-weight-bold">
                        <div className="alert alert-success">
                            Contact successfully created!
                        </div>
                    </div>
                    <div className="modal-footer border-0">
                        <CancelBtn
                            className="btn btn-dark"
                            icon={<i className="fas fa-check text-success" />}
                            text="Ok"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;