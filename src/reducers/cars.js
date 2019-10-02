import { DELETE_CAR_ACTION, ADD_CAR_ACTION } from '../actions/CarsActions';

const initialState = {
  cars: ['Газель', 'Камаз', 'Жигули'],
};

export function carsReducer(state = initialState, action) {
  const newList = [...state.cars];
  switch (action.type) {
    case 'DELETE_CAR_ACTION':
      newList.splice(action.payload, 1);
      return { ...state, cars: newList };
    case 'ADD_CAR_ACTION':
      newList.push(action.payload);
      return { ...state, cars: newList };

    default:
      return state;
  }
}
