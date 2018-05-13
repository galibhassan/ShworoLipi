/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}

// Found in: 
// https://www.html5rocks.com/en/tutorials/webaudio/intro/js/buffer-loader.js

module.exports = BufferLoader;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * A function to find the index of a @param note in the @param allNote array.
 * @param {Array} allNotes The eight-octave array (defined in src/allNotes.js)
 * @param {String} note The note whose position index in allNotes is to search
 */
function findNoteIndexInAllNotes(allNotes, note) {
  for (var i = 0; i < allNotes.length; i++) {
      if (allNotes[i] === note) {
          return i;
          break;
      }
  }
}

var mergeBarsIntoSingleArr = function (doubleArr) {
  var singleArr = [];
  for (var i = 0; i < doubleArr.length; i++) {
    singleArr = singleArr.concat(doubleArr[i]);
  }
  return singleArr;
}


var makeCumulativeArr = function(arr){
  resultArr = [];
  currentSum = 0;
  for(var i=0; i<arr.length; i++){
    currentSum += arr[i];
    resultArr.push(currentSum);
  }
  return resultArr;
}



var makeTimeArr = function (singlifiedBar, beatDuration) {
  timeArr = [];
  for (noteCount of singlifiedBar) {
    for (var i = 0; i < noteCount; i++) {
      entryToPush = Number((beatDuration / noteCount).toFixed(2));
      timeArr.push(entryToPush);
    }
  }
  return timeArr;
}



module.exports = {
  findNoteIndexInAllNotes: findNoteIndexInAllNotes,
  mergeBarsIntoSingleArr: mergeBarsIntoSingleArr, 
  makeCumulativeArr: makeCumulativeArr, 
  makeTimeArr: makeTimeArr
}




/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * 
 * @param {String} str a string (a note-list) containing plus sign
 * @returns {Object} count: no. of notes seperated by +, notes: array of notes
 */
function analyseStringWrtPlusSign(str) {
  arr = str.split("+");
  return {
    "count": arr.length,
    "notes": arr
  }
}

/**
 * 
 * @param {Array} bars an array with several string entries. 
 * @returns {Array} trimmedBars: same array, just the the whitespaces from the 
 * beginning and the end in the entries removed.
 */
function trimWhiteSpaceFromBars(bars) {
  var trimmedBars = [];
  for (var i = 0; i < bars.length; i++) {
    trimmedBars.push((bars[i]).trim());
  }
  return trimmedBars;
}

/**
 * 
 * @param {String} str Checks if more than one white-spaces
 */
var containsMoreThanOneWhiteSpace = function (str) {
  arr = str.split("  ");
  if (arr.length > 1) {
    return true;
  } else {
    return false;
  }
}

var containsLineFeed = function (str) {
  arr = str.split("\n");
  if (arr.length > 1) {
    return true;
  } else {
    return false;
  }
}

var removeEmptyElementFromArray = function (arr) {
  trimmedArr = [];
  for (element of arr) {
    if (!(element.includes(" "))) {
      if (element !== "") {
        trimmedArr.push(element);
      }
    }
  }
  return trimmedArr;
}

var trimEveryNoteOfArr = function (arr) {
  tempArr = []
  for (el of arr) {
    if (el !== "" && el !== "\n") {
      tempArr.push(el);
    }
  }
  return tempArr;
}

var findLineFeedAndJoin = function (str) {
  arr = str.split("\n");
  return arr.join(" ");
}

var generateThings = function (userInputNotes) {
  userInputNotes = findLineFeedAndJoin(userInputNotes);
  var bars = userInputNotes.split("/");
  var barsWithNoteCount = [];
  var allRelativeNotes = [];

  for (var i = 0; i < bars.length; i++) {
    singleRelativeNotesInBars = bars[i].split(" ");
    singleRelativeNotesInBars = trimEveryNoteOfArr(singleRelativeNotesInBars);
    barsWithNoteCount.push([]);
    for (var j = 0; j < singleRelativeNotesInBars.length; j++) {
      relativeFractionalNote = analyseStringWrtPlusSign(singleRelativeNotesInBars[j]);
      for (var k = 0; k < (relativeFractionalNote.notes).length; k++) {
        allRelativeNotes.push(((relativeFractionalNote.notes)[k]).trim());
      }
      (barsWithNoteCount[i]).push(relativeFractionalNote.count);
    }
  }

  allRelativeNotes = removeEmptyElementFromArray(allRelativeNotes);
  var relativeNotesSet = new Set(allRelativeNotes);
  return {
    "noteList": allRelativeNotes,
    "noteSet": Array.from(relativeNotesSet),
    "bars": trimWhiteSpaceFromBars(bars),
    "noOfBars": bars.length,
    "barsWithNoteCount": barsWithNoteCount
  };
}

