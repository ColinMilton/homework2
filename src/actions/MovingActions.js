export const MOVE_ACTION = 'MOVE_ACTION';
export const STOP_ACTION = 'STOP_ACTION';

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
