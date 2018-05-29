var fileMapper = require('./fileMapper');
var sacredMusic = require('sacred-music');

var BufferLoader = require('../external/bufferLoader');
function initSound(absNoteArr, cumulativeTimeArrayUnshifted, absNoteSet) {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  var noteAudioFiles = fileMapper.absNoteArrToFileArr('instruments', 'guitarAcoustic', absNoteSet, 'ogg');
  var bufferLoader = new BufferLoader(context, noteAudioFiles, onFinishedLoading);
  bufferLoader.load();


  function playSound(in_buffer, time) {
    var source = context.createBufferSource();
    source.buffer = in_buffer;
    source.connect(context.destination);
    source.start(time);
  }

  function onFinishedLoading(bufferList) {
    var comparedPosArr = sacredMusic.utils.getComparedPositionArr(absNoteArr, absNoteSet);
    for (let i = 0; i < comparedPosArr.length; i++) {
      playSound(bufferList[ comparedPosArr[i] ], context.currentTime + cumulativeTimeArrayUnshifted[i]);
    }
  }
}

module.exports = {
  initSound: initSound
}