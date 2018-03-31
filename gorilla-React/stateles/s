import React, { Component } from 'react';

const DigitalClock = function (props) {
  return <div>{props.time}</div>
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
    this.clockLauncher();
  }
clockLauncher () {
  setInterval( () => {
    this.setState({
      currentTime: (new Date()).toLocaleString()

    } )
  }, 1000)
}
  render(){
    return (
      <div>

        <DigitalClock time={this.state.currentTime} />

      </div>
    )
  }
}
export default Clock;
