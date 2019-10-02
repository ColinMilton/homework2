import { MOVE_ACTION, STOP_ACTION } from '../actions/MovingActions';

const initialState = {
  isMoving: [false, true, true],
};

export function movingReducer(state = initialState, action) {
  const newMovingState = [...state.isMoving];
  switch (action.type) {
    case 'MOVE_ACTION':
      newMovingState[action.payload] = true;
      return { ...state, isMoving: newMovingState };

    case 'STOP_ACTION':
      newMovingState[action.payload] = false;
      return { ...state, isMoving: newMovingState };

    default:
      return state;
  }
}
