var tonic = 'C5';
var singleBitDuration = 1;

var inputTextAnalyzer = require('./inputTextAnalyzer');
var Song = require('./song');
var playByOscillator = require('./playByOscillator');
var noteMapper = require('./noteMapper');

window.addEventListener('load', function () {
  var warningDiv = document.getElementById("warningDiv");

  var tonicSelector = document.getElementById("tonic");
  tonicSelector.addEventListener("change", function () {
    tonic = tonicSelector.value;
    console.log(tonic);
  });

  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {
    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var shworolipi = inputTextAnalyzer.generateThings(userInputNotes);

    var song = new Song(shworolipi.noteList, tonic);
    var song_absNotes = song.getAbsoluteNotes();
    
    var singlifiedBarNoteCount = playByOscillator.mergeIntoSingleArr(shworolipi.barsWithNoteCount);
    var timeArr = playByOscillator.makeTimeArr(singlifiedBarNoteCount, singleBitDuration);
    var cumulativeTimeArr = playByOscillator.makeCumulativeArr(timeArr);

    console.log(timeArr);
    console.log(cumulativeTimeArr);
    console.log(song_absNotes);
    COUNT = 0;
//    playByOscillator.playOscNotes(song_absNotes, timeArr);

    //playByOscillator.playSongSound(song_absNotes, timeArr);
    /*playByOscillator.playOsc('C5', 1,2);
    playByOscillator.playOsc('D5', 2,3);
    playByOscillator.playOsc('Ds5', 3,4);
    playByOscillator.playOsc('F5', 4,5);
    playByOscillator.playOsc('G5', 5,6);
    */


   warningDiv.innerText = "Song info: \n" + "Relative Notes: " + shworolipi.noteList + "\n" + "Note Set (Unique): " + shworolipi.noteSet + "\n" + "No. of Bars: " + shworolipi.noOfBars + "\n" + "Note-count in single position: " + shworolipi.barsWithNoteCount + "\n" +
   `Absolute notes in ${tonic} scale: ` + song_absNotes + "\n" +
   `Time-array (note duration): ` + timeArr + "\n" +
   `Cumulative time-array: ` + cumulativeTimeArr; 

  });
});

//str = 'SA RE+SA GA ma / PA DHA+PA+DHA NI SA*';
//song_rel = inputTextAnalyzer.generateThings(str);
//console.log(song_rel);

//song_abs = new Song(song_rel.noteList, 'C5');
//song_absNotes = song_abs.getAbsoluteNotes(); 
//console.log(song_absNotes);

//var singlifiedBarNoteCount = mergeIntoSingleArr(song_rel.barsWithNoteCount);
// var timeArr = makeTimeArr(singlifiedBarNoteCount, 1);
// console.log(timeArr);

//playSongSound(song_absNotes, timeArr);

