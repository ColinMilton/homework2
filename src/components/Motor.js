import React from 'react';

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
    return (
      <div>
        <p>{isMotorOn ? 'Двигатель заведён' : 'Двигатель заглушён'}</p>
        <button className="btn blue" value={index} onClick={isMotorOn ? this.deactivateOnClick : this.activateOnClick}>
          {isMotorOn ? 'Заглушить двигатель' : 'Завести двигатель'}
        </button>
      </div>
    );
  }
}
