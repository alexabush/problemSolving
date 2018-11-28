import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const Meals = () => {
  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        <div>
          <li className="morning">
            Breakfast for {this.props.name} on {this.props.date}
          </li>
          <li className="afternoon">
            Lunch for {this.props.name} on {this.props.date}
          </li>
          <li className="night">
            Dinner for {this.props.name} on {this.props.date}
          </li>
        </div>
      </ol>
    </div>
  );
};
export default Meals;
