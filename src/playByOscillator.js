var Song = require('./song');
var inputTextAnalyzer = require('./inputTextAnalyzer');
var noteMapper = require('./noteMapper');


playOsc = function (note, fromTime, ToTime) {
  var startTime = fromTime;
  var duration = ToTime;
  var audioContext = new AudioContext();
  var osc = audioContext.createOscillator();
  osc.frequency.value = noteMapper.noteToFreq(note);
  osc.connect(audioContext.destination);
  osc.start(audioContext.currentTime + startTime);
  osc.stop(audioContext.currentTime + duration);
}

/*
playOsc('sa', 0,1);
playOsc('re', 1,2);
playOsc('GA', 2,3);
playOsc('ma', 3,4);
playOsc('pa', 4,5);
playOsc('da', 5,6);
*/

function playOscNotes(noteList, cumulativeTimeArr){
  var audioContext = new AudioContext();
  var osc = audioContext.createOscillator();
  osc.frequency.value = noteMapper.noteToFreq(noteList[COUNT]);
  osc.connect(audioContext.destination);
  osc.start(audioContext.currentTime);
  osc.onended = playOscNotes(noteList, cumulativeTimeArr);
  osc.stop(audioContext.currentTime + cumulativeTimeArr[COUNT]);
  COUNT++;
  console.log("count: " +COUNT)
}




/*
    var osc;
    var audioContext;
    note = song_absNotes[0];
    var audioContext = new AudioContext();
    var osc = audioContext.createOscillator();
    osc.frequency.value = noteMapper.noteToFreq(note);
    osc.connect(audioContext.destination);
    osc.start(audioContext.currentTime);

    count = 2;
    var changeTheNote = function (noteList, cumulativeTimeArr, osc) {
      console.log(count);
      if (audioContext.currentTime > cumulativeTimeArr[count - 1] && audioContext.currentTime < cumulativeTimeArr[count]) {
        osc.frequency.value = noteMapper.noteToFreq(noteList[count]);
        count++;
        console.log('changethenote called');
      }
    }
    setInterval(changeTheNote(song_absNotes, cumulativeTimeArr, osc), 100);
*/



var playSongSound = function (noteList, timeArr) {
  count = 0;
  for (var i = 0; i < noteList.length; i++) {
    console.log("from: "+ count );
    playOsc(noteList[i], count, timeArr[i]);
    count = count + timeArr[i];
    console.log("to: " + count );
    console.log("note: " + noteList[i]);
    console.log("");

  }
}

module.exports = {
  playSongSound: playSongSound, 
  playOsc: playOsc, 
  playOscNotes: playOscNotes
}