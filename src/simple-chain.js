const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    this._chain.push(value);
    return this;
  },

  removeLink(position) {
    if(typeof position !== 'number' || position <= 0 || position > this._chain.length)
    {
      this._chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    const index = position - 1;
    this._chain.splice(index, 1);
    return this;
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const resultChain = this._chain.map(x => `( ${x} )`).join('~~');
    this._chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
