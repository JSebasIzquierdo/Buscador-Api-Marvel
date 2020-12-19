import React, { Component } from 'react';
import "./Header.css";
import MarvelLogo from "../../assets/marvel.jpg";


class Header extends Component {

    render() {
        return (

            <header>
                <div className="o-tabs">
                    <img src = {MarvelLogo}></img>
                </div>
            </header>



        );
    }


}

export default Header;