let raceNumber = Math.floor(Math.random() * 1000);

let nums = []

for (let i = 0; i < 1000; ++i) {
nums.push(i)
}

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

console.log(shuffle(nums))



// let early = true;

// let age = 18;

// if(early && age > 18) {
//   raceNumber += 1000;
// }
// else if(!early && age > 18) {
//   raceNumber += 1000;
// }

// if(early && age > 18) {
//   console.log(`Race starts at 9:30 am, your race number is ${raceNumber}.`);
// }
// else if(!early && age > 18) {
//   console.log(`Late adults run at 11:00 am, your race number is ${raceNumber}.`)
// }
// else if(age < 18) {
//   console.log(`Race starts at 12:30 pm, your race number is ${raceNumber}.`)
// }
// else{
//   console.log('Please approach the registration desk, thank you!');
// }
