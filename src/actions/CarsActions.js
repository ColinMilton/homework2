export const DELETE_CAR_ACTION = 'DELETE_CAR_ACTION';
export const ADD_CAR_ACTION = 'ADD_CAR_ACTION';

export const MOTOR_ON_ACTION = 'MOTOR_ON_ACTION';
export const MOTOR_OFF_ACTION = 'MOTOR_OFF_ACTION';

export const MOVE_ACTION = 'MOVE_ACTION';
export const STOP_ACTION = 'STOP_ACTION';

export function deleteCar(index) {
  return dispatch => {
    dispatch({
      type: DELETE_CAR_ACTION,
      payload: index,
    });
  };
}

export function addCar(name) {
  return dispatch => {
    dispatch({
      type: ADD_CAR_ACTION,
      payload: name,
    });
  };
}

export function getMotorOn(index) {
  return dispatch => {
    dispatch({
      type: MOTOR_ON_ACTION,
      payload: index,
    });
  };
}

export function getMotorOff(index) {
  return dispatch => {
    dispatch({
      type: MOTOR_OFF_ACTION,
      payload: index,
    });
  };
}

export function toMove(index) {
  return dispatch => {
    dispatch({
      type: MOVE_ACTION,
      payload: index,
    });
  };
}

export function toStop(index) {
  return dispatch => {
    dispatch({
      type: STOP_ACTION,
      payload: index,
    });
  };
}
