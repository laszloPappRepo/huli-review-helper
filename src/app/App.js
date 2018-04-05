import onClickOutside from 'react-onclickoutside';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './foxicon.svg';
import './App.scss';
import Dropdown from './Dropdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }

  handleClickOutside = () => {
    this.setState({
      switched: false
    });
  };

  toggleSwitch = () => {
    this.setState(prevState => ({
      switched: !prevState.switched
    }));
  };
  render() {
    return (
      <div>
        <button type="button" >
          <Image className="fox-icon" onClick={this.toggleSwitch} />
        </button>
        {this.state.switched ?
          <Dropdown textAreaId={this.props.textAreaId} clickAction={this.handleClickOutside} />
          : null}
      </div>
    );
  }
}

App.propTypes = {
  textAreaId: PropTypes.string.isRequired
};

export default onClickOutside(App);
