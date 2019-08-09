/** Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450 */

 function score(dice){
    const currency = {} // Register of throws.
    let score = 0
    for(let i = 1; i <= 6; i++){ 
      currency[i] = 0
    };

    dice.forEach(num => {
    switch(num){
      case 1:
        currency["1"]++
      break;
      case 2:
        currency["2"]++
      break;
      case 3:
        currency["3"]++
      break;
      case 4:
        currency["4"]++
      break;
      case 5:
        currency["5"]++
      break;
      case 6:
        currency["6"]++
      break;
    }; //currency designated.
     });
/** -------------------------Making the score code-------------------- */
    for(let i = 1; i <= 6; i++){
      if(i === 1){
        if(currency[''+i] === 3){
          score+=1000
        }
        else if(currency[''+i] > 3){
          score += 1000 + (100 * (currency[''+i]-3))
        }
        else if(currency[''+i] < 3){
          score += 100 * currency[''+i]
        }
      }
      if(i === 5){
        if(currency[''+i] === 3){
          score += 500
        }
        else if(currency[''+i] > 3){
          score += 500 + (50 * (currency[''+i]-3))
        }
        else if(currency[''+i] <= 2){
          score += 50 * currency[''+i]
        }
      } 
     };
     return score
};
// console.log(score([1,1,1,1,1]))
// console.log(score([5,5,5,5,5]))
console.log(score([1,1,1,2,3]))
// console.log(score([2,4,4,5,4]))
// console.log(score([3,3,3,5,1]))
module.exports = score;
// function simon(){
//   let args = [...arguments]
  
//   return args
// }
// console.log(simon([5],[6],[10],[1]))