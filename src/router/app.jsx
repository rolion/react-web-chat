import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../containers/Login";
import Chat from "../containers/Chat";
import Home from "../containers/Home";

const App = (props) => {
    return <>
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login></Login>
                </Route>
                <Route path='/chat'>
                    <Chat></Chat>
                </Route>
                <Route path='/'>
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </>
}

export default App;
