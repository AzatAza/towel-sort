
module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    i % 2 === 0 ? matrix[i] : matrix[i].reverse();
  }
  
  return matrix.join().split(',');
}
