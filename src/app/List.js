import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createFilter } from 'react-search-input';
import { Suggestion } from './Suggestion';
import './App.scss';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    const url = 'https://modern-maraca.glitch.me/random.json';
    axios.get(url).then((response) => {
      const suggs = response.data.suggestions;
      const currSuggestions = [];
      suggs.forEach((s) => {
        currSuggestions.push(<Suggestion title={s.title} content={s.content} />);
        this.setState({ list: currSuggestions });
      });
    });
  }
  render() {
    const keysToFilters = '';
    const listItems = this.state.list.map(element =>
      [element.props.title, element.props.content])
      .filter(createFilter(this.props.searchTerm, keysToFilters));

    return (
      <div className="list-elements">
        {listItems.length > 0 ?
          <div>
            {listItems.map(element => (
              <div key={element[0]}>
                <button
                  type="button"
                  className="js-toolbar-item dropdown-item dropdown-header2"
                  data-prefix={element[1]}
                  onClick={this.props.clickAction}
                >
                  <Suggestion title={element[0]} content={element[1]} />
                </button>
              </div>
            ))}
          </div>
          : <div className="no-results">Sorry, no results found.</div>}
      </div>
    );
  }
}

List.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired
};
