import { ALPHABET } from '../../constants.js';

const alphabetWrapper = document.querySelector('.alphabet-wrapper');

const PATH = '../../assets/letters/';

const alphabetWithoutSilence = ALPHABET.filter((letter) => letter !== '_')

function getAlphabetAudioArray(alphabet, path) {
  return alphabet.map((letter) =>  new Audio(`${path}${letter}.mp3`))
}

const alphabetAudioArray = getAlphabetAudioArray(alphabetWithoutSilence, PATH);

const lettersButtonsArray = alphabetAudioArray.map((audioLetter, index) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('letter');
  // Added one to the index to avoid including the underscore
  // symbol that represent the silence
  btn.textContent = ALPHABET[index + 1];

  btn.append(audioLetter);
  btn.addEventListener('click', () => {
    const audio = btn.querySelector('audio');
    audio.play();
  });
  return btn
});

alphabetWrapper.append(...lettersButtonsArray);
