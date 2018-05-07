var tonic = 'C3';
var inputTextAnalyzer = require('./inputTextAnalyzer');
var Song = require('./song');


window.addEventListener('load', function () {
  var warningDiv = document.getElementById("warningDiv");

  var tonicSelector = document.getElementById("tonic");
  tonicSelector.addEventListener("change", function(){
    tonic = tonicSelector.value;
    console.log(tonic);
  });

  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {
    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var shworolipi = inputTextAnalyzer.generateThings(userInputNotes);
    var song = new Song(shworolipi.noteList, tonic);
    warningDiv.innerHTML = song.getAbsoluteNotes();

    console.log(song.getAbsoluteNotes());
  });
});
