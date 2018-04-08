// @flow
import React, {PureComponent} from 'react';

import type {TFlight} from '../../../reducers/flights';
import './airports.css';

type TProps = {
  flight: TFlight,
};

export default class Airports extends PureComponent<TProps> {
  render() {
    let {flight} = this.props;

    let departure = new Date(flight.departureTime).toLocaleString();
    let arrival = new Date(flight.arrivalTime).toLocaleString();

    return (
      <div className="airports">
        <div className="airport">
          <div className="airport-name">{flight.origin}</div>
          <div className="airport-date">{departure}</div>
        </div>

        <div className="airport">
          <div className="airport-name">{flight.destination}</div>
          <div className="airport-date">{arrival}</div>
        </div>
      </div>
    );
  }
}
