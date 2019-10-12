import {
  DELETE_CAR_ACTION,
  ADD_CAR_ACTION,
  MOTOR_ON_ACTION,
  MOTOR_OFF_ACTION,
  MOVE_ACTION,
  STOP_ACTION,
} from '../actions/CarsActions';

const initialState = {
  cars: [
    {
      name: 'Газель',
      isMotorOn: true,
      isMoving: false,
    },
    {
      name: 'Камаз',
      isMotorOn: true,
      isMoving: true,
    },
    {
      name: 'Жигули',
      isMotorOn: false,
      isMoving: false,
    },
  ],
};

export function carsReducer(state = initialState, action) {
  const newList = [...state.cars];

  switch (action.type) {
    case 'DELETE_CAR_ACTION':
      newList.splice(action.payload, 1);
      return { ...state, cars: newList };

    case 'ADD_CAR_ACTION':
      newList.push({ name: action.payload });
      return { ...state, cars: newList };

    case 'MOTOR_ON_ACTION':
      newList[action.payload].isMotorOn = true;
      return { ...state, cars: newList };

    case 'MOTOR_OFF_ACTION':
      newList[action.payload].isMotorOn = false;
      return { ...state, cars: newList };

    case 'MOVE_ACTION':
      newList[action.payload].isMoving = true;
      return { ...state, cars: newList };

    case 'STOP_ACTION':
      newList[action.payload].isMoving = false;
      return { ...state, cars: newList };

    default:
      return state;
  }
}
