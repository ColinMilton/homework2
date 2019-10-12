import React from 'react';

export default class Moving extends React.Component {
  stopOnClick = e => {
    let index = e.currentTarget.value;
    this.props.toStop(index);
  };

  moveOnClick = e => {
    let index = e.currentTarget.value;
    this.props.toMove(index);
  };

  render() {
    const { isMoving, isMotorOn, index } = this.props;
    return (
      <div>
        <p>{isMoving && isMotorOn ? 'Машина едет' : 'Машина стоит'}</p>
        <p>{isMoving && isMotorOn ? 'Колёса крутятся' : 'Колёса не крутятся'}</p>
        <button
          className="btn green"
          value={index}
          onClick={isMotorOn && isMoving ? this.stopOnClick : !isMotorOn ? '' : this.moveOnClick}
        >
          {isMoving && isMotorOn ? 'Остановиться' : !isMotorOn ? 'Заведите двигатель, чтобы поехать' : 'Поехать'}
        </button>
      </div>
    );
  }
}
