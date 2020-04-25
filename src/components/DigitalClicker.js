// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  increaseClicks = () => {
    this.setState({timesClicked: this.state.timesClicked + 1});
  }

  render(){
    return(
      <button onClick={this.increaseClicks}>{this.state.timesClicked}</button>
    )
  }
}
