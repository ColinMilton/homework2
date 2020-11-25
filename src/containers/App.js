import React from 'react';
import { connect } from 'react-redux';

import Car from '../components/Car';
import { deleteCar, addCar, setMotorOn, setMotorOff, toMove, toStop } from '../actions/CarsActions';

import Select from '../components/Select';
import { handleSelect } from '../actions/SelectActions';

class App extends React.Component {
  render() {
    const { cars, deleteCar, addCar, setMotorOn, setMotorOff, toStop, toMove, select, handleSelect } = this.props;
    return (
      <div>
        <Car
          cars={cars}
          deleteCar={deleteCar}
          addCar={addCar}
          setMotorOn={setMotorOn}
          setMotorOff={setMotorOff}
          toStop={toStop}
          toMove={toMove}
          selectedCar={select.selectedCar}
        />
        <Select handleSelect={handleSelect} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    cars: store.cars,
    select: store.select,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCar: (cars) => dispatch(deleteCar(cars)),
    addCar: (cars) => dispatch(addCar(cars)),
    toMove: (isMoving) => dispatch(toMove(isMoving)),
    toStop: (isMoving) => dispatch(toStop(isMoving)),
    setMotorOn: (isMotorOn) => dispatch(setMotorOn(isMotorOn)),
    setMotorOff: (isMotorOn) => dispatch(setMotorOff(isMotorOn)),
    handleSelect: (selectedCar) => dispatch(handleSelect(selectedCar)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
