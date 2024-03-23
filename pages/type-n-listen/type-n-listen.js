import { spell, getAudioArray, stringWithoutSymbols, capitalize } from "../../utils.js";

const formEl = document.querySelector('#form-wrapper');
const userInputEl = document.querySelector('#user-input');
const wordSpelledDiplay = document.querySelector('#word-spelled');
const PATH = '../../assets/letters/';

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  // clean up the user input
  const rawUserInputValue = userInputEl.value.toLowerCase()
  const cleaneduserInput = stringWithoutSymbols(rawUserInputValue);
  // replace white space with underscore to match the silence audio file
  const readyToUseUserInput = cleaneduserInput.replaceAll(' ', '_')
  if (readyToUseUserInput === '') return
  // restore white spaces to display the phrase
  const outputText = readyToUseUserInput.replaceAll('_', ' ');
  // capitalize the first letter of the string
  wordSpelledDiplay.textContent = capitalize(outputText);
  const spellingAudioArray = getAudioArray(readyToUseUserInput, PATH);
  spell(spellingAudioArray);
})

formEl.addEventListener('reset', () => {
  wordSpelledDiplay.textContent = '';
})
