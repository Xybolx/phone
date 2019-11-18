import React from 'react';
import axios from 'axios';
import useForm from '../components/useForm';

const LogIn = () => {

    const [values, handleChange, handleClearForm] = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = ev => {
        ev.preventDefault();
        axios.post("/api/users")
            .then(res => console.log(res.data))
            .then(() => handleClearForm())
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label for="email" className="col-md-4 col-form-label text-md-right">Email</label>
                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" value={values.email} onChange={handleChange} required autocomplete="email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" classNameName="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control" name="password" value={values.password} onChange={handleChange} required autocomplete="new-password" />
                                    </div>
                                </div>
                                <div className="form-group row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;