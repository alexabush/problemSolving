import React, { Component } from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';

class App extends Component {
  state = {
    errors: [],
    dates: []
  };

  handleSubmit = (isError, data) => {
    // need to process names data
    if (isError) {
      this.setState(prevState => {
        let newErrors = [...prevState.errors, data.name];
        return {
          errors: newErrors
        };
      });
    } else {
      // add new dates if needed, else add new hacker names to existing dates
    }
  };

  render() {
    let { errors, dates } = this.state;
    let errorsComponents = errors.map(error => {
      return <Error name={error} />;
    });
    let mealsComponents = dates.forEach(dateObj =>
      dateObj.hacker.map((name, i, obj) => {
        return <Meals name={name} date={obj.date} />;
      })
    );
    return (
      <div className="container-fluid">
        <center>
          <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
          <Bookings handleSubmit={this.handleSubmit} />
          <div>{errorsComponents}</div>
          <div>{mealsComponents}</div>
        </div>
      </div>
    );
  }
}

export default App;
