import React from 'react';
import PropTypes from 'prop-types';
import { newCars } from '../reducers/select';

export default class Select extends React.Component {
  eachCar(item, i) {
    return (
      <option key={i} index={i} value={item}>
        {item}
      </option>
    );
  }

  render() {
    const { handleSelect } = this.props;
    return (
      <select
        className="select car"
        onChange={e => {
          handleSelect(e.currentTarget.value);
        }}
      >
        {newCars.map((item, i) => this.eachCar(item, i))}
      </select>
    );
  }
}

Select.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};
