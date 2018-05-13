var noteMapper = require('./noteMapper');
var BufferLoader = require('../external/bufferLoader');
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