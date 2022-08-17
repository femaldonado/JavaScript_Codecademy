// My current age
const myAge = 31;
//early years value 
let earlyYears = 2; 
earlyYears *= 10.5;
//later years calculation is my current age minus two. 
let laterYears = myAge - 2; 
//multiplication of later year by 4
laterYears = laterYears * 4; 
console.log(laterYears);
console.log(earlyYears);
let myAgeInDogYears = earlyYears + laterYears; 
let myName = "Fey".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
