import React from 'react';
import { connect } from 'react-redux';

import Car from '../components/Car';
import { deleteCar, addCar, getMotorOn, getMotorOff, toMove, toStop } from '../actions/CarsActions';

import Select from '../components/Select';
import { handleSelect } from '../actions/SelectActions';

class App extends React.Component {
  render() {
    const {
      carsList,
      deleteCarAction,
      addCarAction,
      getMotorOnAction,
      getMotorOffAction,
      toStopAction,
      toMoveAction,
      select,
      handleSelectAction,
    } = this.props;
    return (
      <div>
        <Car
          cars={carsList.cars}
          deleteCar={deleteCarAction}
          addCar={addCarAction}
          getMotorOn={getMotorOnAction}
          getMotorOff={getMotorOffAction}
          toStop={toStopAction}
          toMove={toMoveAction}
          selectedCar={select.selectedCar}
        />
        <Select handleSelect={handleSelectAction} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    carsList: store.carsList,
    select: store.select,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCarAction: cars => dispatch(deleteCar(cars)),
    addCarAction: cars => dispatch(addCar(cars)),
    toMoveAction: isMoving => dispatch(toMove(isMoving)),
    toStopAction: isMoving => dispatch(toStop(isMoving)),
    getMotorOnAction: isMotorOn => dispatch(getMotorOn(isMotorOn)),
    getMotorOffAction: isMotorOn => dispatch(getMotorOff(isMotorOn)),
    handleSelectAction: selectedCar => dispatch(handleSelect(selectedCar)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
