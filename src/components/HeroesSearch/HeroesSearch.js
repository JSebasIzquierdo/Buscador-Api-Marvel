import React from "react";
import "./HeroesSearch.css";
import { request } from "../ApiFunctions/ApiFunctions";
import CardHeroe from "../CardHeroe/CardHeroe";


class HeroesSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.search,
            data: []
        }
    }

    componentDidUpdate(prevSearch) {
        if (prevSearch.search !== this.state.search) {
            request(this, this.state.search);
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { search: props.search };
    }

    drawCards = () => {
        if (this.state.data.length > 0) {
            return this.state.data.map((hero) => {
                return (

                        <CardHeroe src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} name={hero.name} id={hero.id} key={hero.id} link={"hero/" + hero.id}/>
                )
            })
        }
    }

   

    render() {
        return (
            <div className="o-heroes-container">
                {
                    this.drawCards()
                }
            </div>
        )
    };
}

export default HeroesSearch;