import React, { Component } from "react";
import styles from "./PokeCard.module.scss";

import Skills from "./Skills";

export default class PokeCard extends Component {
    render() {
        return (
            <section className={styles.PokeCard}>
                <img src={this.props.pokeData.picture} alt="pikachu"/>
                <div className={styles.cardBorder}>
                    <div>{this.props.pokeData.name}</div>
                    <div>{this.props.pokeData.ability}</div>
                    <div>{this.props.pokeData.location}</div>

                </div>
                <Skills skills={this.props.pokeData.skills} />
            </section>
        )
    }
}