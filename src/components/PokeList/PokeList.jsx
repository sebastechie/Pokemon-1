import React, { Component } from "react";
import styles from "./PokeList.module.scss";

import SearchBar from "../../components/PokeList/SearchBar";
import PokeCard from "../PokeCard";
import firebase, { firestore } from "../../firebase";

export default class PokeList extends Component {

    state = {
        pokemonCharacters: [],
        searchText: "",
        filteredPokemons: []
    }

    componentDidMount() {
        firestore
            .collection("pokemon-characters")
            .get()
            .then((query) => {
                const pokemon = query.docs.map(doc => doc.data());
                this.setState({ pokemonCharacters: pokemon,
                    filteredPokemons: pokemon
                 })
            })
    }

    setSearchText = (event) => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filterPokemons);
        console.log(this.state.searchText);
    }

    filterPokemons = () => {
        let filteredPokemons = this.state.pokemonCharacters.filter(user => {
            return user.name.includes(this.state.searchText)
        })
        this.setState({ filteredPokemons });
    }

    render() {
        return (
            <div className={styles.ListContain}>
                <section className={styles.bar}>
                    <SearchBar searchText={this.props.searchText} setSearchText={this.setSearchText}/>
                </section>
                <section className={styles.list}>
                    {this.state.filteredPokemons.map((poke, index) => (<PokeCard pokeData={poke} key={index} />
                    ))}
                </section>
            </div>
        )
    }
}

