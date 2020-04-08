import React, { Component } from 'react';
import SearchBar from '../../components/PokeList/SearchBar';
import PokeList from '../../components/PokeList'

import styles from './App.module.scss';

export default class App extends Component {
  render() {
    return (
      <main className={styles.main} >
        <PokeList />
      </main>
    );
  }
}

