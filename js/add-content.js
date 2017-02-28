var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'is it dark out yet?';
} else if (hourNow > 12) {
  greeting = 'Hope you didn\'t just wake up';
} else if(hourNow > 0){
  greeting = 'Make some Coffee';
}
  else {
    greeting = 'Welcome';
  }

  document.write('<h1>' + greeting + '</h1>');
  document.write('KING CRIMSON');
