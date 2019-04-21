// Write your code in this file!

// add 5 to some number given the conditions are met
function addFive(somenumber) {
  let result; 
  if (somenumber > 0) {
    result = somenumber + 5;
  }
  return result;
}

// greeting for feet assuming the conditions are met
function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet > 2000 && feet <= 2500 ) {
    result = "I will gladly take your thirty bucks.";
    } else if (feet > 2500) {
       result = "No can do.";
     }
     return result;
    }
    
  // a ternary check for city given the conditions are met
  function ternaryCheckCity(city) {
    let result;
    city === "NYC" ? result = "Ok, sounds good." : result = "No go.";
    return result;
  }
  
  // switch case given the conditions are met
  function switchOnCharmFromTip(tip) {
    switch(tip) {
      case "generous":
        return "Thank you so much."
        break;
        case "not as generous":
          return "Thank you.";
          default:
          return "Bye.";
    }
  }