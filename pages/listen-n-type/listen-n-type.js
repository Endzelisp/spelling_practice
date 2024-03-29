import { COMMON_WORDS } from '../../constants.js';
import { getRandomNum, getAudioArray, spell } from '../../utils.js';

const formEl = document.querySelector('#form');
const validationMessage = document.querySelector('#validation-message');
const userAnswerInput = document.querySelector('#user-answer-input');
const playButton = document.querySelector('#play-btn');
const validateBtn = document.querySelector('#validate-btn');
const nextBtn = document.querySelector('#next-word');

const PATH = '../../assets/letters/';
let currentWord = '';

addEventListener('DOMContentLoaded', () => {
  const randomIndex = getRandomNum(COMMON_WORDS.length);
  currentWord = COMMON_WORDS[randomIndex];

  playButton.addEventListener('click', () => {
    const audioArray = getAudioArray(currentWord, PATH);
    spell(audioArray)
  })
})

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswer = userAnswerInput.value.trim().toLowerCase();
  if (userAnswer === '') return
  const isValid = userAnswer === currentWord;
  if (isValid) validationMessage.textContent = 'Correct!'
  else validationMessage.textContent = 'Try again'
})

formEl.addEventListener('reset', () => {
  userAnswerInput.value = '';
  validationMessage.textContent = '';
  const randomIndex = getRandomNum(COMMON_WORDS.length);
  currentWord = COMMON_WORDS[randomIndex];
})