module.exports = {
  generateThings: generateThings
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var noteMapper = __webpack_require__(0);
var BufferLoader = __webpack_require__(1);
function initSound(absNoteArr, singleBeatDurationInSecond, cumulativeTimeArrayUnshifted) {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
  var noteAudioFiles = noteMapper.absNoteArrToFileArr('instruments', 'guitarAcoustic', absNoteArr, 'ogg');
  var bufferLoader = new BufferLoader(context, noteAudioFiles, onFinishedLoading);
  bufferLoader.load();


  function playSound(in_buffer, time) {
    var source = context.createBufferSource();
    source.buffer = in_buffer;
    source.connect(context.destination);
    source.start(time);
  }

  function onFinishedLoading(bufferList) {
    for (var i = 0; i < bufferList.length; i++) {
      playSound(bufferList[i], context.currentTime + cumulativeTimeArrayUnshifted[i]);
    }
  }



}





module.exports = {
  initSound: initSound
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var allNotes = __webpack_require__(6);
var noteMapper = __webpack_require__(0);
var utils = __webpack_require__(2);
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var allNotes = [
  "C0", "Cs0", "D0", "Ds0", "E0", "F0", "Fs0", "G0", "Gs0", "A0", "Bf0", "B0",
  "C1", "Cs1", "D1", "Ds1", "E1", "F1", "Fs1", "G1", "Gs1", "A1", "Bf1", "B1",
  "C2", "Cs2", "D2", "Ds2", "E2", "F2", "Fs2", "G2", "Gs2", "A2", "Bf2", "B2",
  "C3", "Cs3", "D3", "Ds3", "E3", "F3", "Fs3", "G3", "Gs3", "A3", "Bf3", "B3",
  "C4", "Cs4", "D4", "Ds4", "E4", "F4", "Fs4", "G4", "Gs4", "A4", "Bf4", "B4",
  "C5", "Cs5", "D5", "Ds5", "E5", "F5", "Fs5", "G5", "Gs5", "A5", "Bf5", "B5",
  "C6", "Cs6", "D6", "Ds6", "E6", "F6", "Fs6", "G6", "Gs6", "A6", "Bf6", "B6",
  "C7", "Cs7", "D7", "Ds7", "E7", "F7", "Fs7", "G7", "Gs7", "A7", "Bf7", "B7",
  "-"
]

module.exports = allNotes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Imports 
var inputTextAnalyzer = __webpack_require__(3);
var Song = __webpack_require__(5);
var BufferLoader = __webpack_require__(1);
var utils = __webpack_require__(2);
var noteMapper = __webpack_require__(0);
var notePlayer = __webpack_require__(4);

// Globals
var tonic = 'C5';
var tempo = 160;
var singleBitDurationInSec = 60/tempo;


window.addEventListener('load', function () {

  // Tonic selection 
  var tonicSelector = document.getElementById("tonic");
  tonicSelector.addEventListener("change", function () {
    tonic = tonicSelector.value;
  });

  // Tempo selection 
  var tempoSelector = document.getElementById('tempo');
  tempoSelector.addEventListener("change", function(){
    tempo = tempoSelector.value;
    singleBitDurationInSec = 60/tempo;
  });

  // ui variables
  var userInputNotesDiv = document.getElementById("userInputNotes")
  var noteTranslateDiv = document.getElementById("noteTranslateDiv");


  // Things to happen while mainbutton is pressed
  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {

    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var shworolipi = inputTextAnalyzer.generateThings(userInputNotes);
    var song = new Song(shworolipi.noteList, tonic);
    var song_absNotes = song.getAbsoluteNotes();
    var singlifiedBarNoteCount = utils.mergeBarsIntoSingleArr(shworolipi.barsWithNoteCount);
    var timeArr = utils.makeTimeArr(singlifiedBarNoteCount, singleBitDurationInSec);
    var cumulativeTimeArr = utils.makeCumulativeArr(timeArr);
    //prepending a zero
    cumulativeTimeArr.unshift(0);
  
    // playing note
    notePlayer.initSound(song_absNotes, singleBitDurationInSec, cumulativeTimeArr);


    // Analyzed text in the warning div
    var warningDiv = document.getElementById("warningDiv");
    warningDiv.innerText = "Song info: \n" + "Relative Notes: " + shworolipi.noteList + "\n" + "Note Set (Unique): " + shworolipi.noteSet + "\n" + "No. of Bars: " + shworolipi.noOfBars + "\n" + "Note-count in single position: " + shworolipi.barsWithNoteCount + "\n" +
      `Absolute notes in ${tonic} scale: ` + song_absNotes + "\n" +
      `Time-array (note duration): ` + timeArr + "\n" +
      // `Cumulative time-array: ` + cumulativeTimeArr + "\n" + 
      `Tempo: ${tempo}, Single beat duration (in second): ${singleBitDurationInSec}`;
    // ---------------------------------------------  

  });

  userInputNotesDiv.addEventListener("keydown", printAbsNotesFromRelNotes);
  function printAbsNotesFromRelNotes(){
    var shworolipi = inputTextAnalyzer.generateThings(userInputNotesDiv.innerText);
    var song = new Song(shworolipi.noteList, tonic);
    var song_absNotes = song.getAbsoluteNotes();
    noteTranslateDiv.innerText = song_absNotes;

  }


});


/***/ })
/******/ ]);