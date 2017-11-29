import React from 'react';
import PropTypes from 'prop-types';
// import './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = { inputText: '' };
  }

  componentDidMount() {
    this.inputField.focus();
  }

  renderShearchField() {
    return (
      <input
        type="text"
        value={this.state.inputText}
        className="Searchbar__input"
        ref={c => this.inputField = c }
      />
    );
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__finder">
          <h2 className="SearchBar__text">Find your movie</h2>
          <div className="Searchbar__inputField">
              { this.renderShearchField() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
