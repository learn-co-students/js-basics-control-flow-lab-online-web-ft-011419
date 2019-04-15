// Write your code in this file!

function scuberGreetingForFeet(param) {

  if (param < 400) {
    return 'This one is on me!';
  }
  else if (param > 2000 && param < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (param > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(destination) {
  return (destination === "NYC") ? "Ok, sounds good." : response = "No go."
}


function switchOnCharmFromTip(tip) {

  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}
