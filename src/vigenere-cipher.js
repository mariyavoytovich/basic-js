const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  _alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(revers) {
    this._revers = revers;
    this._square = [];
  }

  generateSquare() {
    for (let i = 0; i < this._alphabet.length; i++) {
      let row = this._alphabet.slice(i);
      row += this._alphabet.slice(0, i);
      this._square.push(row);
    }
  }
  getSquare() {
    return this._square;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    const messageUp = message.toUpperCase();
    const keyUp = key.toUpperCase();

    let encryptMessage = "";
    const newKey = this.repeatString(keyUp, messageUp);
    this.generateSquare();
    for (let it = 0; it < messageUp.length; it++) {
      if (/[A-Z]/.test(messageUp[it])) {
        let i = this._alphabet.indexOf(messageUp[it]);
        let j = this._alphabet.indexOf(newKey[it]);
        encryptMessage += this._square[i][j];
      } else {
        encryptMessage += messageUp[it];
      }
    }
    return this._revers === false ? [...encryptMessage].reverse().join('') : encryptMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    const keyUp = key.toUpperCase();

    let decryptMessage = "";
    const newKey = this.repeatString(keyUp, encryptedMessage);
    this.generateSquare();
    for (let it = 0; it < encryptedMessage.length; it++) {
      if (/[A-Z]/.test(encryptedMessage[it])) {
        let i = this._alphabet.indexOf(newKey[it]);
        let j = this._square[i].indexOf(encryptedMessage[it]);
        decryptMessage += this._alphabet[j];
      } else {
        decryptMessage += encryptedMessage[it];
      }
    }
    return this._revers === false ? [...decryptMessage].reverse().join('') : decryptMessage;
  }

  repeatString(firstString, secondString) {
    let resultString = "";
    const firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
      if (it % firstStringLength === 0) {
        it = 0;
      }
      const char = secondString[i];
      if (/[A-Z]/.test(char)) {
        resultString += firstString[it];
        it++;
      } else {
        resultString += char;
      }
    }
    return resultString;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
