<?php Header("Cache-Control: max-age=1, must-revalidate"); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./temporary.css">
  <title>Shworolipika</title>
</head>

<body>
  <div class="sideBar scroll4">
    <div class="shworolipiRules">
      <h4>Rules</h4>
      <hr>
      <br> Notes can be written as follows:
      <br>
      <br>
      <b> The Middle Octave </b>(মধ্যসপ্তক):
      <br> সা ঋ রে জ্ঞা গা মা হ্মা পা দা ধা ণী নি
      <br> or
      <br> SA re RE ga GA ma MA PA da DHA ni NI
      <br>
      <br>
      <br>
      <b> The Lower Octave </b> (মন্দ্রসপ্তক):
      <br> Just put an underscore (
      <b>_</b> ) after the note specifier. For example, সা_ রে_ SA_ RE_ etc.
      <br> This is because typing a হসন্ত might be painful.
      <br>
      <br>
      <b> The Upper Octave </b> (তারাসপ্তক): Put an asterisk (
      <b>*</b> ) after the note specifier. For example, সা* রে* SA* RE*.
      <br> As you may have guessed, typing a রেফ is not unpainful.
      <br>
      <br>
      <b>Bars or Measures</b>
      Separate each bars (or measures) with a
      <br> backslash (
      <b>/</b> ) sign. For example: সা রে জ্ঞা মা / পা দা ণী সা
      <br> IMPORTANT: Never put a backslash in the beginning or ending of the song. These are just bar separators.
      <br>
      <br>
      <b>Rest (Silence)</b> Rests are denoted by a hyphen or a minus sign (
      <b>-</b> ).
      <br>
      <br>
      <br>
      <b>Note Position</b> Each note position should be seperated by at least one space (spacebar) or a line-feed (enter or
      return key).
      <br>
      <br>
      <b>Multiple Notes</b> For multiple notes in a single position, join them with a plus (
      <b>+</b>) sign. For example:
      <br> সা+রে গা+মা পা+ধা+নি সা
    </div>
  </div>


  <div class="mainApp">

    <h1 id="heading">Shworolipika</h1>
    <h4>By Kada Mati</h4>

    <hr>
    <p id="date">

    </p>
    <script>
      date = new Date();
      document.getElementById('date').innerHTML = date + ', © Galib Hassan, Dept. of Physics, University of Cologen, Cologne, Germany.';
    </script>




    <div class="container">

      <div class="tempoSelectorContainer">
        Tempo
        <input type="number" id="tempo" value="160" max="700" min="30">
      </div>


      <div class="titleBar"> Insert your Notes below...
        <div class="tonicSelectorContainer">
          Tonic
          <select name="tonicSelector" id="tonic" class="dropDownSelector">
            <option value="C5">C</option>
            <option value="Bf5">B♭</option>
            <option value="G5">G</option>
            <option value="F5">F♯</option>
          </select>
        </div>
      </div>
      <div id="userInputNotes" class="userInputNotesClass scroll4" contenteditable="true" spellcheck="false">
        <span class="userInputPlaceHolder"> </span>
      </div>
      <div id="inputErrorDiv" class="smallText"> </div>

      <button id="mainButton" class="button">Play!</button>
      <button id="stopButton" class="button"> Stop! </button>
    </div>



    <div id="noteTranslateDiv" class="infoDiv smallText scroll4"> Your notes translate here </div>
    <div id="warningDiv" class="infoDiv smallText scroll4"> Analysis</div>

    <p id="devMessage">
      This software is still in development phase and making me distracted from all the worldly works that I should prioritize.
      I will finish it someday and remove this message. But till then, please don't expect it to be perfect! Also, feel free
      to suggest anytime:
      <em>galib.hassan.0@gmail.com</em>
    </p>
  </div>

  <script src="./bundle.js"></script>
</body>

</html>