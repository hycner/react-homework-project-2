// @flow
import React, {PureComponent} from 'react';

import type {TFlight} from '../../../reducers/flights';
import {getCarrierIcon, getCarrierName} from '../../../util';
import './carrier.css';

type TProps = {
  flight: TFlight,
};

export default class Carrier extends PureComponent<TProps> {
  render() {
    return (
      <div className="carrier">
        <img
          src={getCarrierIcon(this.props.flight.carrier)}
          alt={this.props.flight.carrier}
          className="carrier-img"
        />
        <div className="carrier-name">{getCarrierName(this.props.flight.carrier)}</div>
      </div>
    );
  }
}
