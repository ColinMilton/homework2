import React from 'react';

export default class Moving extends React.Component {
  render() {
    const { isMoving, isMotorOn, index, toStop, toMove } = this.props;
    return (
      <div>
        {isMoving && isMotorOn ? (
          <div>
            <p>Машина едет</p>
            <p>Колёса крутятся</p>
          </div>
        ) : (
          <div>
            <p>Машина стоит</p>
            <p>Колёса не крутятся</p>
          </div>
        )}
        <button
          className="btn green"
          value={index}
          onClick={({ target: { value } }) => (isMotorOn && isMoving ? toStop(value) : !isMotorOn ? '' : toMove(value))}
        >
          {isMoving && isMotorOn ? 'Остановиться' : !isMotorOn ? 'Заведите двигатель, чтобы поехать' : 'Поехать'}
        </button>
      </div>
    );
  }
}
