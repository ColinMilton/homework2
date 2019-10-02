import React from 'react';
import PropTypes from 'prop-types';

export default class Motor extends React.Component {
  activateOnClick = e => {
    let index = e.currentTarget.value;
    this.props.getMotorOn(index);
  };

  deactivateOnClick = e => {
    let index = e.currentTarget.value;
    this.props.getMotorOff(index);
    this.props.toStop(index);
  };
  render() {
    const { isMotorOn, index } = this.props;
    if (isMotorOn[index]) {
      return (
        <div>
          <p>Двигатель заведён</p>
          <button className="btn blue" value={index} onClick={this.deactivateOnClick}>
            Заглушить двигатель
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Двигатель заглушён</p>
          <button className="btn blue" value={index} onClick={this.activateOnClick}>
            Завести двигатель
          </button>
        </div>
      );
    }
  }
}

Motor.propTypes = {
  isMotorOn: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  getMotorOn: PropTypes.func.isRequired,
  getMotorOff: PropTypes.func.isRequired,
  toStop: PropTypes.func.isRequired,
};
