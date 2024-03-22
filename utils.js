/**
 * Transform a string into an array of Audio elements to play them
 * individually
 * 
 * @param { string } word word to be spelled
 * @param { string } path path where audio files are stored
 * @returns an array of audio elements
 */
function getAudioArray (word, path) {
  const wordSplited = word.toUpperCase().split('')
  return wordSplited.map((letter) => {
    return new Audio(`${path}${letter}.mp3`)
  })
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

/**
 * 
 * @param { number } maxNumber 
 * @returns a pseudo-random number between zero and the maxNumber without including it
 */
export function getRandomNum(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}
