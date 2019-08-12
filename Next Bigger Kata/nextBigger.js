/** You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1 
*/


function nextBigger(n){
  let input = parseInt(n)
              .toString()
              .split('');
  let allNums = []

  input.forEach((v,i,a) => {
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
  
  // console.log(nextBigger(277646550)) 
  // console.log(nextBigger(12345)) // 12354
  // console.log(nextBigger(4123)) // 4132
  // console.log(nextBigger(4321)) // -1
  // console.log(nextBigger(531)) //-1
  // console.log(nextBigger(2019)) // 2091
  



  module.exports = nextBigger;

