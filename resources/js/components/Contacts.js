import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Edit from './Edit';
import useForm from './useForm';
import useAxios from './useAxios';
import useInterval from './useInterval';
import PostsContext from '../posts_context';
import SuccessContext from '../success_context';

const Contacts = () => {

    const [count, setCount] = useState(0);

    const { setPosts, posts } = useContext(PostsContext);

    const { successInfo, setSuccessInfo } = useContext(SuccessContext);

    const [values, handleChange, handleClearForm] = useForm({
        search: ""
    });

    const { search } = values;

    const [results, setResults, deletePost] = useAxios(search);

    const handleSubmit = ev => {
        ev.preventDefault();
        handleClearForm();
        setResults([]);
    };

    useEffect(() => {
        axios.get('/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
    }, []);

    useInterval(() => {
        if (!results.length && search) {
            setCount(count => count - 1);
        } else if (posts.length && !search) {
            setCount(10);
        } else if (results.length) {
            setCount(10);
        }
    }, 1000);

    const resetSuccess = () => {
        setSuccessInfo({
            isSuccess: false,
            message: ""
        });
    };

    const deleteContact = contact => {
        deletePost(contact.id);
        setSuccessInfo({
            isSuccess: true,
            message: contact.fname + " " + contact.lname + " was deleted!"
        })
    };

    const postsList = !results.length && posts.map(contact => (
        <li className="contact-item" key={contact.id}>
            <div style={{ paddingTop: 5 }}>
                <div className="row border-bottom border-dark">
                    <div style={{ maxWidth: "100%", maxHeight: "100%" }} className="col-lg-4-md-6-sm-2 text-left ml-1 mb-1">
                        <img style={{ height: 90, width: 90 }} src={`storage/Images/${contact.src}`} className="img-fluid card-img" alt={contact.lname} />
                    </div>
                    <div className="col-lg-4-md-6-sm-2 text-left ml-1">
                        <div className="font-weight-bold">{contact.fname} {contact.lname}</div>
                        <p className="font-weight-bold text-muted">{contact.title}</p>
                        <p className="font-weight-bold h6">{contact.phone}</p>
                    </div>
                    <div className="text-right col">
                        <button data-toggle="modal" data-target={`#editModalCenter${contact.id}`} className="btn btn-dark btn-sm mb-2"><i style={{ color: "orange" }} className="fas fa-user-edit fa-fw" />Edit</button>
                        <br />
                        <button data-toggle="modal" data-target={`#exampleModalCenter${contact.id}`} className="btn btn-dark btn-sm ml-lg-1 ml-md-1 ml-sm-1 ml-xs-1 mb-2"><i className="fas fa-trash-alt fa-fw text-danger" />Del&nbsp;</button>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`editModalCenter${contact.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><i style={{ color: "orange" }} className="fas fa-user-edit" /> Edit {contact.fname} {contact.lname}</h5>
                            <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Edit contact={contact} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`exampleModalCenter${contact.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><i className="fas fa-exclamation-triangle text-warning" /> Confirm Delete</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span style={{ color: "red" }} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="font-weight-bold">
                                Are you sure you want to delete
                                                <br></br>
                                <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
                                    <img style={{ height: 40, width: 40 }} src={`storage/Images/${contact.src}`} className="img-fluid card-img mr-2" alt={contact.lname} />
                                    {contact.fname} {contact.lname}?
                                </div>
                            </div>
                            <div style={{ borderTop: "unset" }} className="modal-footer">
                                <button onClick={() => deleteContact(contact)} type="button" data-dismiss="modal" className="btn btn-dark btn-sm"><i className="fas fa-check fa-fw text-success" /> Yes</button>
                                <button type="button" className="btn btn-dark btn-sm" data-dismiss="modal"><i className="fas fa-times fa-fw text-danger" /> No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ));

    const resultsList = results.length && results.map(contact => (
        <li className="contact-item" key={contact.id}>
            <div style={{ paddingTop: 5 }}>
                <div className="row border-bottom border-dark">
                    <div style={{ maxWidth: "100%", maxHeight: "100%" }} className="col-lg-4-md-6-sm-2 text-left ml-1 mb-1">
                        <img style={{ height: 90, width: 90 }} src={`storage/Images/${contact.src}`} className="img-fluid card-img" alt={contact.lname} />
                    </div>
                    <div className="col-lg-4-md-6-sm-2 text-left ml-1">
                        <div className="font-weight-bold">{contact.fname} {contact.lname}</div>
                        <p className="font-weight-bold text-muted">{contact.title}</p>
                        <p className="font-weight-bold h6">{contact.phone}</p>
                    </div>
                    <div className="text-right col">
                        <button data-toggle="modal" data-target={`#editModalCenter${contact.id}`} className="btn btn-dark btn-sm mb-2"><i style={{ color: "orange" }} className="fas fa-user-edit fa-fw" />Edit</button>
                        <br />
                        <button data-toggle="modal" data-target={`#exampleModalCenter${contact.id}`} className="btn btn-dark btn-sm ml-lg-1 ml-md-1 ml-sm-1 ml-xs-1 mb-2"><i className="fas fa-trash-alt fa-fw text-danger" />Del&nbsp;</button>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`editModalCenter${contact.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><i style={{ color: "orange" }} className="fas fa-user-edit" /> Edit {contact.fname} {contact.lname}</h5>
                            <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Edit contact={contact} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`exampleModalCenter${contact.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><i className="fas fa-exclamation-triangle text-warning" /> Confirm Delete</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span style={{ color: "red" }} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="font-weight-bold">
                                Are you sure you want to delete
                                                <br></br>
                                <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
                                    <img style={{ height: 40, width: 40 }} src={`storage/Images/${contact.src}`} className="img-fluid card-img mr-2" alt={contact.lname} />
                                    {contact.fname} {contact.lname}?
                                </div>
                            </div>
                            <div style={{ borderTop: "unset" }} className="modal-footer">
                                <button onClick={() => deleteContact(contact)} type="button" data-dismiss="modal" className="btn btn-dark btn-sm"><i className="fas fa-check fa-fw text-success" /> Yes</button>
                                <button type="button" className="btn btn-dark btn-sm" data-dismiss="modal"><i className="fas fa-times fa-fw text-danger" /> No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="text-center container">
            <div className="text-center mt-3">
                <div className="h1">
                    {/* <span style={{ textShadow: "1px 2px 2px slateblue", letterSpacing: 5, fontSize: 45 }} className="text-light h2">Phone</span> */}
                    <img className="img-fluid" src="storage/Images/mesa-phone.png" alt="" loading="eager"></img>
                    {/* <span style={{ textShadow: "1px 2px 2px slateblue", letterSpacing: 5, fontSize: 45 }} className="text-light h2">Book</span> */}
                </div>
                <p className="lead">
                    Search by first/last name or job title...
                </p>
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit} className="input-group mb-3 my-lg-3">
                        <input id="search" name="search" value={search || ""} onChange={handleChange} type="text" className="form-inline form-control rounded-left" placeholder="Search..." aria-label="search" aria-describedby="button-addon4" autoComplete="off" />
                        <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-dark my-sm-0" type="submit"><i className="fas fa-search text-success" /> Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={successInfo.isSuccess ? { display: "block" } : { display: "none" }} id="success-alert" className="alert alert-success fade show" role="alert">
                <i className="fas fa-check text-success" /> {successInfo.message}
                <button onClick={resetSuccess} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="mb-5">
                <div className='text-center'>
                    <ul className='list-unstyled'>
                        {posts.length && !search ?
                            postsList :
                            results.length ?
                                resultsList :
                                <li className="contact-item text-dark mt-5">
                                    <h1 className="display-4 d-flex justify-content-center">
                                        {!results.length && !posts.length ? "Loading..." : posts.length && !results.length ? "No Results..." : ""}
                                        {/* <img className="img-fluid" src="storage/Images/mesa-phone.png" alt=""></img> */}
                                        <i className="fas fa-phone fa-pulse text-info" role="status" />
                                    </h1>
                                </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contacts;