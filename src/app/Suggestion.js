import React from 'react';
import PropTypes from 'prop-types';

export const Suggestion = props => (
  <div className="select-menu-item-text js-select-button-text" key={props.title}>
    <span className="select-menu-item-heading css-truncate css-truncate-target">{props.title}</span>
    <span className="description css-truncate css-truncate-target js-saved-reply-body">{props.content}</span>
  </div>
);

Suggestion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Suggestion;
