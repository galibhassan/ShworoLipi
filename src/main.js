var inputTextAnalyzer = require('./inputTextAnalyzer');

window.addEventListener('load', function () {


  var mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("mousedown", function () {
    var userInputNotes = document.getElementById("userInputNotes").innerText;
    var amarGaan = inputTextAnalyzer.generateThings(userInputNotes);
    console.log(amarGaan);
  });
});
