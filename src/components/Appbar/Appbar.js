import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from '../Appbar/Appbar.module.css';

const Appbar = () => (
  <header className={styles.Appbar}>
    <Navigation />
  </header>
);

export default Appbar;
