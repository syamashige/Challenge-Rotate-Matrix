const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    // console.log("matrix", this.matrix);
    // console.log("direction", direction);
    // console.log("array 5", Array(5))

    let arrClockWise = [[], [], [], [], []];
    let arrCounterClockWise = [[], [], [], [], []];

    // let newArr = [];
    // let newArrWise = [];
    // console.log("newArr", newArr);

    // newArr[0].push(matrix[0].shift());
    // console.log("new arr", newArr);

    // for (let i = 0; i < this.matrix[0].length; i++) {
    //   newArr[0].push(this.matrix[i][0]);
    // }
    if (direction === "ClockWise") {

      //Want to push into a new array and then push the array into the overall new array
      for (let j = this.matrix.length -1; i >= 0; i--) {

        for (let i = this.matrix.length-1; i >= 0; i--) {
          arrClockWise[j].push(this.matrix[i][j]);
          // arrClockWise[j].push(this.matrix[i][1]);
          // arrClockWise[2].push(this.matrix[i][2]);
          // arrClockWise[3].push(this.matrix[i][3]);
          // arrClockWise[4].push(this.matrix[i][4]);
        } 
      }
      
      this.matrix = arrClockWise;
    } else if (direction === "CounterClockWise") {
      for (let j = this.matrix.length -1; i >= 0; i--) {

        for (let i = 0; i < this.matrix.length; i++) {
          arrCounterClockWise[j].push(this.matrix[i][j]);
          // arrCounterClockWise[1].push(this.matrix[i][3]);
          // arrCounterClockWise[2].push(this.matrix[i][2]);
          // arrCounterClockWise[3].push(this.matrix[i][1]);
          // arrCounterClockWise[4].push(this.matrix[i][0]);
        }
      }
      this.matrix = arrCounterClockWise;
    } else {
      return "fml"
    };
    


    // newArr[0].push(this.matrix[4].shift())

    // must be a valid Direction, see Direction.js

  }
};
