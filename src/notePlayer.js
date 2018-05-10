var noteMapper = require('./noteMapper');
var BufferLoader = require('../external/bufferLoader');

function initSound(absNoteArr){
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
  var noteAudioFiles =  noteMapper.absNoteArrToFileArr('instruments', 'guitarAcoustic', absNoteArr, 'ogg');
  var bufferLoader = new BufferLoader(context, noteAudioFiles, onFinishedLoading);
  bufferLoader.load();
}

function playSound(in_buffer, time) {
  var source = context.createBufferSource();
  source.buffer = in_buffer;
  source.connect(context.destination);
  source.start(time);
}

function onFinishedLoading(bufferList){
  for (var i=0; i<bufferList.length; i++){
    playSound(bufferList[i], i);
  }
}

module.exports = {
  initSound: initSound
}