import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

class Bookings extends Component {
  state = {
    name: '',
    date: ''
  };

  onChange = (e, fieldName) => {
    e.preventDefault();
    this.setState({ [fieldName]: e.target.value });
  };

  onSubmit = e => {
    debugger;

    e.preventDefault();
    // validation
    if (this.validation(this.state.date)) {
      this.props.handleSubmit(false, this.state);
    } else {
      this.props.handleSubmit(true, this.state);
    }
  };

  // this can be here or in <App>
  validation = dates => {
    //make sure date is formatted properly, need to come up with best way to check
    //return bool
    return true;
  };

  render() {
    return (
      <div className="row">
        <input
          onChange={e => {
            this.onChange(e, 'name');
          }}
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
        />
        <input
          onChange={e => {
            this.onChange(e, 'date');
          }}
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
        />
        <button
          onSubmit={this.onSubmit}
          variant="outlined"
          color="primary"
          className="block-center"
        >
          Get Meals Schedule
        </button>
      </div>
    );
  }
}

export default Bookings;
