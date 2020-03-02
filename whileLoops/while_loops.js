// // All numbers between -10 & 19
// console.log("Numbers between -10 & 19");
// let num1 = -10;
// while (num1 <= 19) {
//   console.log(num1);
//   num1++;
// };
//
// // All even numbers between 10 & 40
// console.log("Even numbers between 10 & 40");
// let num2 = 10;
// while (num2 <= 40) {
//   if (num2 % 2 === 0) {
//     console.log(num2);
//   }
//   num2++;
// };
//
// // All odd numbers between 300 and 333
// console.log("Odd numbers between 300 & 333");
// let num3 = 300;
// while (num3 <= 333) {
//   if (num3 % 2 === 1) {
//     console.log(num3);
//   }
//   num3++;
// };
//
// // All numbers divisible by 5 AND between 5 & 30
// console.log("Divisible by 5 AND between 5 & 30");
//
// let num4 = 5;
// while (num4 <= 50) {
//   if (num4 % 5 === 0 && num4 % 3 === 0) {
//     console.log(num4);
//   }
//   num4+=1;
// };

// FOR LOOPS

// // // All numbers between -10 & 19
// for (var i = -10; i <= 19; i++) {
//   console.log(i);
// }


// // // All even numbers between 10 & 40
// console.log("All even numbers between 10 & 40");
// for (var i = 10; i <= 40; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// // // All odd numbers between 300 and 333
// console.log("All odd numbers between 300 and 333");
// for (var i = 300; i <= 333; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// // numbers divisible by 5 AND 3 between 5 & 50
// console.log("numbers divisible by 5 AND 3 between 5 & 50");
// for (var i = 5; i <= 50; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}

function factorial(x) {
  if (x === 0 || x === 1) {
    return 1;
  }
  // counter
  let total = x;
  // loop for calculation
  while (x > 1) {
    x--;
    total *= x;
  }
  // return counter
  return total;
}

// KEBAB TO SNAKE
function kebabToSnake(str)  {
  return str.replace(/-/g, '_');
}

// console.log(isEven(48));
// console.log(isEven(47));
// console.log(factorial(10));
// console.log(kebabToSnake("kebabtosnake"));

// print reverse

// let numbers = [1, 2, 3, 4];
// function printReverse(arr) {
//   let count = arr.length - 1;
//
//   while (count >= 0) {
//     console.log(arr[count]);
//     count--;
//   }
// }
//
// console.log(printReverse(numbers));

// isUniform

let array = [1, 10, 9, 12, 2, -3, 5, 47];

function isUniform(arr) {
  let compare = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== compare) {
      return false;
    }
  }
  return true;
}
// console.log(isUniform(array));

// **** sumArray *** //
function sumArray(arr) {
  let total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// console.log(sumArray(array));

//  ********** Find Max *********** //

function max(arr) {
  let currentMax = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > currentMax) {
      currentMax = arr[i];
    }
  }
  return currentMax;
}





// ************** OBJECTS ************** //

let dog = {
  name: "Boris",
  breed: "Huskador",
  personality: "Wee git"
}

console.log(dog.name + " is a " + dog.personality);
