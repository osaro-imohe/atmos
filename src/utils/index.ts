/* eslint-disable no-unused-vars */
import { Home, Lot, LotToHome } from '../types/components';

export const convertAcreToSqft = (acre: number) => Math.ceil(acre * 43560);

export const convertNameToQueryParam = (name: string) => name.split(' ').join('-').toLowerCase();

export const capitalizeFirstLetterInWord = (phrase: string) => phrase
  .toLowerCase()
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

export const convertQueryParamToName = (queryParam: string) => {
  const regEx = /.*?=\s*(.*)/;
  const value = regEx.exec(queryParam);
  if (value) {
    const newValue = value[1];
    const name = newValue.split('-').join(' ');
    return capitalizeFirstLetterInWord(name);
  }
  return '';
};

export const getAddressDetails = (address: string) => {
  const addressFields = address.split(',');
  const street = addressFields[0];
  const city = addressFields[1];
  const state = addressFields[2];
  return { city, state, street };
};

export const getCompatibleLots = (
  homeName: string,
  homes: Home[],
  lots: Lot[],
  lotsToHome: LotToHome[],
) => {
  if (!homeName || !homes || !lots || !lotsToHome) {
    return [];
  }
  try {
    const selectedHomes = homes.filter((home) => home.name === homeName);
    const currHome = selectedHomes[0];
    const { homePlanId } = currHome;
    const filteredLotMaps = lotsToHome.filter(
      (lotToHome) => lotToHome.homePlanId === homePlanId,
    );
    const lotIds: number[] = [];
    filteredLotMaps.forEach((filteredLot) => lotIds.push(filteredLot.lotId));
    const compatibleLots = lots.filter((lot) => lotIds.indexOf(lot.lotId) >= 0);
    return compatibleLots;
  } catch (e) {
    return [];
  }
};

export const getCompatibleHomes = (
  streetName: string,
  homes: Home[],
  lots: Lot[],
  lotsToHome: LotToHome[],
) => {
  if (!streetName || !homes || !lots || !lotsToHome) {
    return [];
  }
  try {
    const selectedLots = lots.filter((lot) => {
      const { street } = getAddressDetails(lot.address);
      return street === streetName;
    });
    const currLot = selectedLots[0];
    const { lotId } = currLot;
    const filteredHomesMaps = lotsToHome.filter(
      (lotToHome) => lotToHome.lotId === lotId,
    );
    const homeIds: number[] = [];
    filteredHomesMaps.forEach((filteredHome) => homeIds.push(filteredHome.homePlanId));
    const compatibleHomes = homes.filter(
      (home) => homeIds.indexOf(home.homePlanId) >= 0,
    );
    return compatibleHomes;
  } catch (e) {
    return [];
  }
};
