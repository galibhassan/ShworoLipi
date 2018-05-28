/**
 * 
 * @param {String} instrumentFolder The folder where all the instruments live
 * @param {String} instrumentName The name of the instrument
 * @param {String} note a Single note Absolute note (C3, Cs3, etc.)
 * @param {String} fileFormat The file format of the instrument stored (default: .ogg)
 * @returns {String} a file path to the note's audio file.
 */
var absNoteToFile = function (instrumentFolder, instrumentName, note, fileFormat) {
  var noOfOctaveAvailabe = 8;
  if (note === '-') {
    return `../${instrumentFolder}/${instrumentName}/-.${fileFormat}`;
  } else {
    for (var i = 0; i < noOfOctaveAvailabe; i++) {
      switch (note) {
        case `C${i}`: return `../${instrumentFolder}/${instrumentName}/C${i}.${fileFormat}`;
        case `Cs${i}`: return `../${instrumentFolder}/${instrumentName}/Cs${i}.${fileFormat}`;
        case `D${i}`: return `../${instrumentFolder}/${instrumentName}/D${i}.${fileFormat}`;
        case `Ds${i}`: return `../${instrumentFolder}/${instrumentName}/Ds${i}.${fileFormat}`;
        case `E${i}`: return `../${instrumentFolder}/${instrumentName}/E${i}.${fileFormat}`;
        case `F${i}`: return `../${instrumentFolder}/${instrumentName}/F${i}.${fileFormat}`;
        case `Fs${i}`: return `../${instrumentFolder}/${instrumentName}/Fs${i}.${fileFormat}`;
        case `G${i}`: return `../${instrumentFolder}/${instrumentName}/G${i}.${fileFormat}`;
        case `Gs${i}`: return `../${instrumentFolder}/${instrumentName}/Gs${i}.${fileFormat}`;
        case `A${i}`: return `../${instrumentFolder}/${instrumentName}/A${i}.${fileFormat}`;
        case `Bf${i}`: return `../${instrumentFolder}/${instrumentName}/Bf${i}.${fileFormat}`;
        case `B${i}`: return `../${instrumentFolder}/${instrumentName}/B${i}.${fileFormat}`;
      }
    }
  }
}

/**
 * A function which maps an array of absolute notes into their audio file path. 
 * @param {String} instrumentFolder The folder where all the instruments live
 * @param {String} instrumentName The name of the instrument
 * @param {String} noteArr an Array of Absolute notes, for example: ['C3', 'Ds3'], etc.
 * @param {String} fileFormat The file format of the instrument stored (default: .ogg)
 * @returns {String} a file path to the note's audio file.
 */
var absNoteArrToFileArr = function (instrumentFolder, instrumentName, noteArr, fileFormat) {
  fileNameArr = [];
  fileFormat = fileFormat || 'ogg';
  for (var i = 0; i < noteArr.length; i++) {
    fileNameArr.push(absNoteToFile(instrumentFolder, instrumentName, noteArr[i], fileFormat));
  }
  return fileNameArr;
}

module.exports = {
  absNoteToFile:absNoteToFile,
  absNoteArrToFileArr: absNoteArrToFileArr
}