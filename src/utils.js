/**
 * A function to find the index of a @param note in the @param allNote array.
 * @param {Array} allNotes The eight-octave array (defined in src/allNotes.js)
 * @param {String} note The note whose position index in allNotes is to search
 */
function findNoteIndexInAllNotes(allNotes, note) {
  for (var i = 0; i < allNotes.length; i++) {
      if (allNotes[i] === note) {
          return i;
          break;
      }
  }
}

var mergeBarsIntoSingleArr = function (doubleArr) {
  var singleArr = [];
  for (var i = 0; i < doubleArr.length; i++) {
    singleArr = singleArr.concat(doubleArr[i]);
  }
  return singleArr;
}


var makeCumulativeArr = function(arr){
  resultArr = [];
  currentSum = 0;
  for(var i=0; i<arr.length; i++){
    currentSum += arr[i];
    resultArr.push(currentSum);
  }
  return resultArr;
}



var makeTimeArr = function (singlifiedBar, beatDuration) {
  timeArr = [];
  for (noteCount of singlifiedBar) {
    for (var i = 0; i < noteCount; i++) {
      entryToPush = Number((beatDuration / noteCount).toFixed(2));
      timeArr.push(entryToPush);
    }
  }
  return timeArr;
}



module.exports = {
  findNoteIndexInAllNotes: findNoteIndexInAllNotes,
  mergeBarsIntoSingleArr: mergeBarsIntoSingleArr, 
  makeCumulativeArr: makeCumulativeArr, 
  makeTimeArr: makeTimeArr
}


