var audioContext = new AudioContext();
var xhr = new XMLHttpRequest();
var soundToPlay;

xhr.open("GET", '../instruments/guitarAcoustic/C3.ogg')
xhr.responseType = "arraybuffer";
xhr.onload = function () {
  audioContext.decodeAudioData(xhr.response, function (buffer) {
    soundToPlay = buffer;
  });
}
xhr.send();

var bufferSource = audioContext.createBufferSource();
bufferSource.buffer = soundToPlay;
bufferSource.connect(audioContext.destination);
bufferSource.start(audioContext.currentTime);