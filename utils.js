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