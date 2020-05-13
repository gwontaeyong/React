import React, {Component} from 'react';

class MyComponent extends Component {


  render() {
    return (
        <div>
          <h1> This is React Component</h1>
          <h1> {this.props.name}</h1>
        </div>
    );
  }
}


export default MyComponent;