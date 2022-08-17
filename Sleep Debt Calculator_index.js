const getSleepHours = day => {

  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
       return 5
       break;
    case 'thursday':
      return 6
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 10
      break;
    case 'sunday':
      return 9
      break;
    default:
      return "Error!"
  }
  /*if(day === 'Monday') {
    return 8;
  }
  else if(day === 'Tuesday'){
    return 7;
  }
  else if(day === 'Wednesday') {
    return 6;
  }
  else if(day === 'Thursday') {
    return 8;
  }
  else if(day === 'Friday') {
    return 5;
  }
  else if(day === 'Saturday') {
    return 9;
  }
  else if(day === 'Sunday') {
    return 10;
  }
  else {
    return "Error!"
  }*/
};
//console.log(getSleepHours('wednesday'));
/*const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');*/

  const getActualSleepHours = () => 8 + 7 + 5 + 6 + 8 + 10 + 9;

  //console.log(getActualSleepHours());
  /*const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };*/

  const getIdealSleepHours = idealHours => idealHours * 7;

//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours)
  {
    console.log("You've got the perfect amount of sleep!");
  }

  else if(actualSleepHours < idealSleepHours) 
  {
    console.log("You should get an extra " +  (idealSleepHours - actualSleepHours)  + " hours of sleep this week.");
  }
  else if(actualSleepHours > idealSleepHours) 
  {
    console.log("You've got an extra" + (idealSleepHours - actualSleepHours) + "hours of sleep this week.");
  }
  else 
  {
    console.log("Error! Check your code.");
  }
};

calculateSleepDebt();
