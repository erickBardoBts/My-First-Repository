/** You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1 

A number can just switch once to an imidiate position.
*/


function nextBigger(n){
  let input = parseInt(n)
              .toString()
              .split('');
  let allNums = []

  iterator.forEach((v,i,a) => {
    let save = v
      a[i] = a[i+1]
      a[i+1] = save
      allNums.push(Number(a.join('')))
      save = a[i]
      a[i] = a[i+1]
      a[i+1] = save
    });
    allNums.sort((a,b) => b - a)

    if(Math.max(...allNums) === n){
      return -1
    }
    return allNums[allNums.indexOf(n)-1]
  };
  
  // console.log(nextBigger(12345)) // 12354
  // console.log(nextBigger(4123)) // 4132
  // console.log(nextBigger(4321)) // -1
  // console.log(nextBigger(531)) //-1
  // console.log(nextBigger(2019)) // 2091
  
  /** ------------ Trying second version ------------------ */

  function nextBigger2(n){
    let input = parseInt(n)
                .toString()
                .split('');
    // input = n.toString().split('');
    let output;
    if(input[input.length-1] > input[input.length-2]){

      output = switchIt(input.length-1, input.length-2, input)

    }

    else{

      output = switchIt(input.length-2, input.length-3, input)
    
    }
    if(output < input){
      return -1
    }
    else{
      return Number(output.join(''))
    }
/**------------Declaring my swithing function------------------- */
    function switchIt(pos1, pos2, arr){
      let save = arr[pos1]
      arr[pos1] = arr[pos2]
      arr[pos2] = save
      return arr
    };

  };
  
  console.log(nextBigger2("12345.12345")) // 12354
  // console.log(nextBigger2(12354)) // 12534
  // console.log(nextBigger2(2017)) // 2071
  // console.log("--------------------------------")
  // console.log(nextBigger(12345)) // 12354
  // console.log(nextBigger(12354)) // 12534
  // console.log(nextBigger(2017)) // 2071

  module.exports = {
    nextBigger, 
    nextBigger2
  };
