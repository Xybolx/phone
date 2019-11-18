import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import EditContext from '../edit_context/EditContext';

const Navbar = () => {

    // const { editUser } = useContext(EditContext);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div onClick={() => $("#navbarsExampleDefault").collapse("hide")}>
                <NavLink className="navbar-brand" to="/">
                    <span className="fa-stack fa-1x">
                        <i className="fas fa-mobile-alt fa-stack-2x fa-inverse" data-fa-transform="down-2"></i>
                        <i className="fab fa-laravel fa-stack-1x text-danger" data-fa-transform="shrink-6 up-3" />
                        <i className="fab fa-react fa-stack-1x text-info" data-fa-transform="shrink-6 down-6" />
                    </span>
                </NavLink>
            </div>
            {/* <span className="lead text-white">Phonebook</span> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-bars fa-2x"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav list-group list-group-flush mr-auto text-justify-space-between">
                    <li className="nav-item list-group-item bg-dark border-0" data-toggle="collapse" data-target="#navbarsExampleDefault">
                        <NavLink className="nav-link" exact to="/"><i style={{ color: "tomato" }} className="fas fa-tachometer-alt" /> Dashboard</NavLink>
                    </li>
                    <li className="nav-item list-group-item bg-dark border-0" data-toggle="collapse" data-target="#navbarsExampleDefault">
                        <NavLink className="nav-link" to="/posts"><i className="fas fa-users fa-fw text-primary" /> Contacts</NavLink>
                    </li>
                    <li className="nav-item list-group-item bg-dark border-0">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-user-plus fa-fw text-warning" /> Create</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;