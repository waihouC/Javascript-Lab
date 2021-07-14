// Fruits example
let fruits = ['apples', 'bananas', 'oranges', 'durians', 'pears'];
let foundIndex = -1;
let lookingFor = 'durians';
for (let i=0; i < fruits.length; ++i) {
 if (fruits[i]==lookingFor) {
   foundIndex = i;
   break;
 }
}
//alert(foundIndex);



// accumalator technique t = t+i;
// sum example
let numbers = [150, 101, 40, 105, -130, 119];
let total = 0;
for (let n of numbers) {
 total = total + n;
}
console.log(`Total is: ${total}`);

// Find the average of all the numbers in a list
let average = total /numbers.length;
console.log(`Average is: ${average.toFixed(2)}`);

// Find the smallest number in a list
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (smallest > numbers[i]) {
    smallest = numbers[i];
  }
}
console.log(`Smallest number is: ${smallest}`);

// Find the difference between the smallest and largest numbers in a list
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (smallest > numbers[i]) {
    smallest = numbers[i];
  }

  if (largest < numbers[i]) {
    largest = numbers[i];
  }
}
let difference = largest - smallest;
console.log(`Difference is: ${difference}`);

// Count how many negative numbers there are in the list
let count = 0;
for (let n of numbers) {
 if (n < 0) {
   count++;
 }
}
console.log(`Number of negatives: ${count}`);

// king of the hill
/**
 * Each singer will sing once in order
 * The audience will vote for the singer
 * The next singer will sing and the audience will vote
 * The winner stays, the loser exits the competition
 * Continues till there is only one winner
 */
const singers = {
  "Mary": 5,
  "Tom": 1,
  "Dave": 10,
  "Sam": 6,
  "June": 2
}
console.log(singers);

let winner;
for (let [key,value] of Object.entries(singers)) {
  console.log(`Key: ${key}, Value: ${value}`);
  if (!winner) {
    winner = key;
  }
  else {
    if (value > singers[winner]) {
      winner = key;
    }
  }
}
console.log(`Winner is: ${winner}`);