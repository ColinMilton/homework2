export function deleteCar(index) {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_CAR',
      payload: index,
    });
  };
}

export function addCar(name) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_CAR',
      payload: name,
    });
  };
}

export function setMotorOn(index) {
  return (dispatch) => {
    dispatch({
      type: 'MOTOR_ON',
      payload: index,
    });
  };
}

export function setMotorOff(index) {
  return (dispatch) => {
    dispatch({
      type: 'MOTOR_OFF',
      payload: index,
    });
  };
}

export function toMove(index) {
  return (dispatch) => {
    dispatch({
      type: 'MOVE',
      payload: index,
    });
  };
}

export function toStop(index) {
  return (dispatch) => {
    dispatch({
      type: 'STOP',
      payload: index,
    });
  };
}
