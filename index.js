// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400){
    return "This one is on me!";
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  let output

  city == "NYC" ? output = 'Ok, sounds good.' : output = 'No go.';
  return output;
}

function switchOnCharmFromTip(amount) {
  switch (amount) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
  }
}
