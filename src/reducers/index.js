import { combineReducers } from 'redux';

import { carsReducer } from './cars';
import { selectReducer } from './select';

export const rootReducer = combineReducers({
  cars: carsReducer,
  select: selectReducer,
});
