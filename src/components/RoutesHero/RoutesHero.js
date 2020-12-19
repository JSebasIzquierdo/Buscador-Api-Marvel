import React, { Component } from 'react';
import CharacterDescription from "../CharacterDescription/CharacterDescription";
import HomeLayout from "../HomeLayout/HomeLayout";
import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";


class RoutesHero extends Component {

    render() {
        return (

            <Switch>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/hero/:id" component={CharacterDescription} />
            </Switch>

        );

    }
}


export default RoutesHero;