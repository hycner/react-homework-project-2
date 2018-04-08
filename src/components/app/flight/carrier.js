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
    let {flight} = this.props;
    let name = getCarrierName(flight.carrier);
    let icon = getCarrierIcon(flight.carrier);

    return (
      <div className="carrier">
        <img
          src={icon}
          alt={flight.carrier}
          className="carrier-img"
        />
        <div className="carrier-name">{name}</div>
      </div>
    );
  }
}
