import React from 'react';

import Motor from './Motor';
import Moving from './Moving';

const test;
console.log(test);

export default class Car extends React.Component {
  render() {
    const { cars, addCar, selectedCar, toMove, toStop, setMotorOn, setMotorOff, deleteCar } = this.props;
    return (
      <div>
        <div>
          {cars.map((item, i) => (
            <div className="card" key={i} index={i} name={item.name}>
              <h3>{item.name}</h3>
              <Motor
                index={i}
                isMotorOn={cars[i].isMotorOn}
                setMotorOn={setMotorOn}
                setMotorOff={setMotorOff}
                toStop={toStop}
              />
              <Moving
                index={i}
                isMoving={cars[i].isMoving}
                toMove={toMove}
                toStop={toStop}
                isMotorOn={cars[i].isMotorOn}
              />
              <button className="btn delete" value={i} onClick={({ target: { value } }) => deleteCar(value)}>
                Удалить
              </button>
            </div>
          ))}
        </div>
        <button className="btn" onClick={() => addCar(selectedCar)}>
          Добавить
        </button>
      </div>
    );
  }
}
