import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../app/App.scss';
import { Suggestion } from '../app/Suggestion';
import Image from '../app/foxicon.svg';


class Options extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      titleToEdit: '',
      contentToEdit: '',
      editingFieldsDisplayed: false
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

  selectSuggestionToEdit = (suggestion) => {
    this.setState({
      titleToEdit: suggestion.props.title,
      contentToEdit: suggestion.props.content,
      editingFieldsDisplayed: true
    });
  };

  render() {
    return (
      <div className="options-list">
        <Image className="fox-icon options" /><h1 className="options-page-title">Review Helper Suggestions</h1>
        <p className="click-to-edit">Click on a suggestion to edit</p>
        <hr className="hr-divider" />
        <div className="list-elements">
          {this.state.list.map(element => (
            <div key={element.props.title}>
              <button
                type="button"
                className="js-toolbar-item dropdown-item dropdown-header2"
                onClick={() => this.selectSuggestionToEdit(element)}
              >
                <div className="suggestion-title">{element.props.title}</div>
                <div className="suggestion-content">{element.props.content}</div>
              </button>
            </div>
          ))}
        </div>
        {this.state.editingFieldsDisplayed ?
          <div>
            <hr className="hr-divider" />
            <label htmlFor="title">Title: <input id="title" className="edit-area title" type="text" value={this.state.titleToEdit} /></label>
            <label htmlFor="content">Content: <textarea id="content" className="edit-area content" value={this.state.contentToEdit} /></label>
            <button className="save-btn" type="button">Save suggestion</button>
          </div> : null}
      </div>
    );
  }
}

ReactDOM.render(
  <Options />,
  document.querySelector('#container')
);
