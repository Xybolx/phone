import React from 'react';
import { Link } from 'react-router-dom';

function Example() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="text-center">
                <h1 className="display-4"><i style={{ color: "tomato" }} className="fas fa-tachometer-alt" /> Dashboard</h1>
                <div style={{ height: 400 }} className="fa-stack fa-8x bg-dark">
                    <h3 style={{ writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: 5, fontSize: 45, marginLeft: 8, marginTop: 25 }} className="text-white border border-warning">Phone</h3>
                    <i className="fas fa-mobile-alt fa-stack-2x fa-inverse" />
                    <i className="fab fa-laravel fa-stack-1x text-danger" data-fa-transform="shrink-6 up-8" />
                    <i style={{ color: "seagreen" }} className="fab fa-react fa-stack-1x" data-fa-transform="shrink-6 down-2" />
                    <h3 style={{ writingMode: "vertical-lr", textOrientation: "upright", letterSpacing: 21, fontSize: 45, marginLeft: 225, marginTop: -340 }} className="text-white border border-warning">Book</h3>
                    <div style={{ marginTop: -125 }} className="text-center">
                        <Link className="btn btn-outline-light rounded-pill mr-1" to="/posts"><i className="fas fa-users text-primary" /></Link>
                        <button onClick={() => $("#navbarsExampleDefault").collapse("hide")} className="btn btn-outline-light rounded-pill ml-1" data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-user-plus text-warning" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;