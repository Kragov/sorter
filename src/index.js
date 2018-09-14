class Sorter {
  constructor() {
    this.elem = [];
    this.compFunc = function (a, b) {
      return a - b
    }
  }

  add(element) {
    this.elem.push(element)
  }

  at(index) {
    return this.elem[index]
  }

  get length() {
    return this.elem.length
  }

  toArray() {
    return this.elem
  }

  sort(indices) {
      let arrayOfElements = this.elem;
      let sortsVar = [];

      indices.sort()
      indices.forEach(function (element) {
        sortsVar.push(arrayOfElements[element])
      })
      sortsVar.sort(this.compFunc)
      let counter = 0
      indices.forEach(function (element) {
        arrayOfElements[element] = sortsVar[counter];
        counter++
      })
      this.elem = arrayOfElements
  }

  setComparator(compareFunction) {
    this.compFunc = compareFunction
  }
}

module.exports = Sorter;