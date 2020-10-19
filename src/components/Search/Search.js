import React, { Component } from 'react';

import styles from '../Search/Search.module.css';

export default class Search extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          name="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Enter name"
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
    );
  }
}
