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
      <>
        <form>
          <label for="search_term">Search</label>
          <input 
          type="text" 
          id="search_term" 
          name="searchTerm"
          onChange={ (e) => this.setState({searTerm: e.target.value})} 
          />
        </form>
      </>
    )
  }
}
