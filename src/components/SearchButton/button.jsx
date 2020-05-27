/* @flow */
import React, { Component } from 'react';
import { withStyles, Fab } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

import { Search as SearchIcon } from '@material-ui/icons';

import styles from './styles';


type Props = {
  classes: Classes,
  onChange: () => void,
};

type State = {
  isInputShown: boolean,
  searchValue: string
};

class SearchButton extends Component<Props, State> {
  state = {
    isInputShown: false,
    searchValue: '',
  };

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  onClick = () => {
    this.setState({ isInputShown: true });
  }

  handleClickOutside = (event) => {
    const { searchValue } = this.state;

    if (!searchValue && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isInputShown: false });
    }
  }

  renderSearchButton = () => {
    const { isInputShown } = this.state;

    return (
      <Zoom
        in={!isInputShown}
        unmountOnExit
      >
        <Fab
          color="primary"
          onClick={this.onClick}
        >
          <SearchIcon color="inherit" />
        </Fab>
      </Zoom>
    );
  }

  onChange = (event) => {
    const { value } = event.target;
    const { onChange } = this.props;

    this.setState({ searchValue: value });
    onChange(value);
  }

  renderInput = () => {
    const { classes } = this.props;
    const { isInputShown } = this.state;

    return (

      <Slide
        direction="down"
        in={isInputShown}
        unmountOnExit
      >
        <div ref={this.setWrapperRef} className={classes.wrapper}>
          <TextField
            id="outlined-search"
            placeholder="Поиск точки..."
            type="search"
            onChange={this.onChange}
            variant="outlined"
          />
        </div>
      </Slide>

    );
  }

  render() {
    const { isInputShown } = this.state;


    return (
      isInputShown ? this.renderInput() : this.renderSearchButton()
    );
  }
}

export default withStyles(styles)(SearchButton);
