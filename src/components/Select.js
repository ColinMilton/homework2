import React from 'react';
import { newCars } from '../reducers/select';

export default class Select extends React.Component {
  render() {
    const { handleSelect } = this.props;
    return (
      <select
        className="select car"
        onChange={({ target: { value } }) => {
          handleSelect(value);
        }}
      >
        {newCars.map((item, i) => (
          <option key={i} index={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}
