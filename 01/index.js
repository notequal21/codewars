
let anagrams = (word, words) => {
  let anagram = []
  let match = words.map(
    (item) => {
      if ([...word].sort().join('') == [...item].sort().join('')) {
        anagram.push(item)
      }
    }
  )
  return anagram
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa'] 