/**
 * Take a string as a parameter and an object containing the alphabet 
 * where each key is a letter and the value is an audio object
 * 
 * @param { string } word 
 * @param { {HTMLAudioElement} } alphabetAudioObject 
 * @returns {[HTMLAudioElement]} An array with the audio of each corresponding
 * letter
 */
export function getAudioArray(word, alphabetAudioObject) {
  return word.split('').map((letter) => alphabetAudioObject[letter]);
}

/**
 * Plays each audio element inside of the array
 * one after the other
 * 
 * @param { [HTMLAudioElement] } audioArray 
 */
export function spell(audioArray) {
  audioArray[0].play()
  for (let i = 1; i < audioArray.length; i++) {
    audioArray[i - 1].addEventListener('ended', () => {
      audioArray[i].play()
    },{once: true})
  }
}

export function getAlphabetAudioArray(alphabet, path) {
  return alphabet.map((letter) =>  new Audio(`${path}${letter}.mp3`))
}