const testInput = "word"
const test2 = "two words"
// function wave(word){
//   let mexWave = []
//   for(let i = 0; i < word.length; i++){
//     let split = word.split('')
//     if(split[i] === " "){
//       continue
//     }
//     split[i] = split[i].toUpperCase()
//     mexWave.push(split.join(''))
//   }
//   return mexWave
// }
/**--------Cool refactor-----thanks codewars------- */
function wave(str){
  let wave = []
  str.split('').forEach((val,index) => {
    if(/[a-z]/.test(val))
    wave.push(str.slice(0, index) + val.toUpperCase() + str.slice(index + 1)) 
  });
  return wave
};
console.log(wave("erick es maravilloso"))

module.exports = wave;


console.log(/[a-z]/.test("a"))
