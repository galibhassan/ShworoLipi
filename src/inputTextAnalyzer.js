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

/**
 * 
 * @param {String} str Checks if more than one white-spaces
 */
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

var removeEmptyElementFromArray = function (arr) {
  trimmedArr = [];
  for (element of arr) {
    if (!(element.includes(" "))) {
      if (element !== "") {
        trimmedArr.push(element);
      }
    }
  }
  return trimmedArr;
}

var trimEveryNoteOfArr = function (arr) {
  tempArr = []
  for (el of arr) {
    if (el !== "" && el !== "\n") {
      tempArr.push(el);
    }
  }
  return tempArr;
}

var findLineFeedAndJoin = function (str) {
  arr = str.split("\n");
  return arr.join(" ");
}

var generateThings = function (userInputNotes) {
  userInputNotes = findLineFeedAndJoin(userInputNotes);
  var bars = userInputNotes.split("/");
  var barsWithNoteCount = [];
  var allRelativeNotes = [];

  for (var i = 0; i < bars.length; i++) {
    singleRelativeNotesInBars = bars[i].split(" ");
    singleRelativeNotesInBars = trimEveryNoteOfArr(singleRelativeNotesInBars);
    barsWithNoteCount.push([]);
    for (var j = 0; j < singleRelativeNotesInBars.length; j++) {
      relativeFractionalNote = analyseStringWrtPlusSign(singleRelativeNotesInBars[j]);
      for (var k = 0; k < (relativeFractionalNote.notes).length; k++) {
        allRelativeNotes.push(((relativeFractionalNote.notes)[k]).trim());
      }
      (barsWithNoteCount[i]).push(relativeFractionalNote.count);
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

module.exports = {
  generateThings: generateThings
};
