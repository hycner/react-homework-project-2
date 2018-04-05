//@flow
import flightData from './_flightData';

export default {
  get: () => Promise.resolve(flightData)
}
