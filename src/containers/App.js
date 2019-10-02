import React from 'react';
import { connect } from 'react-redux';

import Car from './Car';
import { deleteCar, addCar } from '../actions/CarsActions';

import Select from '../components/Select';
import { handleSelect } from '../actions/SelectActions';

class App extends React.Component {
  render() {
    const { carsList, deleteCarAction, addCarAction, select, handleSelectAction } = this.props;
    return (
      <div>
        <Car cars={carsList.cars} deleteCar={deleteCarAction} addCar={addCarAction} selectedCar={select.selectedCar} />
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
    handleSelectAction: selectedCar => dispatch(handleSelect(selectedCar)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
