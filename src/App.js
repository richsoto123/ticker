import React, {Component} from 'react'

class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      pauseTicker: false,
    }
  }
  componentDidMount(){ 
    
    setInterval(() => {
      this.setState({
        count: this.state.count +1,
      })
    }, 1000)
  
  }
  
  shouldComponentUpdate (nextProps, nextState){
    if(this.state.pauseTicker===false){ 
    return nextState.count % 3 === 0;
    //  if (nextState.count % 3 === 0 ) return true;
    //  else return false;
    }
  }

  reset = () => { this.setState({
    //reset count to zero
    count:  0
  });
   
  }
  pause = () => {
    // if(this.state.pauseTicker){
    //   return this.state.pauseTicker = false;
    // }else{
    //   return this.state.pauseTicker = true;
    // }
    if(this.state.pauseTicker){
      this.setState({
        pauseTicker: false
      })
    }else{
      this.setState({
        pauseTicker: true
      })
    }
  }

  render() {
    return (
      <div>
        <p>The ticker number is : {this.state.count}</p>
        <button type = "button" onClick={this.reset}> Reset Ticker</button>
        <button type = "button" onClick={this.pause}> 
        {this.state.pauseTicker ? 'Ticker is paused' : 'Pause the Ticker'}</button>
      </div>
    );
  }
}

export default Ticker 