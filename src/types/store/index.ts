import { Home, Lot, LotToHome } from '../components';

export interface State {
lots: Lot[];
homes: Home[];
lotsToHomes: LotToHome[];
}

export type ActionTypes =
| 'ADD_LOTS'
| 'ADD_HOMES'
| 'ADD_LOT_HOMES'
| 'ADD_COMPATIBLE_LOTS';

export interface Action {
type: ActionTypes;
payload: any;
}
