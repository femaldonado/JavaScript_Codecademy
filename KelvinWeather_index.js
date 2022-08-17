//Temperature in Kelvin degreess.
const Kelvin = 0;
//Converting Kelvin to celsius.
const celsius = Kelvin - 273;
//Converting celsius to fahrenheit 
let fahrenheit = celsius * (9/5) + 32;
//Using .floor() to round down fahrenheit variable. 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degress Newton.`)

