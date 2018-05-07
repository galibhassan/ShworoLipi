var noteToNum = function (note) {
  switch (note) {
    //rest
    case '-': return '-';
    // Mondro shoptok
    case 'SA_' : case 'সা_': return 1 - 12;
    case 're_' : case 'ঋ_': return 2 - 12;
    case 'RE_' : case 'রে_': case 'রা_': return 3 - 12;
    case 'ga_' : case 'জ্ঞা_': return 4 - 12;
    case 'GA_' : case 'গা_': return 5 - 12;
    case 'ma_' : case 'মা_': return 6 - 12;
    case 'MA_' : case 'হ্মা_': return 7 - 12;
    case 'PA_': case 'pa_': case 'পা_': return 8 - 12;
    case 'da_' : case 'দা_': return 9 - 12;
    case 'DHA_' : case 'ধা_': return 10 - 12;
    case 'ni_' : case 'ণি_': case 'ণা_': case 'ণী_': return 11 - 12;
    case 'NI_' : case 'না_': case 'নি_': case 'নী_': return 12 - 12;

    // Moddho Shoptok
    case 'SA': case 'সা': return 1;
    case 're': case 'ঋ': return 2;
    case 'RE': case 'রে': case 'রা': return 3;
    case 'ga': case 'জ্ঞা': return 4;
    case 'GA': case 'গা': return 5;
    case 'ma': case 'মা': return 6;
    case 'MA': case 'হ্মা': return 7;
    case 'PA': case 'pa': case 'পা': return 8;
    case 'da': case 'দা': return 9;
    case 'DHA': case 'ধা': return 10;
    case 'ni': case 'ণি': case 'ণা': case 'ণী': return 11;
    case 'NI': case 'না': case 'নি': case 'নী': return 12;

    // Uccho shoptok
    case 'SA*': case 'সা*': return 1 + 12;
    case 're*': case 'ঋ*': return 2 + 12;
    case 'RE*': case 'রে*': case 'রা*': return 3 + 12;
    case 'ga*': case 'জ্ঞা*': return 4 + 12;
    case 'GA*': case 'গা*': return 5 + 12;
    case 'ma*': case 'মা*': return 6 + 12;
    case 'MA*': case 'হ্মা*': return 7 + 12;
    case 'PA*': case 'pa*': case 'পা*': return 8 + 12;
    case 'da*': case 'দা*': return 9 + 12;
    case 'DHA*': case 'ধা*': return 10 + 12;
    case 'ni*': case 'ণি*': case 'ণা*': case 'ণী*': return 11 + 12;
    case 'NI*': case 'না*': case 'নি*': case 'নী*': return 12 + 12;

    default: return "InvalidNote";
  }
}

relativeNoteArrToNumArr = function (noteArr) {
  numArr = [];
  for (var i = 0; i < noteArr.length; i++) {
    numArr.push(noteToNum(noteArr[i]));
  }
  return numArr;
}

module.exports = {
  noteToNum: noteToNum, 
  relativeNoteArrToNumArr: relativeNoteArrToNumArr
}


arrr =  [ 'রে', 'গা', '-',  'রে', 'GA' ]
console.log(relativeNoteArrToNumArr(arrr));
