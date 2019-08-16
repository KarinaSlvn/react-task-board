import React from 'react';
import './assets/styles/main.styl'

import {Route, Redirect, Switch} from 'react-router-dom';
import LogIn from './pages/LogIn'
import Board from './components/Board'
import Registration from './pages/Registration'

function App() {
    return (
        <div className="App">
            <Redirect to='/login'/>
            <Switch>
                <Route path="/login" component={LogIn}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/task-board" component={Board}/>
            </Switch>
        </div>
    );
}

export default App;
