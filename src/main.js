// Imports 
var sacredMusic = require('sacred-music');
var BufferLoader = require('../external/bufferLoader');
var notePlayer = require('./notePlayer');

// Globals
var tonic = 'C5';
var tempo = 160;
var singleBitDurationInSec = 60 / tempo;
var isPlaying = false;


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
  });

  // ui variables
  var userInputNotesDiv = document.getElementById("userInputNotes")
  var noteTranslateDiv = document.getElementById("noteTranslateDiv");
  var inputErrorDiv = document.getElementById("inputErrorDiv");
  var stopButton = this.document.getElementById("stopButton");

  // Things to happen while mainbutton is pressed
  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {
    isPlaying = true;
    if (isPlaying === true) {
      mainButton.style.opacity = '0.2';
      mainButton.disabled = true;
    } else {
      isPlaying = false;
      makeMainButtonVisible();
    }
    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var shworolipi = sacredMusic.getSongDetails(userInputNotes);
    var song_absNotes = sacredMusic.relativeToAbsolute(shworolipi.noteList, tonic)

    var singlifiedBarNoteCount = sacredMusic.utils.mergeBarsIntoSingleArr(shworolipi.barsWithNoteCount);
    var timeArr = sacredMusic.utils.makeTimeArr(singlifiedBarNoteCount, tempo);
    var cumulativeTimeArr = sacredMusic.utils.makeCumulativeArr(timeArr);
    //prepending a zero
    cumulativeTimeArr.unshift(0);

    // playing note
    var absNoteSet = sacredMusic.relativeToAbsolute(shworolipi.noteSet, tonic);
    notePlayer.initSound(song_absNotes, cumulativeTimeArr, absNoteSet);


    // Analyzed text in the warning div
    var warningDiv = document.getElementById("warningDiv");
    warningDiv.innerText = "Song info: \n" + "Relative Notes: " + shworolipi.noteList + "\n" + "Note Set (Unique): " + shworolipi.noteSet + "\n" + "No. of Bars: " + shworolipi.noOfBars + "\n" + "Note-count in single position: " + shworolipi.barsWithNoteCount + "\n" +
      `Absolute notes in ${tonic} scale: ` + song_absNotes + "\n" +
      `Time-array (note duration): ` + timeArr + "\n" +
      // `Cumulative time-array: ` + cumulativeTimeArr + "\n" + 
      `Tempo: ${tempo}, Single beat duration (in second): ${60 / tempo}`;
    // ---------------------------------------------  

    // retrieving the main (play) button
    setTimeout(
      function () {
        isPlaying = false;
        makeMainButtonVisible();
      },
      1000 * sacredMusic.utils.arraySum(timeArr))
  });

  // stopping the audio forcefully
  stopButton.addEventListener("mousedown", function () {
    if (context) {
      context.close().then(makeMainButtonVisible);
      isPlaying = false;
      context = undefined;
    }
  });

  var makeMainButtonVisible = function () {
    if (isPlaying === false) {
      mainButton.style.opacity = '1';
      mainButton.disabled = false;
    }
  }

  userInputNotesDiv.addEventListener("keyup", printAbsNotesFromRelNotes);
  function printAbsNotesFromRelNotes() {
    var shworolipi = sacredMusic.getSongDetails(userInputNotesDiv.innerText);
    var song_absNotes = sacredMusic.relativeToAbsolute(shworolipi.noteList, tonic)

    if (shworolipi.invalidNote !== undefined && userInputNotesDiv.innerText !== "") {
      // i.e if user does mistake
      userInputNotesDiv.style.borderBottom = '2px solid rgba(210, 69, 37, .7)';
      userInputNotesDiv.style.backgroundColor = 'rgba(210, 69, 37, .1)'
      inputErrorDiv.innerText = `Invalid Eastern Note: \t   "${shworolipi.invalidNote}"`;
    } else {
      // i.e. if user does NO Mistake
      userInputNotesDiv.style.borderBottom = '2px solid rgba(0, 122, 204,.5)';
      userInputNotesDiv.style.backgroundColor = 'rgb(247, 247, 247)';
      userInputNotesDiv.style.zIndex = "-1000";
      inputErrorDiv.innerText = '';
      noteTranslateDiv.innerText = song_absNotes;
      console.clear();
    }
  }


});
