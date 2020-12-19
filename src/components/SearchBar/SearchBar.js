import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
    }

    inputChange = (event) =>{
        this.setState({searchText: event.target.value});
    }

    onSubmit = (event) =>{
        if(event.key === "Enter"){
            this.props.functionCallFromParent(this.state.searchText);
        }
    }

    render() {
        return (
            <div className="o-searchbar-container">
                <input onChange={this.inputChange} onKeyPress={this.onSubmit} required placeholder={"Busca un super héroe y presiona ENTER"} />
            </div>
        )
    };
}

export default SearchBar;