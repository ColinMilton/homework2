import React from 'react';
import PropTypes from 'prop-types';

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
    if (isMoving[index] && isMotorOn[index]) {
      return (
        <div>
          <p>Машина едет</p>
          <p>Колёса крутятся</p>
          <button className="btn green" value={index} onClick={this.stopOnClick}>
            Остановиться
          </button>
        </div>
      );
    } else if (!isMotorOn[index]) {
      return (
        <div>
          <p>Машина стоит</p>
          <p>Колёса не крутятся</p>
          <button className="btn green">&uarr; Заведите двигатель, чтобы поехать</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Машина стоит</p>
          <p>Колёса не крутятся</p>
          <button className="btn green" value={index} onClick={this.moveOnClick}>
            Поехать
          </button>
        </div>
      );
    }
  }
}

Moving.propTypes = {
  isMoving: PropTypes.array.isRequired,
  isMotorOn: PropTypes.array.isRequired,
  toStop: PropTypes.func.isRequired,
  toMove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
