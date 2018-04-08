// @flow
import type {TAction} from '../actions/_actionTypes';

import {GET_FLIGHTS} from '../actions/_actionTypes';

export type TFlight = {
  departureTime: string,
  arrivalTime: string,
  carrier: string,
  origin: string,
  destination: string,
};

export type TStateFlights = TFlight[];

const initialState: TStateFlights = [];

export default (state: TStateFlights = initialState, action: TAction): TStateFlights => {
  switch (action.type) {
    case GET_FLIGHTS:
      return action.payload;
    default:
      return state;
  }
};
