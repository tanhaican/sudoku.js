if (typeof sudoku === 'undefined') {
  var sudoku = require('../build/sudoku.cjs.js')
}

if (typeof expect === 'undefined') {
  var expect = require('expect.js')
}

describe('sudoku', function () {
  it('should return a generated puzzle string', function () {
    var string = sudoku.generate('easy')
    expect(string).to.not.be.empty()
    expect(string).to.have.length(81)
  })

  it('should solve a Sudoku puzzle', function () {
    var result = sudoku.solve('.17..69..356194.2..89..71.6.65...273872563419.43...685521......798..53..634...59.')
    expect(result).to.not.be.empty()
    expect(result).to.have.length(81)
  })
})
