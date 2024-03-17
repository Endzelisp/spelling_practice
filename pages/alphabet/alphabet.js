import { ALPHABET } from "../../constants.js";
const alphabetWrapper = document.querySelector('.alphabet-wrapper');

const PATH = '../../assets/letters/'

const LETTERS = ALPHABET.map((letter) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('letter');
  btn.textContent = letter;
  const audio = new Audio(`${PATH}${letter}.mp3`);
  btn.append(audio)
  btn.addEventListener('click', () => {
    const audio = btn.querySelector('audio');
    audio.play();
  })
  return btn
})

alphabetWrapper.append(...LETTERS)




