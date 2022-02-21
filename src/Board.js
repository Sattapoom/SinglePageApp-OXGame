import React from "react";
import {Square} from "./Square";
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  board = (size)=> {
    let row = []

    // Outer loop to create parent
    for (let i = 0; i < size; i++) {
      let squares = []
      //Inner loop to create children
      for (let j = size*i; j < size*(i+1); j++) {
        squares.push(this.renderSquare(j))
      }
      //Create the parent and add the children
      row.push(<div className="board-row">{squares}</div>)
    }
    return row
  }

  render() {
    return (
      <div>
        {this.board(this.props.boardsize)}
      </div>
    );
  }
}

export default Board;