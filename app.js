let maximum=parseInt(prompt("Enter The Maximum Number!"));
while(!maximum)
{
   maximum=parseInt(prompt("Enter a valid number!"));
}
let targetNum=Math.floor(Math.random()*maximum)+1;

let guess=parseInt(prompt("Enter your First Guess!"));
let attempts=1;

while(parseInt(guess)!== targetNum)
{
    attempts++;
    if(guess==='q')break;
    if(guess>targetNum)
    {
        guess =prompt("Too High! Enter a new Guess");
    }
    else
    {
        guess =prompt("Too Low! Enter a new Guess");
    }
}
if (guess === 'q')
{
    console.log("OK! You Quit");
}
else
{
console.log("CONGRATULATIONS!!");
console.log(`You Got It! It Took You ${attempts} guesses`);
}