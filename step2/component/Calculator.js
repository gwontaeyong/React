import React, {Component} from 'react';
import { Button } from 'react-native';

class Calculator extends Component {

  constructor(props) {
    super(props);
    let buttonList = Array.apply(null, Array(5)).map(function (_, i) {
      return i;
    });

    this.state = {
      buttonList: buttonList,
    };
  }

  render() {
    return (
        <div>
          <h1>Calculator</h1>
          <h1> {this.state.buttonList.toString()} </h1>
          {/*{*/}
          {/*  <Button></Button>*/}
          {/*}*/}
        </div>

    );
  }
}


export default Calculator;