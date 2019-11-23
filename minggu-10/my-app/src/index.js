import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Helloworld from './page/Helloworld';
import Dashboard from './page/Dashboard';
import login from './page/Login';
import { Route,BrowserRouter as Router , Link, Switch }from 'react-router-dom';
import './index.css'

const rounting = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Helloworld</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Helloworld} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={login} />

            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    rounting,
     document.getElementById('root')
    );