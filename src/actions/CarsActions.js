export const DELETE_CAR_ACTION = 'DELETE_CAR_ACTION';
export const ADD_CAR_ACTION = 'ADD_CAR_ACTION';

export function deleteCar(index) {
  return dispatch => {
    dispatch({
      type: DELETE_CAR_ACTION,
      payload: index,
    });
  };
}

export function addCar(index) {
  return dispatch => {
    dispatch({
      type: ADD_CAR_ACTION,
      payload: index,
    });
  };
}
