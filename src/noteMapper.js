var noteToNum = function (note) {
  switch (note) {
    //rest
    case '-': return '-';
    // Mondro shoptok
    case 'SA_': case 'সা_': return 1 - 12;
    case 're_': case 'ঋ_': return 2 - 12;
    case 'RE_': case 'রে_': case 'রা_': return 3 - 12;
    case 'ga_': case 'জ্ঞা_': return 4 - 12;
    case 'GA_': case 'গা_': return 5 - 12;
    case 'ma_': case 'মা_': return 6 - 12;
    case 'MA_': case 'হ্মা_': return 7 - 12;
    case 'PA_': case 'pa_': case 'পা_': return 8 - 12;
    case 'da_': case 'দা_': return 9 - 12;
    case 'DHA_': case 'ধা_': return 10 - 12;
    case 'ni_': case 'ণি_': case 'ণা_': case 'ণী_': return 11 - 12;
    case 'NI_': case 'না_': case 'নি_': case 'নী_': return 12 - 12;

    // Moddho Shoptok
    case 'SA': case 'সা': return 1;
    case 're': case 'ঋ': return 2;
    case 'RE': case 'রে': case 'রা': return 3;
    case 'ga': case 'জ্ঞা': return 4;
    case 'GA': case 'গা': return 5;
    case 'ma': case 'মা': return 6;
    case 'MA': case 'হ্মা': return 7;
    case 'PA': case 'pa': case 'পা': return 8;
    case 'da': case 'দা': return 9;
    case 'DHA': case 'ধা': return 10;
    case 'ni': case 'ণি': case 'ণা': case 'ণী': return 11;
    case 'NI': case 'না': case 'নি': case 'নী': return 12;

    // Uccho shoptok
    case 'SA*': case 'সা*': return 1 + 12;
    case 're*': case 'ঋ*': return 2 + 12;
    case 'RE*': case 'রে*': case 'রা*': return 3 + 12;
    case 'ga*': case 'জ্ঞা*': return 4 + 12;
    case 'GA*': case 'গা*': return 5 + 12;
    case 'ma*': case 'মা*': return 6 + 12;
    case 'MA*': case 'হ্মা*': return 7 + 12;
    case 'PA*': case 'pa*': case 'পা*': return 8 + 12;
    case 'da*': case 'দা*': return 9 + 12;
    case 'DHA*': case 'ধা*': return 10 + 12;
    case 'ni*': case 'ণি*': case 'ণা*': case 'ণী*': return 11 + 12;
    case 'NI*': case 'না*': case 'নি*': case 'নী*': return 12 + 12;

    default: return "InvalidNote";
  }
}

var noteToFreq = function (note) {
  switch (note) {
    case 'C5': return 523.25
    case 'Cs5': return 587.33
    case 'D5': return 554.37
    case 'Ds5': return 622.25
    case 'E5': return 659.25
    case 'F5': return 698.46
    case 'Fs5': return 739.99
    case 'G5': return 783.99
    case 'Gs5': return 830.61
    case 'A5': return 880.00
    case 'Bf5': return 932.33
    case 'B5': return 987.77
    case 'C6': return 1046.50
  }
}
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

relativeNoteArrToNumArr = function (noteArr) {
  numArr = [];
  for (var i = 0; i < noteArr.length; i++) {
    numArr.push(noteToNum(noteArr[i]));
  }
  return numArr;
}

module.exports = {
  noteToNum: noteToNum,
  relativeNoteArrToNumArr: relativeNoteArrToNumArr,
  noteToFreq: noteToFreq,
  absNoteArrToFileArr: absNoteArrToFileArr
}
