/* eslint-disable default-param-last */
import thunk from 'redux-thunk';
import {
  applyMiddleware, createStore, Store,
} from 'redux';
import { Lot, Home, LotToHome } from '../types/components';
import { State, Action, ActionTypes } from '../types/store';

const initState: State = {
  lots: [],
  homes: [],
  lotsToHomes: [],
};

const stateReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case 'ADD_LOTS':
      return { ...state, lots: [...action.payload] };
    case 'ADD_HOMES':
      return { ...state, homes: [...action.payload] };
    case 'ADD_LOT_HOMES':
      return { ...state, lotsToHomes: [...action.payload] };
    default:
      return state;
  }
};

export const store: Store<State, Action> & {
  dispatch: ActionTypes;
} = createStore(stateReducer, applyMiddleware(thunk));

const { dispatch } = store;

export const setLots = (lots: Lot[]) => {
  dispatch({ type: 'ADD_LOTS', payload: [...lots] });
};

export const setHomes = (houses: Home[]) => {
  dispatch({ type: 'ADD_HOMES', payload: [...houses] });
};

export const setLotsToHomes = (lotsToHomes: LotToHome[]) => {
  dispatch({ type: 'ADD_LOT_HOMES', payload: [...lotsToHomes] });
};
