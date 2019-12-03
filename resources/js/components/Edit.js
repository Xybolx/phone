import React, { useContext } from 'react';
import axios from 'axios';
import SubmitBtn from './SubmitBtn';
import CancelBtn from './CancelBtn';
import useForm from './useForm';
import useValidate from './useValidate';
import PostsContext from '../posts_context';
import SuccessContext from '../success_context';

const Edit = ({ contact }) => {

    const { setPosts } = useContext(PostsContext);

    const { setSuccessInfo } = useContext(SuccessContext);

    const [values, handleChange, handleClearForm] = useForm({
        fname: contact.fname,
        lname: contact.lname,
        title: contact.title,
        phone: contact.phone,
        src: contact.src,
    });

    const [errors] = useValidate(values);

    const { isValidFirstName, isValidLastName, isValidPhone, isValidTitle } = errors;

    const { fname, lname, title, phone, src } = values;

    const handleSubmit = ev => {
        ev.preventDefault();
        const person = {
            fname,
            lname,
            title,
            phone,
            src
        }
        axios.put(`/api/posts/${contact.id}`, person)
            .then(res => setPosts(res.data))
            .then(() => setSuccessInfo({ 
                isSuccess: true, 
                message: `${fname} ${lname} was updated!`,
                image: <img style={{ height: 40, width: 45 }} src={`storage/Images/${contact.src}`} className="img-fluid card-img" alt={contact.lname} /> 
            }))
            .then($(`#editModalCenter${contact.id}`).modal('hide'))
            .catch(err => console.log(err))
    };

    return (
        <div>
            <div className='text-center'>
                <h4><span className='text-danger'>*</span> Required field</h4>
            </div>
            <div className="mb-5">
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
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
                        <label className='text-dark' htmlFor='src' hidden>Upload An Image</label>
                        <input
                            id='src'
                            className='form-control text-dark'
                            type='text'
                            name='src'
                            value={src}
                            onChange={handleChange}
                            hidden
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
                            icon={<i className="far fa-save fa-fw text-success" />}
                            text="Save"
                        />
                        <CancelBtn
                            onClick={handleClearForm}
                            className="btn btn-dark ml-2"
                            icon={<i className="fas fa-times text-danger" />}
                            text="Close"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;