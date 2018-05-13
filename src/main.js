// Imports 
var inputTextAnalyzer = require('./inputTextAnalyzer');
var Song = require('./song');
var BufferLoader = require('../external/bufferLoader');
var utils = require('./utils');
var noteMapper = require('./noteMapper');
var notePlayer = require('./notePlayer');

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
