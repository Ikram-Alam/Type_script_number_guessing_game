#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'guessing_number',
        message: 'Enter a number between 1 and 6 = ',
    },
]);
if (answer.guessing_number === randomnumber) {
    console.log('Congrats! You got it!');
}
else {
    console.log('Sorry, try again');
}
