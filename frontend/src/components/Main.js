import React, { Component } from "react";
import About from "./About";
import Login from "./Login";
import Users from "./Users";
//import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route path="/app/about" component={About} />
                        <Route
                            path="/app/users" component={Users}
                        />
                        <Route
                            path="/app/login" component={Login}
                        />
                        <Route path="/">
                            <p>
                                This is the main page</p>
                            <p><a href="/app/about">about</a></p>
                            <p><a href="/app/users">users</a></p>
                            <p><a href="/app/login">login</a></p>
                        </Route>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default Main;