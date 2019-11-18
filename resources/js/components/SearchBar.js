import React, { useEffect } from 'react';
import useForm from './useForm';
import useSearch from './useSearch';

const SearchBar = () => {

    const [values, handleChange, handleClearForm] = useForm({
        search: ""
    });

    const [getPosts, getResults] = useSearch(values);

    const { search } = values;

    const handleSubmit = ev => {
        ev.preventDefault();
        handleClearForm();
    };

    useEffect(() => {
        if (values.search) {
            getResults();
        } else if (!values.search) {
            getPosts();
        }
    }, [values]);

    return (
        <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit} className="input-group mb-3 my-lg-3">
                <input id="search" name="search" value={search || ""} onChange={handleChange} type="search" className="form-inline form-control rounded-left" placeholder="Search..." aria-label="search" aria-describedby="button-addon4" autoComplete="off" />
                <div className="input-group-append" id="button-addon4">
                    <button className="btn btn-dark my-sm-0" type="submit"><i className="fas fa-search text-success" /> Reset</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;