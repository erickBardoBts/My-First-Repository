// function wave(word){
//   let mexWave = []
//   for(let i = 0; i < word.length; i++){
//     let split = word.split('')
//     if(split[i] === " "){ //No contempla si en vez de espacio es cualquier otro caracter.
//       continue
//     }
//     split[i] = split[i].toUpperCase()
//     mexWave.push(split.join(''))
//   }
//   return mexWave
// }
console.log(wave("ole putoooooo!!"))
/**--------Cool refactor-----thanks codewars------- */
function wave(str){
  let wave = []
  str.split('').forEach((val,index) => {
    if(/[a-z]/.test(val))
    wave.push(str.slice(0, index) + val.toUpperCase() + str.slice(index + 1)) 
  });
  return wave
};

module.exports = wave;


