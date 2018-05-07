var inputTextAnalyzer = require('./inputTextAnalyzer');
var validRelativeNotes = [
  '/',
  'SA_', 'সা_',
  're_', 'ঋ_',
  'RE_', 'রে_',
  'ga_', 'জ্ঞা_',
  'GA_', 'গা_',
  'ma_', 'মা_',
  'MA_', 'হ্মা_',
  'PA_', 'pa_',
  'da_', 'দা_',
  'DHA_', 'ধা_',
  'ni_', 'ণি_',
  'NI_', 'না_',
  
  'SA', 'সা',
  're', 'ঋ',
  'RE', 'রে',
  'ga', 'জ্ঞা',
  'GA', 'গা',
  'ma', 'মা',
  'MA', 'হ্মা',
  'PA', 'pa',
  'da', 'দা',
  'DHA', 'ধা',
  'ni', 'ণি',
  'NI', 'না',
]

var userInputNotes = document.getElementById("userInputNotes");
userInputNotes.addEventListener('keyup', checkShworolipiValidity);

function checkShworolipiValidity(event) {
  var currentNoteSet = inputTextAnalyzer.generateThings(userInputNotes.innerText).noteSet;  
  console.log(currentNoteSet);
}