import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import EditContext from '../edit_context/EditContext';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div onClick={() => $("#navbarsExampleDefault").collapse("hide")}>
                <NavLink className="lead text-white mr-3" to="/">
                    {/* <span className="fa-stack fa-1x">
                        <div style={{ writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: -2, marginRight: 15, fontSize: 8, marginTop: -2 }} className="border border-warning">Phone</div>
                        <i className="fas fa-mobile-alt fa-stack-2x fa-inverse ml-1" data-fa-transform="down-2 right-1"></i>
                        <i style={{ color: "tomato" }} className="fab fa-laravel fa-stack-1x" data-fa-transform="shrink-6 up-3 right-6" />
                        <i style={{ color: "lightseagreen" }} className="fab fa-react fa-stack-1x" data-fa-transform="shrink-6 down-6 right-6" />
                    <div style={{ writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: 0, fontSize: 8, marginLeft: 42, marginTop: -46 }} className="border border-warning">Book</div>
                    </span> */}
                    <img className="img-fluid" src="storage/Images/mesa-phone.png" alt=""></img>
                </NavLink>
            </div>
            <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)} type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars fa-2x"></span> 
            </button>
            {/* <button style={!isOpen ? { display: "none" } : { display: "inline" }} className="navbar-toggler" onClick={() => setIsOpen(!isOpen)} type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-book-open fa-2x"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto text-justify-space-between">
                    <li className="nav-item border-0" data-toggle="collapse" data-target="#navbarsExampleDefault">
                        <NavLink className="nav-link" exact to="/"><i style={{ color: "tomato" }} className="fas fa-tachometer-alt" /> Dashboard</NavLink>
                    </li>
                    <li className="nav-item border-0" data-toggle="collapse" data-target="#navbarsExampleDefault">
                        <NavLink className="nav-link" to="/posts"><i className="fas fa-users fa-fw text-primary" /> Contacts</NavLink>
                    </li>
                    <li className="nav-item border-0" data-toggle="collapse" data-target="#navbarsExampleDefault">
                        <a className="nav-link" data-toggle="modal" data-target="#registerModalCenter"><i style={{ color: "cyan" }} className="fas fa-address-card fa-fw" /> Register</a>
                        {/* <NavLink className="nav-link" to="/register"><i style={{ color: "cyan" }} className="fas fa-address-card fa-fw" /> Register</NavLink> */}
                    </li>
                    <li className="nav-item border-0" data-toggle="collapse" data-target="#navbarsExampleDefault">
                        {/* <NavLink className="nav-link" to="/login"><i style={{ color: "lawngreen" }} className="fas fa-sign-in-alt fa-fw" /> Login</NavLink> */}
                        <a className="nav-link" data-toggle="modal" data-target="#logInModalCenter"><i style={{ color: "lawngreen" }} className="fas fa-sign-in-alt fa-fw" /> Login</a>
                    </li>
                    <li className="nav-item border-0">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-user-plus fa-fw text-warning" /> Create</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;