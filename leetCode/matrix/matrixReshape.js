/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshapeExtraSpace = function(nums, r, c) {
  if (r * c !== nums.length * nums[0].length) return nums;
  let temp = [];
  let newMatrix = [...Array(r)].map(row => Array(c));
  for (let rowIndex = 0; rowIndex < nums.length; rowIndex++) {
    for (let colIndex = 0; colIndex < nums[0].length; colIndex++) {
      temp.push(nums[rowIndex][colIndex]);
    }
  }
  for (let rowIndex = 0; rowIndex < newMatrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < newMatrix[0].length; colIndex++) {
      newMatrix[rowIndex][colIndex] = temp.shift();
    }
  }
  return newMatrix;
};

var matrixReshape = function(nums, r, c) {
  if (r * c !== nums.length * nums[0].length) return nums;
  let newMatrix = [...Array(r)].map(row => Array(c));
  let rowIndex = 0,
    colIndex = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      debugger
      if (colIndex === nums[0].length) {
        colIndex = 0;
        rowIndex++;
      }
      newMatrix[i][j] = nums[rowIndex][colIndex];
      colIndex++;
    }
  }
  return newMatrix;
};

/*
create new matrix & then iterate over current matrix, populating the new matrix as we go
*/

// console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));