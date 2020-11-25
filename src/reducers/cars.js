const initialState = [
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
];

export function carsReducer(state = initialState, { type, payload }) {
  const newList = [...state];

  switch (type) {
    case 'DELETE_CAR':
      newList.splice(payload, 1);
      return [...newList];

    case 'ADD_CAR':
      newList.push({ name: payload });
      return [...newList];

    case 'MOTOR_ON':
      newList[payload].isMotorOn = true;
      return [...newList];

    case 'MOTOR_OFF':
      newList[payload].isMotorOn = false;
      return [...newList];

    case 'MOVE':
      newList[payload].isMoving = true;
      return [...newList];

    case 'STOP':
      newList[payload].isMoving = false;
      return [...newList];

    default:
      return state;
  }
}
