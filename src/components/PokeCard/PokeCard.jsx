import React, { Component } from "react";
import styles from "./PokeCard.module.scss";

import Skills from "./Skills";

export default class PokeCard extends Component {
    render() {
        return (
            <section className={styles.PokeCard}>
                <img className={styles.pokeImg} src={this.props.pokeData.picture} alt={this.props.pokeData.name} />
                <div className={styles.innerCard}>
                    <div className={styles.cardBorder}>
                        <div className={styles.name}><span>Name:</span> {this.props.pokeData.name}</div>
                        <div className={styles.ability}><span>Ability:</span> {this.props.pokeData.ability}</div>
                        <div className={styles.location}><span>Location:</span> {this.props.pokeData.location}</div>
                    </div>

                    <div className={styles.skillsContainer}>
                        <p>STATS:</p>
                        <Skills skills={this.props.pokeData.skills} />
                    </div>
                </div>
            </section>
        )
    }
}