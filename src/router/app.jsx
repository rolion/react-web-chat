import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../containers/Login";
import ChatPage from "../containers/ChatPage";
import Home from "../containers/Home";

const App = (props) => {
    return <>
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login></Login>
                </Route>
                <Route path='/chat'>
                    <ChatPage></ChatPage>
                </Route>
                <Route path='/'>
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </>
}

export default App;
