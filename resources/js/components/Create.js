import React, { useState, useContext, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import PostsContext from '../posts_context';
import SuccessContext from '../success_context';
import axios from 'axios';
import SubmitBtn from '../components/SubmitBtn';
import CancelBtn from './CancelBtn';
import useForm from './useForm';
import useValidate from './useValidate';

const Create = () => {

    const [redirect, setRedirect] = useState(false);

    const [src, setSrc] = useState({});

    const [filename, setFilename] = useState("");

    const { setPosts } = useContext(PostsContext);

    const { setSuccessInfo } = useContext(SuccessContext);

    const fileInput = useRef();

    const [values, handleChange, handleClearForm] = useForm({
        fname: "",
        lname: "",
        title: "",
        phone: ""
    });

    const [errors, resetValidate] = useValidate(values);

    const { isValidFirstName, isValidLastName, isValidPhone, isValidTitle } = errors;

    const { fname, lname, title, phone } = values;

    const handleSubmit = ev => {
        ev.preventDefault();
        const contact = new FormData();
        contact.append('fname', fname);
        contact.append('lname', lname);
        contact.append('title', title);
        contact.append('phone', phone);
        contact.append('src', src);
        console.log(contact);
        axios.post('/api/posts', contact)
            .then(res => {
                axios.get('/api/posts')
                    .then(res => setPosts(res.data))
                    .catch(err => console.log(err))
            })
            .then(() => setSuccessInfo({
                isSuccess: true,
                message: `${fname} ${lname} was created!`
            }))
            .then(() => handleReset())
            .catch(err => console.log(err))
    };

    const fileOnChange = ev => {
        const { files } = ev.target;
        setSrc(files[0]);
        setFilename(files[0].name);
    };

    const handleReset = () => {
        resetValidate();
        handleClearForm();
        $('#navbarsExampleDefault').collapse('hide');
        setRedirect(true);
    };

    if (window.location.pathname != "/posts" && redirect) {
        return <Redirect to="/posts" />
    }

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-white border-0 bg-dark">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><i className="fas fa-user-plus text-warning" /> Create Contact</h5>
                            <button onClick={() => $("#navbarsExampleDefault").collapse("hide")} type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className='text-center'>
                <h4><span className='text-danger'>*</span> Required field</h4>
            </div>
            <div className="mb-5">
                <form onSubmit={handleSubmit} encType="multi-part/form-data">
                    <div className="form-group text-left text-danger">
                        *<label className='text-dark' htmlFor='fname'>First Name</label>
                        <input
                            id='fname'
                            className='form-control text-dark'
                            type='text'
                            name='fname'
                            value={fname}
                            onChange={handleChange}
                            placeholder='Enter First Name'
                            autoComplete='off'
                        />
                        <div className="input-error">
                            <small
                                className={fname && isValidFirstName ?
                                    "text-success" :
                                    fname && !isValidFirstName ?
                                        "text-danger" :
                                        "text-dark"}>
                                {fname && isValidFirstName ?
                                    "Valid First Name!" :
                                    fname && !isValidFirstName ?
                                        "Invalid First Name!" : ""}
                            </small>
                        </div>
                    </div>
                    <div className="form-group text-left text-danger">
                        *<label className='text-dark' htmlFor='lname'>Last Name</label>
                        <input
                            id='lname'
                            className='form-control text-dark'
                            type='text'
                            name='lname'
                            value={lname}
                            onChange={handleChange}
                            placeholder='Enter Last Name'
                            autoComplete='off'
                        />
                        <div className="input-error">
                            <small
                                className={lname && isValidLastName ?
                                    "text-success" :
                                    lname && !isValidLastName ?
                                        "text-danger" :
                                        "text-dark"}>
                                {lname && isValidLastName ?
                                    "Valid Last Name!" :
                                    lname && !isValidLastName ?
                                        "Invalid Last Name!" : ""}
                            </small>
                        </div>
                    </div>
                    <div className="form-group text-left text-danger">
                        *<label className='text-dark' htmlFor='title'>Title</label>
                        <input
                            id='title'
                            className='form-control text-dark'
                            type='text'
                            name='title'
                            value={title}
                            onChange={handleChange}
                            placeholder='Enter Job Title'
                            autoComplete='off'
                        />
                        <div className="input-error">
                            <small
                                className={title && isValidTitle ?
                                    "text-success" :
                                    title && !isValidTitle ?
                                        "text-danger" : "text-dark"}>
                                {title && isValidTitle ?
                                    "Valid Title!" :
                                    title && !isValidTitle ?
                                        "Title must be minimum 3 characters!" : ""}
                            </small>
                        </div>
                    </div>
                    <div className="form-group text-left text-danger">
                        *<label className='text-dark' htmlFor='phone'>Phone #</label>
                        <input
                            id='phone'
                            className='form-control text-dark'
                            type='text'
                            name='phone'
                            value={phone}
                            onChange={handleChange}
                            placeholder='Enter Phone ###-###-####'
                            autoComplete='off'
                        />
                        <div className="input-error">
                            <small
                                className={phone && isValidPhone ?
                                    "text-success" :
                                    phone && !isValidPhone ?
                                        "text-danger" :
                                        "text-dark"}>
                                {phone && isValidPhone ?
                                    "Valid Phone #!" :
                                    phone && !isValidPhone ?
                                        "Invalid Phone # Format!" : ""}
                            </small>
                        </div>
                    </div>
                    <div className="form-group text-left text-danger">
                        *<label className='text-dark' htmlFor='src'>Upload An Image</label>
                        <input
                            id='src'
                            className='form-control-file text-dark'
                            type='file'
                            name='src'
                            onChange={fileOnChange}
                        />
                    </div>
                    <div className="text-center">
                                    <SubmitBtn
                                        disabled={
                                            !isValidFirstName ||
                                            !isValidLastName ||
                                            !isValidTitle ||
                                            !isValidPhone
                                        }
                                        icon={<i className="far fa-save text-success" />}
                                        text="Save"
                                    />
                                    <CancelBtn
                                        className="btn btn-dark ml-2"
                                        onClick={handleReset}
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
    );
};

export default Create;
