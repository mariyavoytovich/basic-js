const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const DISCARD_NEXT = "--discard-next";
const DISCARD_PREV = "--discard-prev";

const DOUBLE_NEXT = "--double-next";
const DOUBLE_PREV = "--double-prev";

const COMMANDS = [DISCARD_NEXT, DISCARD_PREV, DOUBLE_NEXT, DOUBLE_PREV];

class TransformIterator {
  _index = -1;

  constructor(arr) {
    this._arr = arr;
  }

  getNext() {
    this._index++;
    return {
      element: this._arr[this._index],
      index: this._index };
  }

  hasMore() {
    return this._index !== this._arr.length - 1;
  }

  getPrev() {
    const prevIndex = this._index -1;
    return {
      element: this._arr[prevIndex],
      index: prevIndex
    };
  }
}

class ArrayTransform {
  _iterator;
  _result;
  _lastDiscarded;

  constructor(arr) {
    this._iterator = new TransformIterator(arr);
    this._result = [];
    this._lastDiscarded = -1;
  }

  transform() {
    while (this._iterator.hasMore()) {
      const { element } = this._iterator.getNext();
      this.isCommand(element) ? this.executeCommand(element) : this.addElement(element);
    }
    return this._result;
  }

  isCommand(element) {
    return typeof element === "string" && COMMANDS.indexOf(element) !== -1;
  }

  addElement(element) {
    this._result.push(element);
  }

  executeCommand(command) {
    switch (command) {
      case DISCARD_NEXT:
        this.discardNext();
        break;
      case DISCARD_PREV:
        this.discardPrev();
        break;
      case DOUBLE_NEXT:
        this.doubleNext();
        break;
      case DOUBLE_PREV:
        this.doublePrev();
        break;
    }
  }

  discardNext() {
    if(!this._iterator.hasMore())
      return;
    const { index } = this._iterator.getNext();
    this._lastDiscarded = index;
  }

  discardPrev() {
    const {element, index} = this._iterator.getPrev();
    if(!element || this._lastDiscarded === index)
      return;

    this._result.pop();
  }

  doubleNext() {
    if (!this._iterator.hasMore()) return;
    const {element} = this._iterator.getNext();
    this._result.push(element, element);
  }

  doublePrev() {
    const {element, index} = this._iterator.getPrev();
    if(!element ||  this._lastDiscarded === index)
      return;

    this._result.push(element);
  }
}

function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  if (arr.length === 0) return [];

  const arrTransform = new ArrayTransform(arr);
  return arrTransform.transform();
}

module.exports = {
  transform,
};
