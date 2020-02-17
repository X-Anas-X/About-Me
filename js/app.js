'use strict';
var name = prompt ("Hello there! please enter your name");
alert("Hello " + name);
console.log(name)

var earth = prompt ("Do you think the earth is flat?").toUpperCase();

switch (earth) {
    case 'yes':
        alert("NO! it is round! go read more >:(");
    break;
    case 'no':
        alert("correct answer, I'm proud of you :)");
    break;
    
    default:
        alert("just yes or no please");
    break;
}
console.log(earth);

var movies = prompt ("Do you watch movies?").toUpperCase();

switch (movies) {
    case 'yes':
        alert("you should share with me your favourite gener later!");
    break;
    case 'no':
        alert("now that's sad, you should try watching some!");
    break;
    
    default:
        alert("yes or no questions.. remember??");
    break;
}
console.log(movies);

var quiz = prompt("Do you think i'm a good student?").toUpperCase();
switch (quiz) {
    case 'yes':
        alert("aww thank you, I really am trying my best!");
    break;
    case 'no':
        alert("oof- okay... I guess :(");
    break;
    
    default:
        alert("you can't avoid this question!");
    break;
}
console.log(quiz);

var grade = prompt("Am i getting a full mark on lab-02? (you can use yes/no/maybe)").toUpperCase();
switch (grade) {
    case 'yes':
        alert("well of course, it's me after all B)");
    break;
    case 'no':
        alert("I guess re-submitting is also an option (sorry)");
    break;
    case 'maybe':
        alert("It was supposed to be a yes or no question (~˘▾˘)~");
        break;
    
    default:
        alert("you can't avoid this question!");
    break;
}
console.log(grade);

var early = prompt("Don't you think you should let us go home early today?").toUpperCase();



switch (leave) {
    case 'yes':
        alert("oh wow! tell me during class so i could my pack my stuff ;)");
        break;
    case 'no':
        alert("I knew you wouldn't let me :(");
        default:
            alert("avoiding now, ain't we?");
        break;    
}
console.log(leave);

var pickNumber = prompt("I am thinking of a unmber from 1 to 3 and one of them is wrong").toLowerCase();

switch (pickNumber) {
    case '1':
        alert("correct number!");
    break;
    case '2':
        alert("correct number!");
    break;
    case '3':
        alert("wrong number, you failed :P");
    break;
    default:
        alert("I said between 1 and 3! read the question again >:(");
    break;
}
console.log(pickNumber);

var name = prompt ("Hello there! please enter your name");
alert("Hello " + name);
console.log(name);



