import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Example from './components/Example';
import Contacts from './components/Contacts';
import Create from './components/Create';
import Register from './components/Register';
import LogIn from './components/LogIn';

const App = () => {

    return (
        <Router>
            <Navbar />
            <Register />
            <LogIn />
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><i className="fas fa-user-plus text-warning" /> Create Contact</h5>
                            <button onClick={() => $("#navbarsExampleDefault").collapse("hide")} type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Create />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Example} />
                    <Route exact path="/posts" component={Contacts} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;