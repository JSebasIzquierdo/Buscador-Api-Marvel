import React from "react";
import "./CardHeroe.css";
import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";


class CardHeroe extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: this.props.name,
            src: this.props.src,
            id: this.props.id,
            link: this.props.link
        }
    }

    render(){

        return (
            <Link to = {"/" + this.state.link} >
                <div className="container">
                    <div className="card">
                        <img className="box-img" src={this.state.src} alt=""></img>
                        <span className="title">
                            <h3>{this.state.name}</h3>
                        </span>
                    </div>
                </div>
                </Link>
           
        )
    }; 
}

export default CardHeroe;