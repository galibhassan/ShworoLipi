// Imports 
var inputTextAnalyzer = require('./inputTextAnalyzer');
var Song = require('./song');
var BufferLoader = require('../external/bufferLoader');
var utils = require('./utils');
var noteMapper = require('./noteMapper');
// var notePlayer = require('./notePlayer');

// Globals
var tonic = 'C5';
var singleBitDuration = 1;


window.addEventListener('load', function () {

  // Tonic selection 
  var tonicSelector = document.getElementById("tonic");
  tonicSelector.addEventListener("change", function () {
    tonic = tonicSelector.value;
    console.log(tonic);
  });

  // Things to happen while mainbutton is pressed
  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {

    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var shworolipi = inputTextAnalyzer.generateThings(userInputNotes);
    var song = new Song(shworolipi.noteList, tonic);
    var song_absNotes = song.getAbsoluteNotes();
    var singlifiedBarNoteCount = utils.mergeBarsIntoSingleArr(shworolipi.barsWithNoteCount);
    var timeArr = utils.makeTimeArr(singlifiedBarNoteCount, singleBitDuration);
    var cumulativeTimeArr = utils.makeCumulativeArr(timeArr);









    // playing note
    initSound(song_absNotes);


    function initSound(absNoteArr) {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();
      var noteAudioFiles = noteMapper.absNoteArrToFileArr('instruments', 'guitarAcoustic', absNoteArr, 'ogg');
      console.log(noteAudioFiles);
      var bufferLoader = new BufferLoader(context, noteAudioFiles, onFinishedLoading);
      bufferLoader.load();
    }

    function playSound(in_buffer, time) {
      var source = context.createBufferSource();
      source.buffer = in_buffer;
      source.connect(context.destination);
      source.start(time);
    }

    function onFinishedLoading(bufferList) {
      for (var i = 0; i < bufferList.length; i++) {
        playSound(bufferList[i], i);
      }
    }






    // Analyzed text in the warning div
    var warningDiv = document.getElementById("warningDiv");
    warningDiv.innerText = "Song info: \n" + "Relative Notes: " + shworolipi.noteList + "\n" + "Note Set (Unique): " + shworolipi.noteSet + "\n" + "No. of Bars: " + shworolipi.noOfBars + "\n" + "Note-count in single position: " + shworolipi.barsWithNoteCount + "\n" +
      `Absolute notes in ${tonic} scale: ` + song_absNotes + "\n" +
      `Time-array (note duration): ` + timeArr + "\n" +
      `Cumulative time-array: ` + cumulativeTimeArr;
    // ---------------------------------------------  

  });

});
