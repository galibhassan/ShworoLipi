var noteMapper = require('./noteMapper');
var allNotes = require('./allNotes');


function findNoteIndexInAllNotes(allNotes, note) {
    console.log("debug: called");
    for (var i = 0; i < allNotes.length; i++) {
        if (allNotes[i] === note) {
            return i;
            break;
        }
    }
}

function getRequiredNotesFromSong(song, allNotes) {
    requiredPositionInAllNotes = [];
    tonicPosition = findNoteIndexInAllNotes(allNotes, song.tonic);
    for (var i = 0; i < (song.notes).length; i++) {
        requiredPositionInAllNotes.push(tonicPosition + (song.notes)[i] - 1);
    }
    requiredNotes = [];
    for (var i = 0; i < requiredPositionInAllNotes.length; i++) {
        requiredNotes.push(allNotes[requiredPositionInAllNotes[i]]);
    }
    return requiredNotes;
}


var song = {
    "tonic": undefined,
    "notes": []
}

// ---------------
song.notes = [1, 3, 5, 6];
song.tonic = "Cs3";


console.log(getRequiredNotesFromSong(song, allNotes));