'use strict'

import sudoku from './sudoku'

export function generate(difficulty, unique) {
  return sudoku.generate(difficulty, unique)
}

export function solve(board, reverse) {
  return sudoku.solve(board, reverse)
}

export function get_candidates(board) {
  return sudoku.get_candidates(board)
}

export function board_string_to_grid(board_string) {
  return sudoku.board_string_to_grid(board_string)
}

export function print_board(board) {
  return sudoku.print_board(board)
}

export function validate_board(board) {
  return sudoku.validate_board(board)
}

export default sudoku
