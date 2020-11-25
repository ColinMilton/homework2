export const newCars = ['BMW', 'Mercedes', 'Jaguar'];

const initialState = {
  selectedCar: newCars[0],
};

export function selectReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'HANDLE_SELECT':
      return { ...state, selectedCar: payload };

    default:
      return state;
  }
}
