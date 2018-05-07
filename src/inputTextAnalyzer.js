/**
 * 
 * @param {String} str a string (a note-list) containing plus sign
 * @returns {Object} count: no. of notes seperated by +, notes: array of notes
 */
function analyseStringWrtPlusSign(str) {
  arr = str.split("+");
  return {
    "count": arr.length,
    "notes": arr
  }
}

/**
 * 
 * @param {Array} bars an array with several string entries. 
 * @returns {Array} trimmedBars: same array, just the the whitespaces from the 
 * beginning and the end in the entries removed.
 */
function trimWhiteSpaceFromBars(bars) {
  var trimmedBars = [];
  for (var i = 0; i < bars.length; i++) {
    trimmedBars.push((bars[i]).trim());
  }
  return trimmedBars;
}

var containsMoreThanOneWhiteSpace = function (str) {
  arr = str.split("  ");
  if (arr.length > 1) {
    return true;
  } else {
    return false;
  }
}

var containsLineFeed = function (str) {
  arr = str.split("\n");
  if (arr.length > 1) {
    return true;
  } else {
    return false;
  }
}


var removeEmptyElementFromArray = function(arr){
  trimmedArr = [];
  for(element of arr){
    if( !(element.includes(" ")) ){
      if(element !== ""){
        trimmedArr.push(element);
      }
    }
  }
  return trimmedArr;
}

var generateThings = function (userInputNotes) {

  if (containsMoreThanOneWhiteSpace(userInputNotes)) {
    console.log("found spaces :( ");
    return "ERROR! :: Your Shworolipi contains two or more white-spaces. Please separate notes with only single spaces"
  } else if (userInputNotes.includes("\n")){
    console.log("line-feeds found :( ");
    return "ERROR! :: Your Shworolipi contains line-feeds. Please don't hit enter while typing the Shworolipi!"
  } else {
    var bars = userInputNotes.split("/");
    var barsWithNoteCount = [];
    var allRelativeNotes = [];

    for (var i = 0; i < bars.length; i++) {
      singleRelativeNotesInBars = bars[i].split(" ");
      barsWithNoteCount.push([]);
      for (var j = 0; j < singleRelativeNotesInBars.length; j++) {
        if (singleRelativeNotesInBars[j] !== "") {

          relativeFractionalNote = analyseStringWrtPlusSign(singleRelativeNotesInBars[j]);
          for (var k = 0; k < (relativeFractionalNote.notes).length; k++) {

            allRelativeNotes.push(( (relativeFractionalNote.notes)[k]).trim());

          }
          (barsWithNoteCount[i]).push(relativeFractionalNote.count);
        }
      }
    }

    allRelativeNotes = removeEmptyElementFromArray(allRelativeNotes);
    var relativeNotesSet = new Set(allRelativeNotes);
    return {
      "noteList": allRelativeNotes,
      "noteSet": Array.from(relativeNotesSet),
      "bars": trimWhiteSpaceFromBars(bars),
      "noOfBars": bars.length,
      "barsWithNoteCount": barsWithNoteCount
    };
  }
}

module.exports = {
  generateThings: generateThings
};
