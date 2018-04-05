//@flow
import carrierData from './_carrierData';

export function getCarrierName (abbr: string): string {
  return carrierData[abbr];
}

export function getCarrierIcon (abbr: string): string {
  return `${abbr}.png`;
}
