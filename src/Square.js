import React from "react";

function Square(props) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
function calculateWinner(squares) {
  let squares2d = mapArray2d(squares);

  let tempRightDiagonal = []
  let tempLeftDiagonal = []

  for(let i =0;i<squares2d.length;i++){
    let tempRow = []
    let tempCol = []
    for(let j =0;j<squares2d.length;j++){
      tempRow.push(squares2d[i][j])
      tempCol.push(squares2d[j][i])

      if(i === j){
        tempLeftDiagonal.push(squares2d[i][j])
      }
      else if(i === squares2d.length-1-j){
        tempRightDiagonal.push(squares2d[i][j])
      }

    }
    if (tempRow.every((val, index) => val === "X") || tempCol.every((val, index) => val === "X")) {
      return "X"
    }
    else if (tempRow.every((val, index) => val === "O") || tempCol.every((val, index) => val === "O")) {
      return "O"
    }
  }
  
  if (tempRightDiagonal.every((val, index) => val === "X") || tempLeftDiagonal.every((val, index) => val === "X")) {
    return "X"
  }
  else if (tempRightDiagonal.every((val, index) => val === "O") || tempLeftDiagonal.every((val, index) => val === "O")) {
    return "O"
  }


  return null;
}
function mapArray2d(array1d) {
  let array2d = []
  const size = array1d.length**(0.5)
  for (let i = 0; i < size; i++) {
    let col = []
    for (let j = size*i; j < size*(i+1); j++) {
      col.push(array1d[j])
    }
    array2d.push(col)
  }
  return array2d;
}
  
export {Square,calculateWinner};