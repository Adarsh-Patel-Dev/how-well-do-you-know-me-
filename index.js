const chalk=require("chalk");


var readlineSync = require("readline-sync");

var score = 0;

function print(data){
  console.log(data);
}

print(chalk.magenta.bgWhite.bold("______________________________"));
print(chalk.black.green.bold("  How well do you know me? 🤨  "));
print(chalk.magenta.bgWhite.bold("______________________________"));
print("\n");

var highScore = [{
  name: "Sachin",
  score: 70,
},
{
  name: "Aayush",
  score: 60
}]



var questions = [{
  question: "1. What is my name?\n\n1.Adarsh Patel\n2.Boring Bot\n3.Tony stark\n\n",
  answer: "1"
},
{
  question: "2.What nickname did i have?\n\n1.HONEY\n2.HAPPY\n3.HARRY\n\n",
  answer: "2"
},
{
  question:"3. What is my dream car?\n\n1.BMW i8\n2.Audi R8\n3.Lamborghini myAventador\n\n",
  answer: "3"
},
{
  question: "4. Who is my hero?\n\n1.Iron Man\n2.Batman\n3.My father\n\n",
  answer: "3"
  
},
{
  question: "5. What's my favorite web series?\n\n1.Game of Thrones\n2.13 Reasons Why\n3.Breaking bad\n\n",
  answer: "2"
},
{
  question: "6. What was my favorite subject in school?\n\n1.English\n2.Science\n3.Maths\n\n",
  answer: "3"
},
{
  question: "7. What's my favorite fast food chain?\n\n1.Subway\n2.Burgar King\n3.Mc Donalds\n\n",
  answer: "3"
},
{
  question: "8. What was the last movie I went to?\n\n1.Tenet\n2.Raadhe\n3.Avengers\n\n",
  answer: "1"

},
{
  question: "9. What celebrity would I like to meet?\n\n1.Robert Downey Junior\n2.Katherine Langford\n3.Kristen Stewart\n\n",
  answer: "2"
},
{
  question: "10. What is my favorite video game?\n\n1.Assassin's Creed 3\n2.Prince of Persia\n3.Call of duty\n\n",
  answer: "1"
}];


print("\n");


function welcome(){
  var userName = readlineSync.question(chalk.green("What's your name?🤔\n"));
  print("\n");
  print(chalk.white.bgMagenta("Hello!" , chalk.strikethrough.bold(userName.toUpperCase()) + " 😀 " + " Welcome to the Game 🤓  "));
  

  print("\n");
  print(chalk.blue.bold("Let's see How well do you know me?  🤨 "));
  print("\n");
  print("Let's Begin! 😁 ")
  print("\n");
 
 }



function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    print(chalk.green.bold("You are right 🙂" ));
    score = score + 10;
  }else{
    print(chalk.redBright.bold("You are wrong 🙁"));
    score = score - 10;
    print("Correct answer is: "+ chalk.greenBright.bold(answer));
  }
  print(chalk.magentaBright.bold("curent score: "+ score));
  print(chalk.red.bold("___________________________________________________\n"));
}

function game(){

  for( var i=0; i<questions.length; i++){
   play(questions[i].question, questions[i].answer);
  }

       
  }


  

function showScore(){
  if(score<0){
    print(chalk.whiteBright.bold.bgMagenta("😕  Your final score is: "+ score));
  print("\n");

  }else{
  print(chalk.whiteBright.bold.bgMagenta("😁  Your final score is: "+ score));
  print("\n");
  }
  
  print(chalk.green.bold("___________________________________________________\n"));

  if(score > 70){
    print(chalk.redBright.bold("😲 You are amazing \nYou've Scored " + chalk.green.bold(score) + " now you are in our leaderBoard 😎\n Please share screenshot so that i can update leaderBoard 😁 "));
  }else 
  {
   print(chalk.yellow.bold("You don't know much about me🤨\n"));
  }

  print(chalk.green.bold("___________________________________________________\n"));
   print("\n");
    
    print(chalk.magenta.bgWhite.bold("_________________"));
print(chalk.magenta.bgWhite.bold.underline("  Leaderboad     "));
print(chalk.magenta.bgWhite.bold("                 \n"));

    
  highScore.map(score => console.log(chalk.black.bgWhite.bold(score.name, ":", score.score)))

 
}

welcome();
game();
showScore();
exit();
function exit(){
print("\n");
print(chalk.green("Thank you for playing this quiz. Have a nice day😁\n"));

 var v = readlineSync.question(chalk.red("Do you want to play again?\n\nEnter YES or NO\n"));

if(v.toUpperCase()==="YES"){
  print("\n")
  game();
  showScore();
}
else{
  print("Okay Buddy see you in the next quiz 😉 ")
}

}
