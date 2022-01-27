/*
 * Expose the function on the window object
 */
import sudoku from './index'

//use amd or just through the window object.
if (window) {
  if (typeof window.define == 'function' && window.define.amd) {
    window.define('sudoku', function () {
      return sudoku
    })
  } else if (window) {
    window.sudoku = sudoku
  }
}
