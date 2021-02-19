//insert your pseudocode below
/*

here

start
generate the random number, save it on a variable
prompt the user to inter the guess
compare the input with the random number saved
if not same, prompt the user again accordingly
if yes, print congratulations message to user
finish



*/

//insert your code below

var The_number, Input;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


The_number = mathRandomInt(1, 100);
Input = Number(window.prompt('Guess the number I have:'));
while (Input != The_number) {
  if (Input > The_number) {
    Input = Number(window.prompt('Ohhh... your number is a bit bigger! Try Again'));
  }
  if (Input < The_number) {
    Input = Number(window.prompt('Ohhh... your number is a bit smaller! Try Again'));
  }
}
window.alert('Congratulations! you have got it');
