import { ALPHABET } from '../../constants.js';
import { getAlphabetAudioArray } from '../../utils.js';

const alphabetWrapper = document.querySelector('.alphabet-wrapper');

const PATH = '../../assets/letters/';

const alphabetAudioArray = getAlphabetAudioArray(ALPHABET, PATH);

const lettersButtonsArray = alphabetAudioArray.map((audioLetter, index) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('letter');
  btn.textContent = ALPHABET[index];

  btn.append(audioLetter);
  btn.addEventListener('click', () => {
    const audio = btn.querySelector('audio');
    audio.play();
  });
  return btn
});

alphabetWrapper.append(...lettersButtonsArray);




