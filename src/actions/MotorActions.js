export const MOTOR_ON_ACTION = 'MOTOR_ON_ACTION';
export const MOTOR_OFF_ACTION = 'MOTOR_OFF_ACTION';

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
