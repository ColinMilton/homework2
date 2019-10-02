import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Motor from '../components/Motor';
import { getMotorOn, getMotorOff } from '../actions/MotorActions';

import Moving from '../components/Moving';
import { toMove, toStop } from '../actions/MovingActions';

class Car extends React.Component {
  deleteCarOnClick = e => {
    const index = e.currentTarget.value;
    this.props.deleteCar(index);
  };

  eachCar(item, i) {
    const { moving, toMoveAction, toStopAction, motor, getMotorOnAction, getMotorOffAction } = this.props;
    return (
      <div className="card" key={i} index={i} name={item}>
        <h3>{item}</h3>
        <Motor
          isMotorOn={motor.isMotorOn}
          getMotorOn={getMotorOnAction}
          getMotorOff={getMotorOffAction}
          index={i}
          toStop={toStopAction}
        />
        <Moving
          isMoving={moving.isMoving}
          toMove={toMoveAction}
          toStop={toStopAction}
          index={i}
          isMotorOn={motor.isMotorOn}
        />
        <button className="btn delete" value={i} onClick={this.deleteCarOnClick}>
          Удалить
        </button>
      </div>
    );
  }
  render() {
    const { cars, addCar, selectedCar } = this.props;
    return (
      <div>
        <div>{cars.map((item, i) => this.eachCar(item, i))}</div>
        <button className="btn" onClick={() => addCar(selectedCar)}>
          Добавить
        </button>
      </div>
    );
  }
}

Car.propTypes = {
  cars: PropTypes.array.isRequired,
  deleteCar: PropTypes.func.isRequired,
  addCar: PropTypes.func.isRequired,
  selectedCar: PropTypes.string.isRequired,
};

const mapStateToProps = store => {
  return {
    moving: store.moving,
    motor: store.motor,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toMoveAction: isMoving => dispatch(toMove(isMoving)),
    toStopAction: isMoving => dispatch(toStop(isMoving)),
    getMotorOnAction: isMotorOn => dispatch(getMotorOn(isMotorOn)),
    getMotorOffAction: isMotorOn => dispatch(getMotorOff(isMotorOn)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Car);
