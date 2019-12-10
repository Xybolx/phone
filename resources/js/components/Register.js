import React from 'react';
import axios from 'axios';
import useForm from '../components/useForm';
import SubmitBtn from '../components/SubmitBtn';
import CancelBtn from '../components/CancelBtn';

const Register = () => {

    const [values, handleChange, handleClearForm] = useForm({
        email: "",
        password: ""
    });

    const { email, password } = values;

    const handleSubmit = ev => {
        ev.preventDefault();
        const user = {
            email,
            password
        }
        axios.post("/register", user)
            .then(res => console.log(res.data))
            .then(() => handleClearForm())
            .catch(err => console.log(err));
    };

    return (
        <div className="modal fade" id="registerModalCenter" tabIndex="-1" role="dialog" aria-labelledby="registerModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-light border-0">
                        <h5 className="modal-title" id="registerModalCenterTitle"><i style={{ color: "cyan" }} className="fas fa-address-card fa-fw" /> Register</h5>
                        <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className='text-center'>
                                <h4><span className='text-danger'>*</span> Required field</h4>
                            </div>
                            <div className="text-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="text-left text-danger">
                                            *<label className="text-dark" htmlFor="email">Email</label>
                                        </div>
                                        <input type="email" className="form-control email" name="email" value={email} onChange={handleChange} required autoComplete="email" />
                                    </div>
                                    <div className="form-group">
                                        <div className="text-left text-danger">
                                            *<label className="text-dark" htmlFor="password">Password</label>
                                        </div>
                                        <input type="password" className="form-control password" name="password" value={password} onChange={handleChange} required autoComplete="new-password" />
                                    </div>
                                    <div className="text-center">
                                        <SubmitBtn
                                            disabled={!email || !password}
                                            icon={<i style={{ color: "cyan" }} className="fas fa-address-card fa-fw" />}
                                            text="Register"
                                        />
                                        <CancelBtn
                                            className="btn btn-dark ml-2"
                                            icon={<i className="fas fa-times text-danger" />}
                                            text="Close"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
