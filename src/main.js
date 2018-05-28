// Imports 
var sacredMusic = require('sacred-music');
//var inputTextAnalyzer = require('./inputTextAnalyzer');
//var Song = require('./song');
var BufferLoader = require('../external/bufferLoader');
//var utils = require('./utils');
//var noteMapper = require('./noteMapper');
var notePlayer = require('./notePlayer');

// Globals
var tonic = 'C5';
var tempo = 160;
var singleBitDurationInSec = 60 / tempo;


window.addEventListener('load', function () {

  // Tonic selection 
  var tonicSelector = document.getElementById("tonic");
  tonicSelector.addEventListener("change", function () {
    tonic = tonicSelector.value;
  });

  // Tempo selection 
  var tempoSelector = document.getElementById('tempo');
  tempoSelector.addEventListener("change", function () {
    tempo = tempoSelector.value;
    //    singleBitDurationInSec = 60/tempo;
  });

  // ui variables
  var userInputNotesDiv = document.getElementById("userInputNotes")
  var noteTranslateDiv = document.getElementById("noteTranslateDiv");
  var inputErrorDiv = document.getElementById("inputErrorDiv");


  // Things to happen while mainbutton is pressed
  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {

    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var shworolipi = sacredMusic.getSongDetails(userInputNotes);
    //var song = new Song(shworolipi.noteList, tonic);
    //var song_absNotes = song.getAbsoluteNotes();
    var song_absNotes = sacredMusic.relativeToAbsolute(shworolipi.noteList, tonic)

    var singlifiedBarNoteCount = sacredMusic.utils.mergeBarsIntoSingleArr(shworolipi.barsWithNoteCount);
    var timeArr = sacredMusic.utils.makeTimeArr(singlifiedBarNoteCount, tempo);
    var cumulativeTimeArr = sacredMusic.utils.makeCumulativeArr(timeArr);
    //prepending a zero
    cumulativeTimeArr.unshift(0);

    // playing note
    notePlayer.initSound(song_absNotes, cumulativeTimeArr);


    // Analyzed text in the warning div
    var warningDiv = document.getElementById("warningDiv");
    warningDiv.innerText = "Song info: \n" + "Relative Notes: " + shworolipi.noteList + "\n" + "Note Set (Unique): " + shworolipi.noteSet + "\n" + "No. of Bars: " + shworolipi.noOfBars + "\n" + "Note-count in single position: " + shworolipi.barsWithNoteCount + "\n" +
      `Absolute notes in ${tonic} scale: ` + song_absNotes + "\n" +
      `Time-array (note duration): ` + timeArr + "\n" +
      // `Cumulative time-array: ` + cumulativeTimeArr + "\n" + 
      `Tempo: ${tempo}, Single beat duration (in second): ${60 / tempo}`;
    // ---------------------------------------------  

  });

  userInputNotesDiv.addEventListener("keyup", printAbsNotesFromRelNotes);
  function printAbsNotesFromRelNotes() {
    var shworolipi = sacredMusic.getSongDetails(userInputNotesDiv.innerText);
    var song_absNotes = sacredMusic.relativeToAbsolute(shworolipi.noteList, tonic)

    if(shworolipi.invalidNote !== undefined && userInputNotesDiv.innerText !== ""){
      // i.e if mistake
      userInputNotesDiv.style.borderBottom = '2px solid rgba(210, 69, 37, .7)';
      userInputNotesDiv.style.backgroundColor = 'rgba(210, 69, 37, .1)'
      inputErrorDiv.innerText = `Invalid Eastern Note: \t   "${shworolipi.invalidNote}"`;
    } else {
      // i.e. if NO Mistake
      userInputNotesDiv.style.borderBottom = '2px solid rgba(0, 122, 204,.5)';
      userInputNotesDiv.style.backgroundColor = 'rgb(247, 247, 247)';
      userInputNotesDiv.style.zIndex = "-1000";
      inputErrorDiv.innerText = '';
      noteTranslateDiv.innerText = song_absNotes;
      console.clear();
    }


  }


});
