import { combineReducers } from 'redux';

import { movingReducer } from './moving';
import { motorReducer } from './motor';
import { carsReducer } from './cars';
import { selectReducer } from './select';

export const rootReducer = combineReducers({
  moving: movingReducer,
  motor: motorReducer,
  carsList: carsReducer,
  select: selectReducer,
});
