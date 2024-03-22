import { spell, getAudioArray } from "../../utils.js";

const formEl = document.querySelector('#form-wrapper');
const userInputEl = document.querySelector('#user-input');
const wordSpelledDiplay = document.querySelector('#word-spelled');
const PATH = '../../assets/letters/';

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const userInputValue = userInputEl.value;
  if (userInputValue === '') return
  wordSpelledDiplay.textContent = userInputValue;
  const spellingAudioArray = getAudioArray(userInputValue, PATH);
  spell(spellingAudioArray);
})

formEl.addEventListener('reset', () => {
  wordSpelledDiplay.textContent = '';
})
