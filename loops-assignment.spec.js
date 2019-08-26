describe(`For loops`, () => {
  describe(`getTriangularNumber(layers: Number): Number`, () => {
    it(`returns 0 by default`, () => {
      expect(getTriangularNumber()).to.eql(0)
    })

    it(`returns 1 when number of layers is 1`, () => {
      expect(getTriangularNumber(1)).to.eql(1)
    })

    it(`returns 3 when number of layers is 2`, () => {
      expect(getTriangularNumber(2)).to.eql(3)
    })

    it(`returns 28 when number of layers is 7`, () => {
      expect(getTriangularNumber(7)).to.eql(28)
    })
  })

  describe(`getCountdown(from: Number): String`, () => {
    it(`returns just 'BOOM!' by default`, () => {
      expect(getCountdown()).to.eql('BOOM!')
    })

    it(`returns '1... BOOM!' when given 1`, () => {
      expect(getCountdown(1)).to.eql('1... BOOM!')
    })

    it(`returns '3... 2... 1... BOOM!' when given 3`, () => {
      expect(getCountdown(3)).to.eql('3... 2... 1... BOOM!')
    })

    it(`returns countdown from 6 when given 6`, () => {
      expect(getCountdown(6)).to.eql(
        '6... 5... 4... 3... 2... 1... BOOM!'
      )
    })
  })

  describe(`getFizzBuzzTotal(n: Number): Number`, () => {
    it(`returns 0 by default`, () => {
      expect(getFizzBuzzTotal()).to.eql(0)
    })

    it(`returns 0 when given non-fizzbuzz numbers (1 and 2)`, () => {
      expect(getFizzBuzzTotal(1)).to.eql(0)
      expect(getFizzBuzzTotal(2)).to.eql(0)
    })

    it(`returns 3 for the first fizzbuzz number (3) and the non-fizzbuzz number after the first fizzbuzz number (4)`, () => {
      expect(getFizzBuzzTotal(3)).to.eql(3)
      expect(getFizzBuzzTotal(4)).to.eql(3)
    })

    it(`returns the total (8 == 3+5) of the second fizzbuzz number (5)`, () => {
      expect(getFizzBuzzTotal(5)).to.eql(8)
    })

    it(`returns the total (3+5+6) of the third fizzbuzz number (6)`, () => {
      expect(getFizzBuzzTotal(6)).to.eql(14)
    })

    it(`returns the total of many fizzbuzz numbers: given 25, expect 168`, () => {
      expect(getFizzBuzzTotal(25)).to.eql(168)
    })
  })

  describe(`getMultipliedSums(nestedArray: Array<Array<Number>>): Number`, () => {
    it(`returns 1 by default`, () => {
      expect(getMultipliedSums([])).to.eql(0)
    })

    it(`returns 1 when nested array contains nothing, [[]]`, () => {
      expect(getMultipliedSums([[]])).to.eql(1)
    })

    it(`returns 1 when nested array contains 1, [[1]]`, () => {
      expect(getMultipliedSums([[1]])).to.eql(1)
    })

    it(`returns 1 when nested array contains [1, 1]`, () => {
      expect(getMultipliedSums([[1, 1, 1]])).to.eql(1)
    })

    it(`returns 4 when nested array contains [[1, 4]]`, () => {
      expect(getMultipliedSums([[1, 4]])).to.eql(4)
    })

    it(`returns 10 when nested array contains [[1, 4], [1, 2, 3]]`, () => {
      expect(getMultipliedSums([[1, 4], [1, 2, 3]])).to.eql(10)
    })

    it(`sums the result of nested arrays: [[1, 1], [1, 1]]`, () => {
      expect(getMultipliedSums([[1, 1], [1, 1]])).to.eql(2)
      expect(getMultipliedSums([[1, 1], [2, 2, 2]])).to.eql(9)
      expect(getMultipliedSums([[3, 3, 3], [4, 4], [1]])).to.eql(44)
    })
  })
})

describe(`While loops`, () => {
  describe(`findMatchingIndex(array: Array<Any>, valueToFind: Any): Number`, () => {
    it(`returns -1 by default`, () => {
      expect(findMatchingIndex([])).to.eql(-1)
    })

    it(`returns 0 when item is at first position`, () => {
      expect(findMatchingIndex(['foo'], 'foo')).to.eql(0)
      expect(findMatchingIndex([9], 9)).to.eql(0)
      expect(findMatchingIndex([321], 321)).to.eql(0)
    })

    it(`returns 2 when item is at third position`, () => {
      expect(findMatchingIndex([0, 1, 'foo'], 'foo')).to.eql(2)
      expect(findMatchingIndex([11, 10, 9], 9)).to.eql(2)
      expect(findMatchingIndex([123, 456, 321, 890, 567], 321)).to.eql(2)
    })
  })

  describe(`getMeanAverage(array: Array<Number>): Number`, () => {
    it(`returns 0 by default`, () => {
      expect(getMeanAverage([])).to.eql(0)
    })

    it(`returns item when an array of 1 item`, () => {
      expect(getMeanAverage([1])).to.eql(1)
      expect(getMeanAverage([3])).to.eql(3)
      expect(getMeanAverage([99])).to.eql(99)
      expect(getMeanAverage([104])).to.eql(104)
    })

    it(`returns mean average when an array of multiple items`, () => {
      expect(getMeanAverage([0, 1])).to.eql(0.5)
      expect(getMeanAverage([1, 1, 1, 1])).to.eql(1)
      expect(getMeanAverage([3, 4, 5, 6, 7])).to.eql(5)
      expect(getMeanAverage([150, 0, 200, 100, 50])).to.eql(100)
    })
  })

  describe(`all(array: Array<Any>, valueToCheck: Any): Boolean`, () => {
    it(`returns false by default`, () => {
      expect(all([])).to.eql(true)
    })

    it(`returns true when item is in the array`, () => {
      expect(all(['foo'], 'foo')).to.eql(true)
      expect(all([9], 9)).to.eql(true)
      expect(all([321], 321)).to.eql(true)
    })

    it(`returns false when some items aren't the same as item to check`, () => {
      expect(all([0, 1, 'foo'], 'foo')).to.eql(false)
      expect(all([11, 10, 9], 9)).to.eql(false)
      expect(all([123, 456, 321], 321)).to.eql(false)
    })

    it(`returns true when all items are the same as item to check`, () => {
      expect(all(['foo', 'foo', 'foo'], 'foo')).to.eql(true)
      expect(all([9, 9, 9], 9)).to.eql(true)
      expect(all([321, 321, 321], 321)).to.eql(true)
    })
  })

  describe(`getCountOfSequence(array: Array<Number>): Number`, () => {
    it(`returns 0 by default`, () => {
      expect(getCountOfSequence([])).to.eql(0)
    })

    it(`returns 1 when one item in array`, () => {
      expect(getCountOfSequence([2])).to.eql(1)
    })

    it(`returns 1 when items not the same`, () => {
      expect(getCountOfSequence([2, 1])).to.eql(1)
    })

    it(`returns count of which are the same in a row`, () => {
      expect(getCountOfSequence([9, 9, 9, 9, 1])).to.eql(4)
    })
  })
})
