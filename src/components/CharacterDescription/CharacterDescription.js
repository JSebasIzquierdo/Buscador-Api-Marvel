import React from "react";
import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";
import { call } from "../ApiFunctions/ApiFunctions";
import CardHeroe from "../CardHeroe/CardHeroe";
import Header from "../Header/Header"
import "./CharacterDescription.css";
import SearchBar from "../SearchBar/SearchBar";


class CharacterDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.pathname.replace("/hero/", ""),
            data: []
        }
    }

    componentDidMount() {
        call(this, this.state.id);
    }

    render() {
        console.log(this.state.data);

        return (
            <div className="container">
                <Header />
                {
                    this.state.data.map((hero) => {
                        return (
                                <CardHeroe src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} name={hero.title} id={hero.id} key={hero.id} link=""/>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(CharacterDescription);