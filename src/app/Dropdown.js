import React, { Component } from 'react';
import SearchInput from 'react-search-input';
import PropTypes from 'prop-types';
import List from './List';
import './App.scss';
import SaveSuggestionButton from './SaveSuggestionButton';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div className="dropdown-list">
        <div className="select-menu-header upper">
          <svg
            aria-label="Close"
            className="octicon octicon-x js-menu-close"
            height="16"
            role="img"
            version="1.1"
            viewBox="0 0 12 16"
            width="12"
            onClick={this.props.clickAction}
          >
            <path
              fillRule="evenodd"
              d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"
            />
          </svg>
          <SaveSuggestionButton textAreaId={this.props.textAreaId} onClick={this.props.clickAction} />
        </div>
        <div className="select-menu-header">
          <div className="select-menu-title">Select a reply</div>
        </div>
        <div className="js-select-menu-deferred-content">
          <SearchInput
            className="select-menu-filters select-menu-text-filter"
            placeholder="Filter replies..."
            onChange={this.searchUpdated}
            onClick="null"
            autoFocus="true"
          />
          <List
            clickAction={this.props.clickAction}
            searchTerm={this.state.searchTerm}
          />
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  clickAction: PropTypes.func.isRequired,
  textAreaId: PropTypes.string.isRequired
};
