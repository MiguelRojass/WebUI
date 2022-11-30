// The Hashtag Generator
function generateHashtag(str) {
  if (str.length > 140 || str === '') return false
  return '#' + str.split(' ').map(word => {
    console.log(word)
    word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
}

console.log(generateHashtag(" Hello there thanks for trying my Kata")) // Output: '#HelloThereThanksForTryingMyKata'
console.log(generateHashtag("    Hello     World   ")) // Output: '#HelloWorld'
console.log(generateHashtag("")) // Output: False 