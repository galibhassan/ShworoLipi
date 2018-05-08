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

module.exports = {
  findNoteIndexInAllNotes: findNoteIndexInAllNotes
}

