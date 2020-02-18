// dont forget to modify your README.md file to describe your project with the new features you are adding.
'use strict';

var userName = prompt ('Hello there! please enter your name');
alert('Hello ' + userName);
console.log(userName);

var earth = prompt ('Do you think that i beleive the earth is flat?');

switch (earth.toLowerCase()) {
case 'yes':
case 'y':
  alert('NO! it is round! I love and believe in astronomy science >:(');
  break;
case 'no':
case 'n':
  alert ('correct answer, Im proud of you :)');
  break;

default:
  alert('just yes or no please');
  break;
}
console.log(earth);

var movies = prompt ('Do you think I watch movies?');

switch (movies.toLowerCase()) {
case 'yes':
case 'y':
  alert('correct, you should share with me your favourite gener later!');
  break;
case 'no':
case 'n':
  alert('now that is sad, who doesn\'t watch movies even?!');
  break;

default:
  alert('yes or no questions.. remember??');
  break;
}
console.log(movies);

var quiz = prompt('I believe that i\'m a tryhard student, is that right?');

switch (quiz.toUpperCase()) {
case 'YES':
case 'Y':
  alert('aww thank you, I really am trying my best!');
  break;
case 'NO':
case 'N':
  alert('oof- okay... I guess i\'ll try more :(');
  break;

default:
  alert('you can not avoid this question!');
  break;
}
console.log(quiz);

var grade = prompt('i think i\'m getting a full mark on lab-02, do you think that too?' , 'you can use yes/no/maybe');
switch (grade.toUpperCase()) {
case 'YES':
case 'Y':
  alert('well of course, it is me after all B)');
  break;
case 'NO':
case 'N':
  alert('I guess re-submitting is also an option (sorry)');
  break;
case 'MAYBE':
  alert('It was supposed to be a yes or no question, LOL ');
  break;

default:
  alert('you can not avoid this question!');
  break;
}
console.log(grade);

var early = prompt('do you think i stay awake till after midnight?');

switch (early.toLocaleUpperCase()) {
case 'YES':
case 'Y':
  alert('oh wow! that is correct, im a night owl! ;)');
  break;
case 'NO':
case 'N':
  alert('wrong, i stay awake till 4 am or even 5 am every night');
  break;
default:
  alert('avoiding now, ain\'t we?');
  break;
}
console.log(early);

alert('welcome to my page ' + userName);
