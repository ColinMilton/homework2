import { MOTOR_ON_ACTION, MOTOR_OFF_ACTION } from '../actions/MotorActions';

const initialState = {
  isMotorOn: [true, false, true],
};

export function motorReducer(state = initialState, action) {
  const newMotorState = [...state.isMotorOn];
  switch (action.type) {
    case 'MOTOR_ON_ACTION':
      newMotorState[action.payload] = true;
      return { ...state, isMotorOn: newMotorState };

    case 'MOTOR_OFF_ACTION':
      newMotorState[action.payload] = false;
      return { ...state, isMotorOn: newMotorState };

    default:
      return state;
  }
}
