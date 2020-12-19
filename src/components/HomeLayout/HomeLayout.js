import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import HeroesSearch from "../HeroesSearch/HeroesSearch";
import Header from "../Header/Header";

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" }
    }

    onSearchReceive = (childProps) => {
        this.setState({ search: childProps });
    }

    render() {
        return (
            <div className="o-homelayout-container">
                <Header />
                <div className="o-searchBar-value">
                    <SearchBar functionCallFromParent={this.onSearchReceive} />
                </div>
                <div className="o-heroes-value">
                    <HeroesSearch search={this.state.search} />
                </div>
            </div>

            
        )
    };
}

export default HomeLayout;