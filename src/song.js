var allNotes = require('./allNotes');
var noteMapper = require('./noteMapper');
var utils = require('./utils');
/**
 * 
 * @param {Array} relativeNotes Relative notes of the song, e.g. ['SA', 'RE', 'Ga', 'মা', 'পা', 'ধা'], etc.
 * @param {String} tonic The tonic for the scale. Must be one of the elements of allNotes array in src/allNotes.js
 */
var song = function (relativeNotes, tonic) {
  this.tonic = tonic;
  this.relativeNotes = relativeNotes;
}

/**
 * @constructor
 */
song.prototype.constructor = song;

/**
 * @returns {Integer} The length of the song
 */
song.prototype.length = function () {
  return (this.relativeNotes).length;
}

song.prototype.getNumberedNotes = function () {
  return noteMapper.relativeNoteArrToNumArr(this.relativeNotes);
}

song.prototype.getAbsoluteNotes = function () {
  requiredPositionsInAllNotes = [];
  tonicPosition = utils.findNoteIndexInAllNotes(allNotes, this.tonic);
  numberedNotes = this.getNumberedNotes();
  for (var i = 0; i < (this.relativeNotes).length; i++) {
    if (numberedNotes[i] === '-') {
      // '-' is placed as 96th element in /src/allNotes.js 
      requiredPositionsInAllNotes.push(96);
    } else {
      requiredPositionsInAllNotes.push(tonicPosition + numberedNotes[i] - 1);
    }
  }
  absoluteNotes = [];
  for (var i = 0; i < requiredPositionsInAllNotes.length; i++) {
    absoluteNotes.push(allNotes[requiredPositionsInAllNotes[i]]);
  }
  return absoluteNotes;
}

module.exports = song;