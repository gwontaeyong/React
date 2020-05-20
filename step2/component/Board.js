import React, {Component} from "react";
import Square from "./Square";

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isX: true,
      winner: null
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (squares[i]) {
      alert("can't click twice");
      return;
    }

    squares[i] = this.state.isX ? 'X' : 'O';
    this.setState({
      squares: squares,
      isX: !this.state.isX
    }, () => {
      this.whoIsWin(this.state.squares);
    });
  }

  componentDidMount() {
    this.whoIsWin(this.state.squares);
  }

  renderSquare(i) {
    return <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}

    />;
  }

  whoIsWin(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if ((squares[a] == squares[b]) && (squares[b] == squares[a]) && (squares[c] == squares[a]) && squares[a]) {
        // alert("Winner is " + squares[a]);
        this.setState({winner: squares[a]})
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

          {
            this.state.winner &&
            <div>winner is {this.state.winner}</div>
          }

        </div>
    );
  }
}

export default Board
