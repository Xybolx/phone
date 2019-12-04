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
            <Create />
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
