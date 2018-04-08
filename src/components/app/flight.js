// @flow
import React, {PureComponent} from 'react';

import type {TFlight} from "../../reducers/flights";
import './flight.css';

type TProps = {
  flight: TFlight
};

export default class App extends PureComponent<TProps> {
  render() {
    return <div className="App">blah</div>;
  }
}
