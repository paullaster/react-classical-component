import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'searTerm': 'React',
    };
  }
  render() {
    const {searTerm} = this.state;
    return (
      <form>
        <label for=""></label>
        <input type="text" name="searchTerm" value="" />
      </form>
    )
  }
}
