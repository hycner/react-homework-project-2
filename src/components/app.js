import React, {Component} from 'react';
import {connect} from 'react-redux';

import {dispatch} from '../store';
import {getFlights} from '../actions/flights';

import './app.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => dispatch(getFlights()), 5000);
  }

  render() {
    console.log('** this.props', this.props);

    return <div className="App">blah</div>;
  }
}

function mapStateToProps(state) {
  return {
    flights: state.flights,
  };
}

export default connect(mapStateToProps)(App);
