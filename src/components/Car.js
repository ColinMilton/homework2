import React from 'react';

import Motor from './Motor';
import Moving from './Moving';

export default class Car extends React.Component {
  deleteCarOnClick = e => {
    const index = e.currentTarget.value;
    this.props.deleteCar(index);
  };

  eachCar(item, i) {
    const { cars, toMove, toStop, getMotorOn, getMotorOff } = this.props;
    return (
      <div className="card" key={i} index={i} name={item.name}>
        <h3>{item.name}</h3>
        <Motor
          index={i}
          isMotorOn={cars[i].isMotorOn}
          getMotorOn={getMotorOn}
          getMotorOff={getMotorOff}
          toStop={toStop}
        />
        <Moving index={i} isMoving={cars[i].isMoving} toMove={toMove} toStop={toStop} isMotorOn={cars[i].isMotorOn} />
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
