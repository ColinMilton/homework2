import { HANDLE_SELECT_ACTION } from '../actions/SelectActions';

export const newCars = ['BMW', 'Mercedes', 'Jaguar'];

const initialState = {
  selectedCar: newCars[0],
};

export function selectReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_SELECT_ACTION:
      return { ...state, selectedCar: action.payload };

    default:
      return state;
  }
}
