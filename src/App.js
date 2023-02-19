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
      <div>App</div>
    )
  }
}
