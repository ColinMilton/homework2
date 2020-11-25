import React from 'react';

export default class Motor extends React.Component {
  render() {
    const { isMotorOn, index, setMotorOff, toStop, setMotorOn } = this.props;
    return (
      <div>
        <p>{isMotorOn ? 'Двигатель заведён' : 'Двигатель заглушён'}</p>
        <button
          className="btn blue"
          value={index}
          onClick={({ target: { value } }) => (isMotorOn ? (setMotorOff(value), toStop(value)) : setMotorOn(value))}
        >
          {isMotorOn ? 'Заглушить двигатель' : 'Завести двигатель'}
        </button>
      </div>
    );
  }
}
