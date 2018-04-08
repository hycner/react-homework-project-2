// @flow
import React, {PureComponent} from 'react';

import type {TFlight} from '../../reducers/flights';

import Airports from './flight/airports';
import Carrier from './flight/carrier';
import './flight.css';

type TProps = {
  flight: TFlight,
};

export default class Flight extends PureComponent<TProps> {
  render() {
    return (
      <div className="flight">
        <Carrier flight={this.props.flight} />
        <Airports flight={this.props.flight} />
      </div>
    );
  }
}
