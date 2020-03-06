import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {
    render() {
        return (
            <section>
                <input
                    className={styles.SearchBar}
                    placeholder={"Search card"}
                    value={this.props.searchText}
                    onChange={this.props.setSearchText}
                />
            </section>
        )
    }
}