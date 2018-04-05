import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Suggestion } from './Suggestion';

export default class SaveSuggestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSuggestion: null
    };
  }
  componentWillMount() {
    const textAreaId = '#' + this.props.textAreaId.toString();
    const text = document.querySelector(textAreaId).value;
    const newSuggestion = <Suggestion title={text.slice(0, text.indexOf('\n'))} content={text.slice(text.indexOf('\n') + 1)} />;
    this.setState({ newSuggestion });
  }
  handleClick = () => {
    // we'll need to push the new suggestion to our suggestion list coming from the backend
    console.log(this.state.newSuggestion.props.title, this.state.newSuggestion.props.content);
    const url = 'https://modern-maraca.glitch.me/random.json';
    axios.post(url, this.state.newSuggestion).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
  render() {
    return (
      <button
        type="button"
        className="save-btn dropdown"
        onClick={this.props.onClick}
      >Save comment as a new reply
      </button>
    );
  }
}

SaveSuggestionButton.propTypes = {
  textAreaId: PropTypes.string.isRequired
};
