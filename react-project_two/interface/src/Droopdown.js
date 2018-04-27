import React, { Component } from 'react'

class Droopdown extends Component {
  constructor(props){
    super(props);

    this.state = {isOpened: false};
  }

  toggleState(){
    this.setState({ isOpened: !this.state.isOpened });
  }

  render(){

console.log('isOpened', this.state.isOpened );

let droopdowntext ;
  if(this.state.isOpened){
    droopdowntext = <div>

      Here is what is shown in droopdown
    </div>
  }
    return(
      <h1 onClick={this.toggleState.bind(this)}>

      its Droopdown baybe
      {droopdowntext}
      
    </h1>
    )
  }
}


export default Droopdown;
